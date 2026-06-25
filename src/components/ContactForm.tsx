"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k – $100k", "$100k+"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "Exploring options"];

const inputClass =
  "w-full rounded-xl border border-gold bg-background/60 px-4 py-3 text-sm text-white placeholder:text-muted/70 transition-colors focus:border-gold/70 focus:outline-none focus:ring-1 focus:ring-gold/40";
const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-card/60 p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold" />
        <h3 className="mt-5 font-heading text-2xl font-bold text-white">Message received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thanks for reaching out. We'll get back to you within 24 hours — usually much sooner.
        </p>
        <Button className="mt-7" onClick={() => setSubmitted(false)} variant="secondary">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-gold bg-card/50 p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name *</label>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company</label>
          <input id="company" name="company" className={inputClass} placeholder="Acme Inc" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@acme.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="whatsapp">WhatsApp</label>
          <input id="whatsapp" name="whatsapp" className={inputClass} placeholder="+1 555 000 1234" />
        </div>
        <div>
          <label className={labelClass} htmlFor="service">Service needed</label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="budget">Budget range</label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>Select a budget</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" className={inputClass} defaultValue="">
            <option value="" disabled>Select a timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="description">Project description *</label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            className={inputClass}
            placeholder="Tell us what you're building, the problem you're solving, and what success looks like."
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full" size="lg">
        <Send className="h-4 w-4" /> Send message
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        We respond within 24 hours. Your details stay private.
      </p>
    </form>
  );
}
