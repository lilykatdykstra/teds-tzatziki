"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import type { StoreProduct } from "@/lib/sanity/api";
import type { ShopPageDocument } from "@/lib/sanity/types";

const inputClass =
  "mt-1 w-full rounded-xl border border-sand bg-cream px-4 py-3 text-stone outline-none transition focus:border-aegean focus:ring-2 focus:ring-aegean/20";

type WholesaleInquiryFormProps = Pick<
  ShopPageDocument,
  | "formStoreLabel"
  | "formContactLabel"
  | "formEmailLabel"
  | "formPhoneLabel"
  | "formStoreTypeLabel"
  | "formStoreTypeOptions"
  | "formProductsLabel"
  | "formVolumeLabel"
  | "formRegionLabel"
  | "formMessageLabel"
  | "formSubmitText"
  | "formSuccessTitle"
  | "formSuccessMessage"
> & {
  products: StoreProduct[];
};

export function WholesaleInquiryForm({
  products,
  formStoreLabel = "Store / Company name",
  formContactLabel = "Contact name",
  formEmailLabel = "Email",
  formPhoneLabel = "Phone",
  formStoreTypeLabel = "Store type",
  formStoreTypeOptions,
  formProductsLabel = "Products interested in",
  formVolumeLabel = "Estimated monthly cases",
  formRegionLabel = "Delivery region / states",
  formMessageLabel = "Additional details",
  formSubmitText = "Request a Quote",
  formSuccessTitle = "Quote request received!",
  formSuccessMessage = "Thanks for your interest. We'll be in touch soon.",
}: WholesaleInquiryFormProps) {
  const storeTypeOptions = formStoreTypeOptions ?? [];
  const [submitted, setSubmitted] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function toggleProduct(id: string) {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-sand bg-white p-12 text-center shadow-sm">
        <span className="text-4xl">✓</span>
        <h3 className="mt-4 font-display text-2xl text-stone">
          {formSuccessTitle}
        </h3>
        <p className="mt-2 max-w-sm text-stone/70">{formSuccessMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-sand bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="store"
            className="block text-sm font-medium text-stone"
          >
            {formStoreLabel}
          </label>
          <input
            id="store"
            name="store"
            type="text"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-stone"
          >
            {formContactLabel}
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-stone"
          >
            {formPhoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone"
          >
            {formEmailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
        {storeTypeOptions.length > 0 && (
          <div className="sm:col-span-2">
            <label
              htmlFor="storeType"
              className="block text-sm font-medium text-stone"
            >
              {formStoreTypeLabel}
            </label>
            <select
              id="storeType"
              name="storeType"
              required
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select store type
              </option>
              {storeTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        {products.length > 0 && (
          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-medium text-stone">
              {formProductsLabel}
            </legend>
            <div className="mt-3 flex flex-col gap-2">
              {products.map((product) => (
                <label
                  key={product.id}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-sand bg-cream/50 px-4 py-3 transition hover:border-aegean/40"
                >
                  <input
                    type="checkbox"
                    name="products"
                    value={product.id}
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleProduct(product.id)}
                    className="h-4 w-4 rounded border-sand text-aegean focus:ring-aegean/30"
                  />
                  <span className="text-sm text-stone">{product.name}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}
        <div>
          <label
            htmlFor="volume"
            className="block text-sm font-medium text-stone"
          >
            {formVolumeLabel}
          </label>
          <input
            id="volume"
            name="volume"
            type="text"
            placeholder="e.g. 20 cases / month"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="region"
            className="block text-sm font-medium text-stone"
          >
            {formRegionLabel}
          </label>
          <input
            id="region"
            name="region"
            type="text"
            placeholder="e.g. Iowa, Nebraska"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone"
          >
            {formMessageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        {formSubmitText}
      </Button>
    </form>
  );
}
