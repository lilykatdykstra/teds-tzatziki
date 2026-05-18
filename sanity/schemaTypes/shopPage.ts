import { BasketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const shopPage = defineType({
  name: "shopPage",
  title: "Shop Page",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Shop Page" }) },
});
