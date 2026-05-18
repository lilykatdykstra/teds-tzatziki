import { ComposeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const recipesPage = defineType({
  name: "recipesPage",
  title: "Recipes Page",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Recipes Page" }) },
});
