import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { seedContactPage } from "../seed-data";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      initialValue: seedContactPage.seoTitle,
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      initialValue: seedContactPage.seoDescription,
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: seedContactPage.eyebrow,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: seedContactPage.title,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      initialValue: seedContactPage.description,
    }),
    defineField({
      name: "locationName",
      title: "Location Name",
      type: "string",
      initialValue: seedContactPage.locationName,
    }),
    defineField({
      name: "locationLine1",
      title: "Location Line 1",
      type: "string",
      initialValue: seedContactPage.locationLine1,
    }),
    defineField({
      name: "locationLine2",
      title: "Location Line 2",
      type: "string",
      initialValue: seedContactPage.locationLine2,
    }),
    defineField({
      name: "visitNote",
      title: "Visit Note",
      type: "text",
      rows: 2,
      initialValue: seedContactPage.visitNote,
    }),
    defineField({
      name: "formNameLabel",
      title: "Form Name Label",
      type: "string",
      initialValue: seedContactPage.formNameLabel,
    }),
    defineField({
      name: "formEmailLabel",
      title: "Form Email Label",
      type: "string",
      initialValue: seedContactPage.formEmailLabel,
    }),
    defineField({
      name: "formMessageLabel",
      title: "Form Message Label",
      type: "string",
      initialValue: seedContactPage.formMessageLabel,
    }),
    defineField({
      name: "formSubmitText",
      title: "Form Submit Button",
      type: "string",
      initialValue: seedContactPage.formSubmitText,
    }),
    defineField({
      name: "formSuccessTitle",
      title: "Form Success Title",
      type: "string",
      initialValue: seedContactPage.formSuccessTitle,
    }),
    defineField({
      name: "formSuccessMessage",
      title: "Form Success Message",
      type: "text",
      rows: 2,
      initialValue: seedContactPage.formSuccessMessage,
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
