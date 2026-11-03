import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">THE ART OF GOOD FOOD</span>
          <h1>
            A little taste
            <br />
            of <em>something lovely.</em>
          </h1>
          <p>
            Thoughtfully collected recipes for slow mornings,
            cosy evenings and everything in between.
          </p>
          <a href="#recipes" className="explore-button">
            Explore recipes <span>↗</span>
          </a>
        </div>

        <div className="hero-image">
          <div className="image-caption">
            <span>01 / THE COLLECTION</span>
            <span>Made to be savoured.</span>
          </div>
        </div>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-top">
          <div>
            <span className="eyebrow">A COLLECTION OF FAVOURITES</span>
            <h2>Recipes worth remembering.</h2>
          </div>
          <span className="recipe-total">
            0{recipes.length} RECIPES
          </span>
        </div>

        <div className="grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <footer>
        <span>NEXTBITES.</span>
        <p>A good meal is always a good idea.</p>
      </footer>
    </main>
  );
}