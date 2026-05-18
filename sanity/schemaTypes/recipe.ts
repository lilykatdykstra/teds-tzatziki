import { ComposeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const recipe = defineType({
  name: "recipe",
  title: "Recipe",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", media: "photo" },
  },
});
