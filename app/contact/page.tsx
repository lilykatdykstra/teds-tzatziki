import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { getContactPage } from "@/lib/sanity/api";

export const revalidate = 30;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage();
  return {
    title: page.seoTitle ?? "Contact | Ted's Premium Tzatziki",
    description: page.seoDescription,
  };
}

export default async function ContactPage() {
  const page = await getContactPage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          {page.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aegean">
              {page.eyebrow}
            </p>
          )}
          <h1 className="mt-2 font-display text-4xl text-stone sm:text-5xl">
            {page.title}
          </h1>
          {page.description && (
            <p className="mt-4 text-lg leading-relaxed text-stone/70">
              {page.description}
            </p>
          )}
          <div className="mt-8 rounded-2xl border border-sand bg-white p-6">
            {page.locationName && (
              <p className="font-semibold text-stone">{page.locationName}</p>
            )}
            {(page.locationLine1 || page.locationLine2) && (
              <p className="mt-2 text-sm text-stone/70">
                {page.locationLine1}
                {page.locationLine1 && page.locationLine2 && <br />}
                {page.locationLine2}
              </p>
            )}
            {page.visitNote && (
              <p className="mt-4 text-sm text-stone/60">{page.visitNote}</p>
            )}
          </div>
        </div>
        <ContactForm
          nameLabel={page.formNameLabel ?? "Name"}
          emailLabel={page.formEmailLabel ?? "Email"}
          messageLabel={page.formMessageLabel ?? "Message"}
          submitText={page.formSubmitText ?? "Send Message"}
          successTitle={page.formSuccessTitle ?? "Message sent!"}
          successMessage={
            page.formSuccessMessage ??
            "Thanks for reaching out. We'll get back to you soon."
          }
        />
      </div>
    </div>
  );
}
