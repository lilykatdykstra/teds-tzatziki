import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { seedHomepage } from "../seed-data";

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
      initialValue: seedHomepage.heroEyebrow,
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "text",
      rows: 3,
      description:
        "One line per row (e.g. Creamy Greek / Tzatziki / Made by Ted's)",
      initialValue: seedHomepage.heroHeadline,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 3,
      initialValue: seedHomepage.heroSubheadline,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroButtonText",
      title: "Hero Primary Button Text",
      type: "string",
      initialValue: seedHomepage.heroButtonText,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSecondaryButtonText",
      title: "Hero Secondary Button Text",
      type: "string",
      initialValue: seedHomepage.heroSecondaryButtonText,
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: `Default image: /${seedHomepage.heroImagePath} (run npm run seed to upload)`,
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImageAlt",
      title: "Hero Image Alt Text",
      type: "string",
      initialValue: seedHomepage.heroImageAlt,
    }),
    defineField({
      name: "heroBadgeScript",
      title: "Hero Badge Script",
      type: "string",
      initialValue: seedHomepage.heroBadgeScript,
    }),
    defineField({
      name: "heroBadgeLabel",
      title: "Hero Badge Label",
      type: "string",
      initialValue: seedHomepage.heroBadgeLabel,
    }),
    defineField({
      name: "whyEyebrow",
      title: "Why Section Eyebrow",
      type: "string",
      initialValue: seedHomepage.whyEyebrow,
    }),
    defineField({
      name: "whyTitle",
      title: "Why Section Title",
      type: "string",
      initialValue: seedHomepage.whyTitle,
    }),
    defineField({
      name: "whyCtaText",
      title: "Why Section CTA Text",
      type: "string",
      initialValue: seedHomepage.whyCtaText,
    }),
    defineField({
      name: "features",
      title: "Feature Cards",
      type: "array",
      initialValue: seedHomepage.features,
      of: [
        defineArrayMember({
          type: "object",
          name: "feature",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "body",
              type: "text",
              rows: 3,
              validation: (r) => r.required(),
            }),
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
