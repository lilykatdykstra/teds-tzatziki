import type { StructureResolver } from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  title: string,
  schemaType: string,
  documentId: string,
) =>
  S.listItem()
    .title(title)
    .id(documentId)
    .child(
      S.document().schemaType(schemaType).documentId(documentId).title(title),
    );

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "Homepage", "homepage", "homepage"),
      singleton(S, "Our Story", "story", "story"),
      singleton(S, "Wholesale Page", "shopPage", "shopPage"),
      singleton(S, "Recipes Page", "recipesPage", "recipesPage"),
      singleton(S, "Contact Page", "contactPage", "contactPage"),
      S.divider(),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("recipe").title("Recipes"),
    ]);
