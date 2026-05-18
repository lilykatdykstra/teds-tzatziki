import { type SchemaTypeDefinition } from "sanity";
import { contactPage } from "./contactPage";
import { homepage } from "./homepage";
import { product } from "./product";
import { recipe } from "./recipe";
import { recipesPage } from "./recipesPage";
import { shopPage } from "./shopPage";
import { story } from "./story";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, story, recipe, homepage, shopPage, recipesPage, contactPage],
};
