export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  image: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
  },
  {
    id: "veggie-burger",
    title: "Veggie Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
  },
  {
    id: "pasta",
    title: "Creamy Pasta",
    emoji: "🍝",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
  },
  {
    id: "sushi",
    title: "Sushi Rolls",
    emoji: "🍣",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900",
  },
];