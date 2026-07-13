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
    const limitResult = rateLimit(ip, 3, 60 * 60 * 1000); // 3 applications per hour

    if (!limitResult.success) {
      return NextResponse.json(
        { success: false, error: "Too many job application attempts. Please try again in an hour." },
        { 
          status: 429,
          headers: {
            "X-RateLimit-Limit": "3",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": limitResult.resetTime.toString(),
          }
        }
      );
    }

    const body = await request.json();
    const rawRole = body.role;
    const rawName = body.name;
    const rawEmail = body.email;
    const rawWhatsapp = body.whatsapp;
    const rawLocation = body.location;
    const rawEducation = body.education;
    const rawExperience = body.experience;
    const rawField = body.field;
    const rawCvLink = body.cvLink;
    const rawPortfolioLink = body.portfolioLink;
    const rawNotes = body.notes;

    // 2. Input Sanitization
    const role = sanitizeInput(rawRole);
    const name = sanitizeInput(rawName);
    const email = sanitizeInput(rawEmail);
    const whatsapp = sanitizeInput(rawWhatsapp);
    const location = sanitizeInput(rawLocation);
    const education = sanitizeInput(rawEducation);
    const experience = sanitizeInput(rawExperience);
    const field = sanitizeInput(rawField);
    const cvLink = sanitizeInput(rawCvLink);
    const portfolioLink = sanitizeInput(rawPortfolioLink);
    const notes = sanitizeInput(rawNotes);

    // Validation
    if (!role || !name || !email || !cvLink) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (Role, Name, Email, CV Link)" },
        { status: 400 }
      );
    }

    const adminEmail = process.env.CONTACT_EMAIL || "info@valordevs.com";
    const emailSubject = `[Job Application] ${name} - ${role}`;

    // Setup Resend integration if RESEND_API_KEY is available
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const htmlContent = `
        <h2>New Candidate Job Application</h2>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: sans-serif; width: 100%; max-width: 600px;">
          <tr style="background-color: #f2f2f2;">
            <th align="left">Field</th>
            <th align="left">Value</th>
          </tr>
          <tr>
            <td><strong>Role Applied For</strong></td>
            <td>${role}</td>
          </tr>
          <tr>
            <td><strong>Full Name</strong></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td><strong>Email Address</strong></td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td><strong>Phone / WhatsApp</strong></td>
            <td>${whatsapp || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Location / Address</strong></td>
            <td>${location || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Education & University</strong></td>
            <td>${education || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Experience</strong></td>
            <td>${experience || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Field of Expertise</strong></td>
            <td>${field || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>CV / Resume Link</strong></td>
            <td><a href="${cvLink}" target="_blank">${cvLink}</a></td>
          </tr>
          <tr>
            <td><strong>GitHub / Portfolio Link</strong></td>
            <td>${portfolioLink ? `<a href="${portfolioLink}" target="_blank">${portfolioLink}</a>` : "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Cover Note / Notes</strong></td>
            <td>${notes || "Not provided"}</td>
          </tr>
        </table>
      `;

      await resend.emails.send({
        from: "Valor Devs Applications <applications@valordevs.com>",
        to: adminEmail,
        subject: emailSubject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, method: "resend" });
    }

    // Fallback: Post to Web3Forms if RESEND_API_KEY is missing (ideal for static deployment)
    const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (web3formsAccessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          subject: emailSubject,
          from_name: "Valor Devs Careers",
          to_email: adminEmail,
          role,
          name,
          email,
          whatsapp: whatsapp || "N/A",
          location: location || "N/A",
          education: education || "N/A",
          experience: experience || "N/A",
          field: field || "N/A",
          cvLink,
          portfolioLink: portfolioLink || "N/A",
          notes: notes || "N/A",
        }),
      });

      if (!response.ok) {
        throw new Error("Web3Forms endpoint failed");
      }

      return NextResponse.json({ success: true, method: "web3forms" });
    }

    // Log the application to console if no keys are found
    console.log("No Email Client Key configured. Application details:", {
      role, name, email, whatsapp, location, education, experience, field, cvLink, portfolioLink, notes
    });

    return NextResponse.json({
      success: true,
      method: "console-fallback",
      message: "Application processed locally. Configure RESEND_API_KEY or NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to send emails in production."
    });

  } catch (error: any) {
    console.error("Application API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
