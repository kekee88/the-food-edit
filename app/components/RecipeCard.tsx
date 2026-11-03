import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="card">
      <div className="card-art">
        <img
  src={recipe.image}
  alt={recipe.title}
  loading="lazy"
  decoding="async"
/>
        <span className="card-number">THE RECIPE COLLECTION</span>
      </div>

      <div className="card-info">
        <div>
          <span className="card-cuisine">{recipe.cuisine}</span>
          <h3>{recipe.title}</h3>
        </div>
        <span className="card-arrow">↗</span>
      </div>

      <div className="card-meta">
        <span>{recipe.minutes} MIN</span>
        <span>{recipe.difficulty.toUpperCase()}</span>
      </div>
    </article>
  );
}