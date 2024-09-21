// To parse this data:
//
//   import { Convert, Recipes } from "./file";
//
//   const recipes = Convert.toRecipes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface RecipeResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}

export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: String;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}
