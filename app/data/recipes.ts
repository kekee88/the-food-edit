
export type Recipe = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    description: "A classic Italian pizza topped with fresh tomatoes, mozzarella, and basil.",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900",
    ingredients: [
      "1 pizza base",
      "1/2 cup pizza sauce",
      "1 cup mozzarella cheese",
      "2 tomatoes",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
      "Salt to taste"
    ],
    steps: [
      "Preheat the oven to 200°C.",
      "Spread pizza sauce evenly over the pizza base.",
      "Add mozzarella cheese and sliced tomatoes.",
      "Drizzle olive oil and add fresh basil leaves.",
      "Bake for 12–15 minutes until the cheese melts and the crust turns golden.",
      "Slice and serve hot."
    ]
  },
  {
    id: "veggie-burger",
    title: "Veggie Burger",
    description: "A delicious burger filled with a crispy vegetable patty and fresh toppings.",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=900",
    ingredients: [
      "2 burger buns",
      "2 vegetable patties",
      "2 lettuce leaves",
      "1 tomato, sliced",
      "1 onion, sliced",
      "2 cheese slices",
      "2 tablespoons mayonnaise",
      "1 tablespoon oil"
    ],
    steps: [
      "Heat oil in a pan and cook the vegetable patties until golden.",
      "Slice the burger buns and lightly toast them.",
      "Spread mayonnaise on the inside of both bun halves.",
      "Place lettuce, the vegetable patty, cheese, tomato, and onion on the bottom half.",
      "Cover with the top half of the bun.",
      "Serve fresh with your favourite dip."
    ]
  },
  {
    id: "pasta",
    title: "Creamy Pasta",
    description: "Rich and creamy pasta tossed in a smooth, cheesy white sauce.",
    emoji: "🍝",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
    ingredients: [
      "200 g pasta",
      "2 tablespoons butter",
      "2 tablespoons all-purpose flour",
      "1 cup milk",
      "1/2 cup grated cheese",
      "2 garlic cloves, chopped",
      "1/2 teaspoon black pepper",
      "Salt to taste"
    ],
    steps: [
      "Boil pasta in salted water until cooked. Drain and keep aside.",
      "Melt butter in a pan and sauté chopped garlic.",
      "Add flour and stir continuously for a minute.",
      "Slowly pour in milk while stirring to avoid lumps.",
      "Add cheese, salt, and black pepper.",
      "Add the cooked pasta and mix until coated with the sauce.",
      "Serve warm."
    ]
  },
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    description: "Fresh Japanese-style sushi rolls filled with seasoned rice and crunchy vegetables.",
    emoji: "🍣",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Japanese",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900",
    ingredients: [
      "1 cup sushi rice",
      "2 tablespoons rice vinegar",
      "2 nori seaweed sheets",
      "1 cucumber, cut into thin strips",
      "1 avocado, sliced",
      "1 carrot, cut into thin strips",
      "1 teaspoon sugar",
      "Salt to taste",
      "Soy sauce for serving"
    ],
    steps: [
      "Wash and cook the sushi rice according to the packet instructions.",
      "Mix rice vinegar, sugar, and salt, then gently combine with the cooked rice.",
      "Place a nori sheet on a clean bamboo rolling mat.",
      "Spread a thin layer of seasoned rice over the nori sheet, leaving a small border.",
      "Arrange cucumber, avocado, and carrot strips in a line near one edge.",
      "Carefully roll the nori sheet using the mat and press gently to shape it.",
      "Cut the roll into bite-sized pieces using a sharp, clean knife.",
      "Serve with soy sauce."
    ]
  }
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
