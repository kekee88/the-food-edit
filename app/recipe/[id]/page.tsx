
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

export const instant = false;

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <h1>
        {recipe.emoji} {recipe.title}
      </h1>

      <p>{recipe.description}</p>

      <p>
        Cuisine: {recipe.cuisine} |
        Cooking time: {recipe.minutes} minutes |
        Difficulty: {recipe.difficulty}
      </p>

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Cooking Steps</h2>

      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
