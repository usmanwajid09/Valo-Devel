"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle: string;
}

export function ApplyModal({ isOpen, onClose, roleTitle }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    location: "",
    education: "",
    experience: "",
    field: "",
    cvLink: "",
    portfolioLink: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.cvLink) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: roleTitle,
          ...formData,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        location: "",
        education: "",
        experience: "",
        field: "",
        cvLink: "",
        portfolioLink: "",
        notes: "",
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      {/* Modal Card Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-gold bg-[#0e131f] text-white shadow-2xl transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gold/10 px-6 py-4">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Apply for <span className="text-gold-light">{roleTitle}</span>
            </h3>
            <p className="text-xs text-muted mt-0.5">Submit your application details below.</p>
          </div>
          <button 
            onClick={onClose} 
            className="rounded-lg p-1 text-muted hover:bg-gold/10 hover:text-gold transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="max-h-[75vh] overflow-y-auto p-6">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/5">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h4 className="mt-6 text-xl font-bold text-white">Application Sent!</h4>
              <p className="mt-3 max-w-md text-sm text-muted">
                Thank you for applying. We have received your details and will review them shortly.
              </p>
              <div className="mt-8">
                <Button onClick={onClose} variant="secondary">Close Window</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Email (Grid) */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Phone/WhatsApp & Location (Grid) */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="e.g. +1 512 760 8676"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    Current Location / Address
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Austin, TX"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Education & Experience (Grid) */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    Current Education & University
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="e.g. BS Computer Science, UT Austin"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 3+ years"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Field of Expertise */}
              <div>
                <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                  Field of Expertise
                </label>
                <input
                  type="text"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  placeholder="e.g. Front-End / Machine Learning / QA"
                  className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* CV Resume Link & GitHub/Portfolio (Grid) */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    CV / Resume Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    name="cvLink"
                    required
                    value={formData.cvLink}
                    onChange={handleChange}
                    placeholder="Link to Google Drive / Dropbox PDF"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    GitHub / Portfolio Link
                  </label>
                  <input
                    type="url"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    placeholder="Link to GitHub or website"
                    className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Cover Note */}
              <div>
                <label className="block text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                  Cover Note / Why Valor Devs?
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about yourself and why you're a great fit..."
                  className="w-full rounded-lg border border-gold/20 bg-surface/40 px-3 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* Status Indicators */}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-xs text-red-400">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 border-t border-gold/10 pt-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted hover:bg-gold/10 hover:text-white transition-all duration-200"
                >
                  Cancel
                </button>
                <Button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-1.5"
                >
                  {status === "submitting" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" /> Submit Application
                    </>
                  )}
                </Button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
