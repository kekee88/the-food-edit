
import RecipeGrid from "./components/RecipeGrid";
import FoodSlideshow from "./components/FoodSlideshow";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="/the-food-edit/" className="logo">
          NextBites.
        </a>

        <nav className="site-nav">
          <a href="/the-food-edit/">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#about">Our Story</a>
        </nav>
      </header>

      <section className="hero">
        <p>THE ART OF GOOD FOOD</p>
        <h1>Where every dish tells a story.</h1>
        <span>
          Discover beautiful recipes, thoughtfully selected for those
          who believe that cooking is an art.
        </span>
        <a href="#recipes">Explore recipes</a>
      </section>

      <FoodSlideshow />

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <p>CURATED FOR YOUR TABLE</p>
          <h2>Our Recipe Collection</h2>
        </div>

        <RecipeGrid recipes={recipes} />
      </section>

      <section className="about-section" id="about">
        <p>THE STORY BEHIND NEXTBITES</p>
        <h2>Good food. Beautiful moments.</h2>
        <p>
          NextBites brings together inspiring recipes and the joy of
          creating something wonderful in your kitchen. From everyday
          favourites to flavours worth discovering, every bite has a story.
        </p>
      </section>

      <footer className="site-footer">
        <h2>NextBites.</h2>
        <p>Made for the love of good food.</p>
        <p>© 2026 NextBites. All rights reserved.</p>
      </footer>
    </main>
  );
}
