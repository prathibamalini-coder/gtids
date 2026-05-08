"use client";

import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useState } from "react";

const RECIPIENT = "info@gramtarang.org";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
  });

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
          _subject: `New contact from ${formData.name}`,
          ...formData,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", org: "", message: "" });
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
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        description="Whether you are a partner, beneficiary, institution, or individual looking to collaborate, our team is here to assist you."
      />
      <section className="container-prose pb-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h3 className="font-display text-xl text-foreground">Corporate Office</h3>
            <div className="mt-5 space-y-5 text-sm">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground leading-relaxed">
                  <div className="font-medium text-foreground">Address</div>
                  Gram Tarang Inclusive Development Services Pvt. Ltd.<br />
                  Flat no 501, Akruthi Vijayalakshmi Residency,<br />
                  P &amp; T Colony, Seethammadhara,<br />
                  Vishakhapatnam – 530013
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground">
                  <div className="font-medium text-foreground">Phone</div>
                  <a href="tel:+919348865447" className="hover:text-primary">+91 93488 65447</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground">
                  <div className="font-medium text-foreground">Email</div>
                  <a href="mailto:info@gramtarang.org" className="hover:text-primary">
                    info@gramtarang.org
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                  <Globe className="h-4 w-4" />
                </span>
                <div className="text-muted-foreground">
                  <div className="font-medium text-foreground">Website</div>
                  <a
                    href="https://www.gramtarang.org"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    www.gramtarang.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft">
            <h3 className="font-display text-2xl text-foreground">Send us a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us a little about your interest and we'll get back to you shortly.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-primary-soft/60 p-6 text-center">
                <div className="font-display text-lg text-primary">Thank you!</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your message has been successfully sent to our team. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-primary underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone <span className="text-accent">*</span>
                    </label>
                    <input
                      id="phone"
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
                    <label htmlFor="org" className="text-sm font-medium text-foreground">
                      Organization <span className="text-accent">*</span>
                    </label>
                    <input
                      id="org"
                      name="org"
                      type="text"
                      required
                      value={formData.org}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
                    placeholder="Tell us how we can help…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="justify-self-start inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
