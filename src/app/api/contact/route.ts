import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";
import { rateLimit } from "@/lib/rate-limit";

// Helper function to escape HTML special characters to prevent HTML/XSS injection
function sanitizeInput(text: string): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(request: Request) {
  try {
    // 1. IP-Based Rate Limiting Check
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const limitResult = rateLimit(ip, 5, 15 * 60 * 1000); // 5 submissions per 15 mins

    if (!limitResult.success) {
      return NextResponse.json(
        { success: false, error: "Too many contact submissions. Please try again in 15 minutes." },
        { 
          status: 429,
          headers: {
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": limitResult.resetTime.toString(),
          }
        }
      );
    }

    const body = await request.json();
    const rawName = body.name;
    const rawCompany = body.company;
    const rawEmail = body.email;
    const rawWhatsapp = body.whatsapp;
    const rawService = body.service;
    const rawBudget = body.budget;
    const rawTimeline = body.timeline;
    const rawDescription = body.description;

    // 2. Input Sanitization
    const name = sanitizeInput(rawName);
    const company = sanitizeInput(rawCompany);
    const email = sanitizeInput(rawEmail);
    const whatsapp = sanitizeInput(rawWhatsapp);
    const service = sanitizeInput(rawService);
    const budget = sanitizeInput(rawBudget);
    const timeline = sanitizeInput(rawTimeline);
    const description = sanitizeInput(rawDescription);

    // Validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, description)" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || siteConfig.contact.email;

    // 1. If Resend is configured, use Resend API directly (no extra package required)
    if (process.env.RESEND_API_KEY) {
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #d4af37; margin-bottom: 20px; font-weight: bold;">New Lead Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; width: 30%;">Name</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold;">Company</td>
              <td style="padding: 10px 0;">${company || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold;">WhatsApp</td>
              <td style="padding: 10px 0;">${whatsapp || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold;">Service Needed</td>
              <td style="padding: 10px 0;">${service || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold;">Budget Range</td>
              <td style="padding: 10px 0;">${budget || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold;">Timeline</td>
              <td style="padding: 10px 0;">${timeline || "N/A"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <h3 style="color: #374151; font-size: 16px; margin-bottom: 10px;">Project Description:</h3>
            <p style="color: #4b5563; line-height: 1.6; background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #f3f4f6; white-space: pre-wrap;">${description}</p>
          </div>
        </div>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Valor Devs Contact <contact@valordevs.com>",
          to: recipientEmail,
          subject: `New Lead: ${name} (${company || "Individual"})`,
          html: emailHtml,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Resend API error:", errorText);
        return NextResponse.json({ success: false, error: "Failed to send email via Resend" }, { status: 500 });
      }

      return NextResponse.json({ success: true, message: "Email sent successfully via Resend" });
    }

    // 2. Fallback: If Web3Forms access key is configured, forward the request to Web3Forms
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject: `New Lead: ${name} (${company || "Individual"})`,
          from_name: name,
          name,
          email,
          company: company || "N/A",
          whatsapp: whatsapp || "N/A",
          service: service || "N/A",
          budget: budget || "N/A",
          timeline: timeline || "N/A",
          description,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Web3Forms API error:", errorText);
        return NextResponse.json({ success: false, error: "Failed to send email via Web3Forms" }, { status: 500 });
      }

      return NextResponse.json({ success: true, message: "Email sent successfully via Web3Forms" });
    }

    // If neither is configured, log the payload and return warning
    console.warn("Contact form submitted but no email API key (RESEND_API_KEY or WEB3FORMS_ACCESS_KEY) is set.", body);
    return NextResponse.json(
      { 
        success: true, 
        message: "Message received locally, but email keys are not configured yet. Set RESEND_API_KEY or WEB3FORMS_ACCESS_KEY in your env configuration.",
        data: body
      }
    );

  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
