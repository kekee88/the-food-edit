
"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.cuisine} ${recipe.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="recipe-tools">
        <input
          className="search-bar"
          type="text"
          placeholder="Search recipes or cuisines..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="no-results">
            No recipes found. Try another search.
          </p>
        )}
      </div>
    </>
  );
}
