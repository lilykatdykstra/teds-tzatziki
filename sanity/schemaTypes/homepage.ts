import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
      initialValue: "Family owned since 1957",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "text",
      rows: 3,
      description: "One line per row (e.g. Creamy Greek / Tzatziki / Made by Ted's)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroBadgeScript",
      title: "Hero Badge Script",
      type: "string",
    }),
    defineField({
      name: "heroBadgeLabel",
      title: "Hero Badge Label",
      type: "string",
    }),
    defineField({
      name: "whyEyebrow",
      title: "Why Section Eyebrow",
      type: "string",
    }),
    defineField({
      name: "whyTitle",
      title: "Why Section Title",
      type: "string",
    }),
    defineField({
      name: "whyCtaText",
      title: "Why Section CTA Text",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "feature",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "body", type: "text", rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    },
  },
});
