"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-sand bg-white p-12 text-center shadow-sm">
        <span className="text-4xl">✓</span>
        <h2 className="mt-4 font-display text-2xl text-stone">Message sent!</h2>
        <p className="mt-2 text-stone/70">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-sand bg-white p-8 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-sand bg-cream px-4 py-3 text-stone outline-none transition focus:border-aegean focus:ring-2 focus:ring-aegean/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-sand bg-cream px-4 py-3 text-stone outline-none transition focus:border-aegean focus:ring-2 focus:ring-aegean/20"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full resize-none rounded-xl border border-sand bg-cream px-4 py-3 text-stone outline-none transition focus:border-aegean focus:ring-2 focus:ring-aegean/20"
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
