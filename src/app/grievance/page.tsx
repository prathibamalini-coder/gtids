"use client";

import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { ShieldAlert } from "lucide-react";

const RECIPIENT = "aswinikumar@cutmap.ac.in";

function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New grievance from ${formData.name}`,
          ...formData,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact · Grievance"
        title="Raise a grievance."
        description="Your feedback helps us serve communities better. Share your concern and our team will get back to you."
      />
      <section className="container-prose pb-14">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-7 md:p-9 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/20 text-accent">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-xl text-foreground">Grievance form</h2>
              <p className="text-sm text-muted-foreground">
                We treat every report with care and confidentiality.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-primary-soft/60 p-6 text-center">
              <div className="font-display text-lg text-primary">Received</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Your grievance has been successfully submitted. Our team will review it and get back to you.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-primary underline"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="g-name" className="text-sm font-medium text-foreground">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="g-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="g-email" className="text-sm font-medium text-foreground">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="g-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="g-phone" className="text-sm font-medium text-foreground">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  id="g-phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[789][0-9]{9}"
                  title="Phone number must be exactly 10 digits and start with 7, 8, or 9"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="g-message" className="text-sm font-medium text-foreground">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="g-message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                  placeholder="Describe your grievance in detail…"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="justify-self-start inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Submitting..." : "Submit grievance"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export default GrievancePage;
