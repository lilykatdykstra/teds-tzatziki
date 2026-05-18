import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "locationName", title: "Location Name", type: "string" }),
    defineField({ name: "locationLine1", title: "Location Line 1", type: "string" }),
    defineField({ name: "locationLine2", title: "Location Line 2", type: "string" }),
    defineField({ name: "visitNote", title: "Visit Note", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
