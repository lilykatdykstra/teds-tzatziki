import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Wholesale Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sku",
      title: "SKU",
      type: "string",
    }),
    defineField({
      name: "packSize",
      title: "Pack Size",
      type: "string",
      description: "e.g. 16 oz tub",
    }),
    defineField({
      name: "unitsPerCase",
      title: "Units Per Case",
      type: "number",
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "minOrderCases",
      title: "Minimum Order (cases)",
      type: "number",
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "price",
      title: "MSRP (USD)",
      type: "number",
      description: "Suggested retail — wholesale pricing is quoted per tier",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "sku", media: "image" },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ?? undefined,
        media,
      };
    },
  },
});
