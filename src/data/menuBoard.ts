export type MenuBoardIcon = "bagel" | "coffee" | "drink" | "salad" | "sandwich" | "sparkles" | "utensils";

export const MENU_BOARD_REFRESH_SECONDS = 300;

export type MenuBoardPriceSource =
  | { kind: "item" }
  | {
      kind: "modifier";
      groupIds?: readonly string[];
      groupNames: readonly string[];
      optionNames: readonly string[];
    }
  | {
      kind: "item-plus-modifier";
      groupIds?: readonly string[];
      groupNames: readonly string[];
      optionNames: readonly string[];
    };

export type MenuBoardPriceDefinition = {
  label?: string;
  fallbackCents: number;
  source: MenuBoardPriceSource;
};

export type MenuBoardItemDefinition = {
  cloverItemId: string;
  name: string;
  description: string;
  prices: readonly MenuBoardPriceDefinition[];
};

export type MenuBoardSectionDefinition = {
  title: string;
  icon: MenuBoardIcon;
  items: readonly MenuBoardItemDefinition[];
  subtitle?: string;
  compact?: boolean;
  dense?: boolean;
  notes?: readonly string[];
};

export type MenuBoardDefinition = {
  id: string;
  label: string;
  columns: readonly (readonly MenuBoardSectionDefinition[])[];
  photo: string;
  photoAlt: string;
  photoPosition: "left" | "center" | "right";
};

function itemPrice(fallbackCents: number, label?: string): MenuBoardPriceDefinition {
  return {
    label,
    fallbackCents,
    source: { kind: "item" }
  };
}

function modifierPrice(
  fallbackCents: number,
  label: string,
  groupNames: readonly string[],
  optionNames: readonly string[],
  groupIds: readonly string[] = []
): MenuBoardPriceDefinition {
  return {
    label,
    fallbackCents,
    source: { kind: "modifier", groupIds, groupNames, optionNames }
  };
}

function itemWithModifierPrice(
  fallbackCents: number,
  label: string,
  groupNames: readonly string[],
  optionNames: readonly string[],
  groupIds: readonly string[] = []
): MenuBoardPriceDefinition {
  return {
    label,
    fallbackCents,
    source: { kind: "item-plus-modifier", groupIds, groupNames, optionNames }
  };
}

const breakfastBagels: MenuBoardSectionDefinition = {
  title: "Breakfast Bagels",
  icon: "bagel",
  subtitle: "Served on your choice of bagel.",
  items: [
    {
      cloverItemId: "Q396S464HRTQG",
      name: "Golden Scramble",
      description: "Choice of bagel with egg and cheese. Add bacon, ham, sausage, or turkey.",
      prices: [
        itemPrice(831, "Regular"),
        itemWithModifierPrice(1039, "With meat", ["Add Meat to Golden Scramble"], ["Bacon", "Ham", "Sausage", "Turkey"])
      ]
    },
    {
      cloverItemId: "A88QZA05HXMVY",
      name: "Golden Works",
      description: "Choice of bagel with eggs, cheese, bacon, turkey, and ham.",
      prices: [itemPrice(1143)]
    },
    {
      cloverItemId: "CRGB4BFRZE2C8",
      name: "Greek Scramble",
      description: "Eggs, cheese, roasted vegetables, spinach, tomato, onion, and feta.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "779Q8VNK6V5WP",
      name: "Pesto Scramble",
      description: "Eggs, cheese, tomato, basil, and pesto.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "6110BQ75Q56MW",
      name: "Southwest Veggie Scramble",
      description: "Eggs, cheese, and roasted vegetables.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "XSQ2X6ZEQZMT8",
      name: "Smoked Lox Scramble",
      description: "Eggs, cheese, smoked lox, and tomato.",
      prices: [itemPrice(1247)]
    }
  ]
};

const goldenDeals: MenuBoardSectionDefinition = {
  title: "Golden Deals",
  icon: "coffee",
  subtitle: "Choose your favorite bagel.",
  compact: true,
  items: [
    {
      cloverItemId: "V0ZMVYWNKV408",
      name: "Bagel w/ Cream Cheese",
      description: "Choice of bagel with cream cheese.",
      prices: [itemPrice(519)]
    },
    {
      cloverItemId: "R2M80DHSHA1K2",
      name: "Bagel w/ Avocado",
      description: "Choice of bagel with avocado.",
      prices: [itemPrice(623)]
    },
    {
      cloverItemId: "3BZ0GSM5QA7P4",
      name: "Bagel w/ Hummus",
      description: "Choice of bagel with hummus.",
      prices: [itemPrice(519)]
    },
    {
      cloverItemId: "GRNQBA9J7Q47E",
      name: "Bagel w/ Butter",
      description: "Choice of bagel with butter.",
      prices: [itemPrice(415)]
    },
    {
      cloverItemId: "P9TXVC18SK38C",
      name: "Bagel w/ PB & Jelly",
      description: "Choice of bagel with peanut butter and jelly.",
      prices: [itemPrice(519)]
    },
    {
      cloverItemId: "PXSZHP07YEX4E",
      name: "Bagel w/ Nutella",
      description: "Choice of bagel with Nutella.",
      prices: [itemPrice(519)]
    },
    {
      cloverItemId: "EHQVSBWCKGXE6",
      name: "Bagel w/ Cinnamon",
      description: "Choice of bagel with cinnamon.",
      prices: [itemPrice(519)]
    },
    {
      cloverItemId: "2A2DF153D5N06",
      name: "Bagel w/ Jelly",
      description: "Choice of bagel with jelly.",
      prices: [itemPrice(415)]
    }
  ]
};

const bagelPacks: MenuBoardSectionDefinition = {
  title: "Bagel Packs",
  icon: "bagel",
  items: [
    {
      cloverItemId: "923FY915A5REE",
      name: "Half Dozen",
      description: "Six bagels; choose flavors.",
      prices: [itemPrice(1247)]
    },
    {
      cloverItemId: "0GEFQQ1HNMA36",
      name: "Baker's Dozen",
      description: "13 bagels; choose flavors.",
      prices: [itemPrice(2500)]
    },
    {
      cloverItemId: "EJ8TN77QZNJ7M",
      name: "Baker's Nosh Box",
      description: "13 bagels, two cream cheese selections, and jam.",
      prices: [itemPrice(3119)]
    }
  ]
};

const creamCheese: MenuBoardSectionDefinition = {
  title: "Cream Cheese",
  icon: "sparkles",
  compact: true,
  items: [
    {
      cloverItemId: "4ZG4TXZQZKR42",
      name: "Plain Cream Cheese Tub",
      description: "Plain cream cheese; choose 8 oz or 16 oz.",
      prices: [
        modifierPrice(699, "8 oz", ["Size Cream Cheese Tub", "Size CC Tub"], ["8 oz"], ["T201M0H3FBB8W"]),
        modifierPrice(1199, "16 oz", ["Size Cream Cheese Tub", "Size CC Tub"], ["16 oz"], ["T201M0H3FBB8W"])
      ]
    },
    {
      cloverItemId: "AK345Q9G4CAYE",
      name: "Flavored Cream Cheese",
      description: "8 oz tub; choose a flavor.",
      prices: [itemPrice(831, "8 oz")]
    }
  ],
  notes: [
    "Plain",
    "Strawberry",
    "Garden Veggie",
    "Jalapeño",
    "Greek Feta-Olive",
    "Spinach Artichoke",
    "Pecan Raisin",
    "Non-Dairy",
    "Garlic Chive",
    "Lox",
    "Sun-Dried Tomato"
  ]
};

const lunchBagels: MenuBoardSectionDefinition = {
  title: "Lunch Bagels",
  icon: "sandwich",
  subtitle: "Served on your choice of bagel.",
  items: [
    {
      cloverItemId: "DCGKYSYCHNTZ8",
      name: "Chicken Breast Sandwich",
      description: "Chicken, lettuce, tomato, onion, mayo, and honey mustard.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "2JF4G5HXB51RE",
      name: "Classic B.L.T.",
      description: "Bacon, lettuce, tomato, and mayo.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "YVG5MQZBGRDV0",
      name: "Golden Club",
      description: "Bacon, turkey, ham, Thousand Island, lettuce, tomato, and onion.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "61AJTXW57R5W0",
      name: "Ham Sandwich",
      description: "Ham, lettuce, tomato, onion, mayo, and mustard.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "C2FT3HYQFGEGC",
      name: "Turkey Sandwich",
      description: "Turkey, lettuce, tomato, onion, mayo, and mustard.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "J59WZ06QC2VXM",
      name: "Tuna Sandwich",
      description: "Tuna, lettuce, and tomato.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "S5AKTV68HGAMG",
      name: "Lox Bagel",
      description: "Fresh lox, cream cheese, tomato, onion, capers, and lettuce.",
      prices: [
        modifierPrice(1143, "Closed", ["Lox Style", "Style Lox"], ["Closed"], ["BHKQKWDHAR3M8"]),
        modifierPrice(1663, "Open", ["Lox Style", "Style Lox"], ["Open Face", "Open"], ["BHKQKWDHAR3M8"])
      ]
    },
    {
      cloverItemId: "GHR56QFXVKGXR",
      name: "Veggie Sandwich",
      description: "Hummus, cucumber, lettuce, tomato, onion, and sprouts.",
      prices: [itemPrice(1039)]
    }
  ]
};

const focaccia: MenuBoardSectionDefinition = {
  title: "Focaccia Sandwiches",
  icon: "sandwich",
  subtitle: "Served on focaccia.",
  dense: true,
  items: [
    {
      cloverItemId: "7K05ZZDA292N4",
      name: "Turkey Cobb",
      description: "Turkey, garlic-chive cream cheese, tomato, onion, and mixed greens.",
      prices: [itemPrice(1455)]
    },
    {
      cloverItemId: "8J95JVVS1JGGM",
      name: "T.B.A.C.",
      description: "Turkey, bacon, avocado, cheddar, veggie cream cheese, tomato, onion, and mixed greens.",
      prices: [itemPrice(1455)]
    },
    {
      cloverItemId: "0MD4G08X2B5PE",
      name: "Tuna Boat",
      description: "Tuna salad, avocado, sprouts, cucumber, mayo, and cheese.",
      prices: [itemPrice(1455)]
    },
    {
      cloverItemId: "M68KGZR32ZTBJ",
      name: "French B.L.T.",
      description: "Bacon, avocado, blue cheese, mayo, honey mustard, tomato, onion, and mixed greens.",
      prices: [itemPrice(1455)]
    },
    {
      cloverItemId: "XWNF82JH4P6BJ",
      name: "Chicken Pesto",
      description: "Chicken, parmesan, mozzarella, pesto, tomato, onion, and mixed greens.",
      prices: [itemPrice(1455)]
    }
  ]
};

const melts: MenuBoardSectionDefinition = {
  title: "Open-Faced Melts",
  icon: "coffee",
  subtitle: "Served open-faced on your choice of bagel.",
  dense: true,
  items: [
    {
      cloverItemId: "ACS8KGJJGV05R",
      name: "Tomato Avocado Melt",
      description: "Tomato, avocado, and melted cheese.",
      prices: [itemPrice(1247)]
    },
    {
      cloverItemId: "RNN3MQBKPVHCR",
      name: "Cream Cheese Melt",
      description: "Cream cheese and your choice of melted cheese.",
      prices: [itemPrice(1143)]
    },
    {
      cloverItemId: "MNBPXM6RZZSEW",
      name: "Pepperoni Melt",
      description: "Pizza sauce, pepperoni, and melted cheese.",
      prices: [itemPrice(1247)]
    }
  ]
};

const wraps: MenuBoardSectionDefinition = {
  title: "Wraps",
  icon: "utensils",
  items: [
    {
      cloverItemId: "HDXAMKE5CWMTC",
      name: "Thai Chicken",
      description: "Grilled chicken, cucumber, cabbage, sprouts, crunchy noodles, and ginger-peanut dressing.",
      prices: [itemPrice(1247)]
    },
    {
      cloverItemId: "GDTQN7PBGEA5R",
      name: "Turkey Club",
      description: "Turkey, bacon, ham, and mixed cheese.",
      prices: [itemPrice(1247)]
    },
    {
      cloverItemId: "YNAZD7DPSYT7C",
      name: "Caesar Wrap",
      description: "Romaine, tomato, parmesan, croutons, basil, and Caesar dressing.",
      prices: [itemPrice(1247)]
    },
    {
      cloverItemId: "PD6GH4PSMQ456",
      name: "Traditional Breakfast Wrap",
      description: "Scrambled eggs, mixed cheese, ham, and bacon.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "09GWTYQS6Y1ZA",
      name: "Greek Wrap",
      description: "Scrambled eggs, roasted vegetables, spinach, tomato, onion, and feta.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "MG65CWN3FKNQJ",
      name: "Southwest Roast Veggie",
      description: "Scrambled eggs, roasted vegetables, pepper jack, and veggie cream cheese.",
      prices: [itemPrice(1039)]
    },
    {
      cloverItemId: "FYX1JG7VMS5RJ",
      name: "Pesto Wrap",
      description: "Scrambled eggs, goat cheese, basil, tomato, spinach, and pesto.",
      prices: [itemPrice(1039)]
    }
  ]
};

const salads: MenuBoardSectionDefinition = {
  title: "Salads",
  icon: "salad",
  items: [
    {
      cloverItemId: "HFZ6F7CBWGZDG",
      name: "Caesar",
      description: "Romaine, tomato, parmesan, croutons, basil, and Caesar dressing.",
      prices: [
        modifierPrice(1099, "Small", ["Size Salad", "Size Salads"], ["Small"], ["XJSW6ZHDPM442"]),
        modifierPrice(1299, "Large", ["Size Salad", "Size Salads"], ["Large"], ["XJSW6ZHDPM442"])
      ]
    },
    {
      cloverItemId: "QG8SXA21H8XVW",
      name: "Oriental Chicken",
      description: "Chicken, romaine, cabbage, crunchy noodles, peanuts, sprouts, ginger vinaigrette, mandarin oranges, and sesame.",
      prices: [
        modifierPrice(1143, "Small", ["Size Salad with Protein", "Size Salads+"], ["Small"], ["KFCE3H0ZF5JHP"]),
        modifierPrice(1351, "Large", ["Size Salad with Protein", "Size Salads+"], ["Large"], ["KFCE3H0ZF5JHP"])
      ]
    },
    {
      cloverItemId: "Q06D85K2G17D4",
      name: "Greek",
      description: "Romaine, tomato, cucumber, olives, onion, feta, cranberries, and balsamic vinaigrette.",
      prices: [
        modifierPrice(1099, "Small", ["Size Salad", "Size Salads"], ["Small"], ["XJSW6ZHDPM442"]),
        modifierPrice(1299, "Large", ["Size Salad", "Size Salads"], ["Large"], ["XJSW6ZHDPM442"])
      ]
    },
    {
      cloverItemId: "XJGS75WB90SA2",
      name: "Balsamic Chicken",
      description: "Mixed greens, chicken, pecans, mandarin oranges, apples, blue cheese, and balsamic vinaigrette.",
      prices: [
        modifierPrice(1143, "Small", ["Size Salad with Protein", "Size Salads+"], ["Small"], ["KFCE3H0ZF5JHP"]),
        modifierPrice(1351, "Large", ["Size Salad with Protein", "Size Salads+"], ["Large"], ["KFCE3H0ZF5JHP"])
      ]
    },
    {
      cloverItemId: "RE9Q0ACJ2FQHE",
      name: "Traditional Cobb",
      description: "Mixed greens, tomato, cucumber, chicken, avocado, bacon, blue cheese, and Italian vinaigrette.",
      prices: [
        modifierPrice(1143, "Small", ["Size Salad with Protein", "Size Salads+"], ["Small"], ["KFCE3H0ZF5JHP"]),
        modifierPrice(1351, "Large", ["Size Salad with Protein", "Size Salads+"], ["Large"], ["KFCE3H0ZF5JHP"])
      ]
    }
  ]
};

const smoothies: MenuBoardSectionDefinition = {
  title: "Smoothies",
  icon: "drink",
  items: [
    {
      cloverItemId: "AJ30ZTDHDPG1P",
      name: "Twin Turbo Berry Blast",
      description: "Blueberries, raspberries, banana, cranberry, and ice.",
      prices: [
        modifierPrice(699, "16 oz", ["Size Smoothies"], ["Small (16 oz)", "16 oz"], ["VEF9F4KT7SPHW"]),
        modifierPrice(899, "24 oz", ["Size Smoothies"], ["Large (24 oz)", "24 oz"], ["VEF9F4KT7SPHW"])
      ]
    },
    {
      cloverItemId: "CTBZXH32FQC4M",
      name: "Strawberry Nitrous Drift",
      description: "Strawberry, banana, apple, and ice.",
      prices: [
        modifierPrice(699, "16 oz", ["Size Smoothies"], ["Small (16 oz)", "16 oz"], ["VEF9F4KT7SPHW"]),
        modifierPrice(899, "24 oz", ["Size Smoothies"], ["Large (24 oz)", "24 oz"], ["VEF9F4KT7SPHW"])
      ]
    },
    {
      cloverItemId: "N8MF0FYAD61GJ",
      name: "Midnight Burnout",
      description: "Banana, Nutella, peanut butter, and ice.",
      prices: [
        modifierPrice(699, "16 oz", ["Size Smoothies"], ["Small (16 oz)", "16 oz"], ["VEF9F4KT7SPHW"]),
        modifierPrice(899, "24 oz", ["Size Smoothies"], ["Large (24 oz)", "24 oz"], ["VEF9F4KT7SPHW"])
      ]
    }
  ]
};

const acai: MenuBoardSectionDefinition = {
  title: "Açaí Bowl",
  icon: "sparkles",
  items: [
    {
      cloverItemId: "WT4Z2MH9H2JS8",
      name: "Açaí Bowl",
      description: "Granola, açaí, blueberries, strawberries, banana, honey, shredded coconut, and glazed pecans.",
      prices: [itemPrice(1499)]
    }
  ],
  notes: ["Extra toppings available at additional cost."]
};

export const menuBoards: readonly MenuBoardDefinition[] = [
  {
    id: "breakfast",
    label: "Breakfast, Deals & Bagel Packs",
    columns: [[breakfastBagels], [goldenDeals], [bagelPacks, creamCheese]],
    photo: "/gallery/golden-bagel-65.jpg",
    photoAlt: "Golden Bagel breakfast sandwich",
    photoPosition: "center"
  },
  {
    id: "lunch",
    label: "Lunch Bagels, Focaccia & Melts",
    columns: [[lunchBagels], [focaccia, melts]],
    photo: "/gallery/golden-bagel-53.jpg",
    photoAlt: "Golden Bagel lox bagel",
    photoPosition: "right"
  },
  {
    id: "wraps-salads-smoothies",
    label: "Wraps, Salads, Smoothies & Açaí",
    columns: [[wraps], [salads], [smoothies, acai]],
    photo: "/goldenbagels/menu/order-online.png",
    photoAlt: "Golden Bagel wrap",
    photoPosition: "left"
  }
] as const;
