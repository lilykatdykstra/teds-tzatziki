import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ted's Premium Tzatziki",
  description: "Get in touch with Ted's Premium Tzatziki.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-aegean">
            Contact
          </p>
          <h1 className="mt-2 font-display text-4xl text-stone sm:text-5xl">
            Say hello
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone/70">
            Questions about orders, wholesale, or visiting Ted&apos;s Coney Island? Send us a message — we&apos;d love to hear from you.
          </p>
          <div className="mt-8 rounded-2xl border border-sand bg-white p-6">
            <p className="font-semibold text-stone">Ted&apos;s Coney Island</p>
            <p className="mt-2 text-sm text-stone/70">
              3020 Ingersoll Ave, Des Moines, Iowa 50312
            </p>
            <p className="mt-4 text-sm text-stone/60">
              Stop in and meet Ted — he still comes by a couple times a week!
            </p>
          </div>
        </div>
        <ContactForm
          nameLabel="Name"
          emailLabel="Email"
          messageLabel="Message"
          submitText="Send Message"
          successTitle="Message sent!"
          successMessage="Thanks for reaching out. We'll get back to you soon."
        />
      </div>
    </div>
  );
}
