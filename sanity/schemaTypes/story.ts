import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { seedStory } from "../seed-data";

export const story = defineType({
  name: "story",
  title: "Our Story Page",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      initialValue: seedStory.seoTitle,
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      initialValue: seedStory.seoDescription,
    }),
    defineField({
      name: "sectionEyebrow",
      title: "Section Eyebrow",
      type: "string",
      initialValue: seedStory.sectionEyebrow,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: seedStory.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 16,
      description: "Separate paragraphs with a blank line",
      initialValue: seedStory.body,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "founderPhoto",
      title: "Founder Photo",
      type: "image",
      description: `Default image: /${seedStory.founderPhotoPath} (run npm run seed to upload)`,
      options: { hotspot: true },
    }),
    defineField({
      name: "founderPhotoAlt",
      title: "Founder Photo Alt Text",
      type: "string",
      initialValue: seedStory.founderPhotoAlt,
    }),
    defineField({
      name: "quote",
      title: "Pull Quote",
      type: "text",
      rows: 3,
      initialValue: seedStory.quote,
    }),
    defineField({
      name: "quoteAttribution",
      title: "Quote Attribution",
      type: "string",
      initialValue: seedStory.quoteAttribution,
    }),
  ],
  preview: {
    select: { title: "title", media: "founderPhoto" },
  },
});
