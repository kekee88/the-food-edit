
import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card-link">
      <article className="card">
        <div className="card-art">
          <img src={recipe.image} alt={recipe.title} />
          <span className="card-number">NEXTBITES</span>
        </div>

        <div className="card-info">
          <p className="card-cuisine">{recipe.cuisine}</p>
          <h3>{recipe.title}</h3>
          <p className="card-description">{recipe.description}</p>

          <div className="card-meta">
            <span>{recipe.minutes} min</span>
            <span>{recipe.difficulty}</span>
          </div>

          <span className="card-arrow">Discover recipe →</span>
        </div>
      </article>
    </Link>
  );
}
