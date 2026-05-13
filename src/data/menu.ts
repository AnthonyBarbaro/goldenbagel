export type MenuCategory =
  | "Flavors & Toppings"
  | "Golden Deals"
  | "Breakfast Bagels"
  | "Breakfast Wraps"
  | "Lunch Bagels"
  | "Gourmet Wraps"
  | "Focaccia Sandwiches"
  | "Salads"
  | "Smoothies";

export type MenuTag = "vegetarian" | "dairy-free" | "gluten-free available" | "popular";

export type MenuModifier = {
  name: string;
  options: string[];
  required?: boolean;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  image: string;
  tags: MenuTag[];
  modifiers: MenuModifier[];
  cloverItemId?: string;
  available: boolean;
};

export const menuCategories: MenuCategory[] = [
  "Golden Deals",
  "Breakfast Bagels",
  "Breakfast Wraps",
  "Lunch Bagels",
  "Gourmet Wraps",
  "Focaccia Sandwiches",
  "Salads",
  "Smoothies",
  "Flavors & Toppings"
];

const bagelChoice = {
  name: "Bagel choice",
  required: false,
  options: [
    "Plain",
    "Asiago",
    "Everything",
    "Jalapeno-Cheese",
    "Honey-Wheat",
    "Multi Grain",
    "Potato",
    "Rye",
    "Pumpernickel",
    "Salt",
    "Bialy",
    "Sun-Dried Tomato",
    "Sourdough",
    "Egg",
    "Sesame",
    "Onion",
    "Poppy",
    "Spinach",
    "Chocolate-Chip",
    "Cinnamon Raisin",
    "Cranberry-Orange",
    "Blueberry",
    "Rainbow",
    "Croissant"
  ]
};

const creamCheeseChoice = {
  name: "Cream cheese",
  required: false,
  options: [
    "Plain",
    "Jalapeno",
    "Veggie",
    "Garlic Chive",
    "Spinach Artichoke",
    "Greek Feta Olive",
    "Strawberry",
    "Pecan Raisin",
    "Non Dairy"
  ]
};

const image = "/goldenbagels/menu/order-online.png";

export const menuItems: MenuItem[] = [
  {
    id: "bagel-cream-cheese",
    name: "Bagel with Cream Cheese",
    description: "Your choice of fresh bagel with a generous cream cheese spread.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian", "popular"],
    modifiers: [bagelChoice, creamCheeseChoice],
    available: true
  },
  {
    id: "bagel-avocado",
    name: "Bagel with Avocado",
    description: "Fresh bagel topped with avocado.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian", "dairy-free"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "bagel-hummus",
    name: "Bagel with Hummus",
    description: "Fresh bagel with hummus.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian", "dairy-free"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "bagel-butter",
    name: "Bagel with Butter",
    description: "Simple, toasted, and warm.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "bagel-pb-jelly",
    name: "Bagel with PB & Jelly",
    description: "A sweet cafe classic with peanut butter and jelly.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "half-dozen",
    name: "Half Dozen Mixed Bagels",
    description: "Six mixed bagels, easy for a small breakfast spread.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian"],
    modifiers: [],
    available: true
  },
  {
    id: "bakers-dozen",
    name: "Baker's Dozen Mixed Bagels",
    description: "Thirteen mixed bagels for the table, office, or family.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian", "popular"],
    modifiers: [],
    available: true
  },
  {
    id: "bakers-nosh-box",
    name: "Baker's Nosh Box",
    description: "Thirteen mixed bagels, two cream cheese tubs, and jam.",
    category: "Golden Deals",
    image,
    tags: ["vegetarian", "popular"],
    modifiers: [creamCheeseChoice],
    available: true
  },
  {
    id: "golden-scramble",
    name: "Golden Scramble",
    description: "Bagel of your choice, eggs, and cheese.",
    category: "Breakfast Bagels",
    image,
    tags: ["vegetarian", "popular"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "golden-scramble-meat",
    name: "Golden Scramble with Meat",
    description: "Eggs, cheese, and your choice of bacon, turkey, ham, sausage, or chicken.",
    category: "Breakfast Bagels",
    image,
    tags: ["popular"],
    modifiers: [
      bagelChoice,
      { name: "Meat choice", required: false, options: ["Bacon", "Turkey", "Ham", "Sausage", "Chicken"] }
    ],
    available: true
  },
  {
    id: "golden-works",
    name: "Golden Works",
    description: "Bagel of your choice, eggs, cheese, bacon, ham, and sausage.",
    category: "Breakfast Bagels",
    image,
    tags: ["popular"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "smoked-lox-scramble",
    name: "Smoked Lox Scramble",
    description: "Bagel of your choice, eggs, cheese, and smoked lox.",
    category: "Breakfast Bagels",
    image,
    tags: ["popular"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "greek-scramble",
    name: "Greek Scramble",
    description: "Eggs, cheese, roasted veggies, spinach, tomato, onion, and feta.",
    category: "Breakfast Bagels",
    image,
    tags: ["vegetarian"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "pesto-scramble",
    name: "Pesto Scramble",
    description: "Eggs, goat cheese, basil, tomato, spinach, and pesto.",
    category: "Breakfast Bagels",
    image,
    tags: ["vegetarian"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "traditional-breakfast-wrap",
    name: "Traditional Breakfast Wrap",
    description: "Scrambled eggs, mixed cheese, ham, and bacon.",
    category: "Breakfast Wraps",
    image,
    tags: ["popular"],
    modifiers: [],
    available: true
  },
  {
    id: "southwest-wrap",
    name: "Southwest Wrap",
    description: "Scrambled eggs, roasted vegetables, pepper Jack, veggie cheese, and avocado.",
    category: "Breakfast Wraps",
    image,
    tags: ["vegetarian"],
    modifiers: [],
    available: true
  },
  {
    id: "greek-wrap",
    name: "Greek Wrap",
    description: "Scrambled eggs, roasted vegetables, spinach, tomato, onion, and feta.",
    category: "Breakfast Wraps",
    image,
    tags: ["vegetarian"],
    modifiers: [],
    available: true
  },
  {
    id: "pesto-wrap",
    name: "Pesto Wrap",
    description: "Scrambled eggs, goat cheese, basil, tomato, spinach, and pesto.",
    category: "Breakfast Wraps",
    image,
    tags: ["vegetarian"],
    modifiers: [],
    available: true
  },
  {
    id: "chicken-breast-sandwich",
    name: "Chicken Breast Sandwich",
    description: "Chicken, lettuce, tomato, onion, mayo, honey, and mustard on your bagel choice.",
    category: "Lunch Bagels",
    image,
    tags: [],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "classic-blt",
    name: "Classic B.L.T.",
    description: "Lettuce, tomato, mayo, and bacon on your bagel choice.",
    category: "Lunch Bagels",
    image,
    tags: [],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "golden-club",
    name: "Golden Club",
    description: "Bacon, turkey, ham, Thousand Island, lettuce, tomato, and onion.",
    category: "Lunch Bagels",
    image,
    tags: ["popular"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "ham-sandwich",
    name: "Ham Sandwich",
    description: "Ham, lettuce, tomato, onion, mayo, and mustard on your bagel choice.",
    category: "Lunch Bagels",
    image,
    tags: [],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "turkey-sandwich",
    name: "Turkey Sandwich",
    description: "Turkey, lettuce, tomato, onion, mayo, and mustard on your bagel choice.",
    category: "Lunch Bagels",
    image,
    tags: [],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "tuna-sandwich",
    name: "Tuna Sandwich",
    description: "Tuna, lettuce, and tomato on your bagel choice.",
    category: "Lunch Bagels",
    image,
    tags: [],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "lox-bagel",
    name: "Lox Bagel",
    description: "Fresh lox, cream cheese, tomato, onion, capers, lettuce, and dill.",
    category: "Lunch Bagels",
    image,
    tags: ["popular"],
    modifiers: [
      bagelChoice,
      { name: "Style", required: false, options: ["Closed", "Open"] }
    ],
    available: true
  },
  {
    id: "veggie-sandwich",
    name: "Veggie Sandwich",
    description: "Hummus, cucumber, lettuce, tomato, onion, and sprouts.",
    category: "Lunch Bagels",
    image,
    tags: ["vegetarian", "dairy-free"],
    modifiers: [bagelChoice],
    available: true
  },
  {
    id: "thai-chicken-wrap",
    name: "Thai Chicken Wrap",
    description: "Grilled chicken, cucumber, cabbage, crunchy noodles, and ginger peanut dressing.",
    category: "Gourmet Wraps",
    image,
    tags: ["popular"],
    modifiers: [],
    available: true
  },
  {
    id: "turkey-club-wrap",
    name: "Turkey Club Wrap",
    description: "Turkey, bacon, ham, mixed cheese, tomato, onion, greens, and Thousand Island.",
    category: "Gourmet Wraps",
    image,
    tags: ["popular"],
    modifiers: [],
    available: true
  },
  {
    id: "turkey-cobb",
    name: "Turkey Cobb",
    description: "Turkey, garlic-chive cream cheese, tomato, onion, and mixed greens.",
    category: "Focaccia Sandwiches",
    image,
    tags: [],
    modifiers: [],
    available: true
  },
  {
    id: "french-blt",
    name: "French B.L.T.",
    description: "Bacon, tomato, avocado, blue cheese, mayo, honey mustard, onion, and greens.",
    category: "Focaccia Sandwiches",
    image,
    tags: [],
    modifiers: [],
    available: true
  },
  {
    id: "tbac",
    name: "T.B.A.C.",
    description: "Turkey, bacon, avocado, cheddar, veggie cream cheese, tomato, onion, and greens.",
    category: "Focaccia Sandwiches",
    image,
    tags: [],
    modifiers: [],
    available: true
  },
  {
    id: "chicken-pesto",
    name: "Chicken Pesto",
    description: "Chicken, Parmesan, mozzarella, pesto, tomato, onion, and mixed greens.",
    category: "Focaccia Sandwiches",
    image,
    tags: ["popular"],
    modifiers: [],
    available: true
  },
  {
    id: "tuna-boat",
    name: "Tuna Boat",
    description: "Tuna salad, avocado, sprouts, cucumber, mayo, and cheese.",
    category: "Focaccia Sandwiches",
    image,
    tags: [],
    modifiers: [],
    available: true
  },
  {
    id: "caesar-salad",
    name: "Caesar",
    description: "Romaine, tomato, Parmesan, croutons, and basil Caesar dressing.",
    category: "Salads",
    image,
    tags: ["vegetarian"],
    modifiers: [],
    available: true
  },
  {
    id: "oriental-chicken-salad",
    name: "Oriental Chicken",
    description: "Chicken breast, romaine, cabbage, crunchy noodles, peanuts, sprouts, mandarin oranges, and sesame.",
    category: "Salads",
    image,
    tags: [],
    modifiers: [],
    available: true
  },
  {
    id: "greek-salad",
    name: "Greek",
    description: "Romaine, tomatoes, cucumber, olives, onion, feta, cranberries, and balsamic vinaigrette.",
    category: "Salads",
    image,
    tags: ["vegetarian"],
    modifiers: [],
    available: true
  },
  {
    id: "balsamic-chicken-salad",
    name: "Balsamic Chicken",
    description: "Mixed greens, chicken breast, pecans, mandarin orange, apples, bleu cheese, and balsamic vinaigrette.",
    category: "Salads",
    image,
    tags: [],
    modifiers: [],
    available: true
  },
  {
    id: "traditional-cobb",
    name: "Traditional Cobb",
    description: "Mixed greens, tomato, cucumber, chicken breast, avocado, bacon, bleu cheese, and Italian vinaigrette.",
    category: "Salads",
    image,
    tags: ["popular"],
    modifiers: [],
    available: true
  },
  {
    id: "smoothie-16",
    name: "16 oz Smoothie",
    description: "Choose one of Golden Bagel Cafe's fresh smoothie flavors.",
    category: "Smoothies",
    image,
    tags: ["vegetarian"],
    modifiers: [
      {
        name: "Flavor",
        required: false,
        options: ["Triple Berry Sunrise", "Purple Rain", "California Summer Medley", "Jamaican Dream", "Banana Berry Good", "Raspberry Crush"]
      }
    ],
    available: true
  },
  {
    id: "smoothie-24",
    name: "24 oz Smoothie",
    description: "Choose a larger smoothie for a sunny El Cajon morning.",
    category: "Smoothies",
    image,
    tags: ["vegetarian", "popular"],
    modifiers: [
      {
        name: "Flavor",
        required: false,
        options: ["Triple Berry Sunrise", "Purple Rain", "California Summer Medley", "Jamaican Dream", "Banana Berry Good", "Raspberry Crush"]
      }
    ],
    available: true
  },
  {
    id: "bagel-flavors",
    name: "Bagel Flavors",
    description:
      "Plain, Asiago, Everything, Jalapeno-Cheese, Honey-Wheat, Multi Grain, Potato, Rye, Pumpernickel, Salt, Bialy, Sun-Dried Tomato, Sourdough, Egg, Sesame, Onion, Poppy, Spinach, Chocolate-Chip, Cinnamon Raisin, Cranberry-Orange, Blueberry, Rainbow, and Croissant.",
    category: "Flavors & Toppings",
    image,
    tags: ["vegetarian", "gluten-free available"],
    modifiers: [],
    available: true
  },
  {
    id: "cream-cheese-flavors",
    name: "Cream Cheese Flavors",
    description: "Plain, Jalapeno, Veggie, Garlic Chive, Spinach Artichoke, Greek Feta Olive, Strawberry, Pecan Raisin, and Non Dairy.",
    category: "Flavors & Toppings",
    image,
    tags: ["vegetarian"],
    modifiers: [],
    available: true
  }
];

export const featuredMenuItemIds = [
  "bagel-cream-cheese",
  "golden-scramble",
  "golden-works",
  "lox-bagel",
  "golden-club",
  "thai-chicken-wrap",
  "traditional-cobb",
  "smoothie-24"
];
