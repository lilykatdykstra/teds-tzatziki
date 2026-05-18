import { ComposeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { seedRecipesPage } from "../seed-data";

export const recipesPage = defineType({
  name: "recipesPage",
  title: "Recipes Page",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      initialValue: seedRecipesPage.seoTitle,
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      initialValue: seedRecipesPage.seoDescription,
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: seedRecipesPage.eyebrow,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: seedRecipesPage.title,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      initialValue: seedRecipesPage.description,
    }),
    defineField({
      name: "backLinkText",
      title: "Recipe Detail Back Link",
      type: "string",
      initialValue: seedRecipesPage.backLinkText,
    }),
    defineField({
      name: "ingredientsHeading",
      title: "Recipe Detail Ingredients Heading",
      type: "string",
      initialValue: seedRecipesPage.ingredientsHeading,
    }),
    defineField({
      name: "stepsHeading",
      title: "Recipe Detail Steps Heading",
      type: "string",
      initialValue: seedRecipesPage.stepsHeading,
    }),
  ],
  preview: { prepare: () => ({ title: "Recipes Page" }) },
});
