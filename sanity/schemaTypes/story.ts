import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "sectionEyebrow",
      title: "Section Eyebrow",
      type: "string",
      initialValue: "Our Story",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 16,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "founderPhoto",
      title: "Founder Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "quote",
      title: "Pull Quote",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "quoteAttribution",
      title: "Quote Attribution",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", media: "founderPhoto" },
  },
});
