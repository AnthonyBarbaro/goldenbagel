import type { MenuCategory, MenuItem } from "./menu";

export const onlineMenuGeneratedAt = "2026-05-20T00:28:25.375Z";

export const onlineMenuCategories = [
  "Golden Deals",
  "Breakfast Bagels",
  "Breakfast Wraps",
  "Lunch Bagels",
  "Focaccia Sandwiches",
  "Gourmet Wraps",
  "Salads",
  "Off Menu",
  "Smoothies",
  "Coffee & Tea",
  "Beverages",
  "Rewards",
  "Secret Menu",
  "Donuts",
  "Other items"
] satisfies MenuCategory[];

export const onlineMenuItems = [
  {
    "id": "online-V0ZMVYWNKV408",
    "name": "Bagel w/Cream Cheese",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 727,
    "priceLabel": "$7.27",
    "requiresOptions": true
  },
  {
    "id": "online-R2M80DHSHA1K2",
    "name": "Bagel w/Avocado",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 872,
    "priceLabel": "$8.72",
    "requiresOptions": true
  },
  {
    "id": "online-3BZ0GSM5QA7P4",
    "name": "Bagel w/Hummus",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 727,
    "priceLabel": "$7.27",
    "requiresOptions": true
  },
  {
    "id": "online-PXSZHP07YEX4E",
    "name": "Bagel w/Nutella",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 727,
    "priceLabel": "$7.27",
    "requiresOptions": true
  },
  {
    "id": "online-2A2DF153D5N06",
    "name": "Bagel w/Jelly",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 581,
    "priceLabel": "$5.81",
    "requiresOptions": true
  },
  {
    "id": "online-AK345Q9G4CAYE",
    "name": "Cream Cheese Tub (Flavor)",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "90NR4V0992AMM",
        "name": "Choose CC Flavor Tub",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "BSP84CBY5T26J",
            "name": "Strawberry CC",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6V5BKA815TEGY",
            "name": "Garden Veggie CC",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "23F77X8R06QNE",
            "name": "Jalapeno CC",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SK3980KJHFVP0",
            "name": "Greek Feta-Olive CC",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DFM3YBBRBQTGA",
            "name": "Sun Dried Tomato Cc",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GZ4RV05PS4M2W",
            "name": "Pecan Raisin CC",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "A78RBN9VW0TEJ",
            "name": "Non-Dairy CC",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WABMKF0KXJ1PC",
            "name": "Garlic Chive",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JQW8JY7JB93Z0",
            "name": "Lox Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WPT2JRR469F32",
            "name": "Spinach Artichoke Cc",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1163,
    "priceLabel": "$11.63",
    "requiresOptions": true
  },
  {
    "id": "online-GRNQBA9J7Q47E",
    "name": "Bagel w/Butter",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 581,
    "priceLabel": "$5.81",
    "requiresOptions": true
  },
  {
    "id": "online-923FY915A5REE",
    "name": "Half Dozen Bagels",
    "description": "A Golden Bagel Cafe favorite from the Golden Deals menu.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 1746,
    "priceLabel": "$17.46",
    "requiresOptions": false
  },
  {
    "id": "online-P9TXVC18SK38C",
    "name": "Bagel w/PB & Jelly",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 727,
    "priceLabel": "$7.27",
    "requiresOptions": true
  },
  {
    "id": "online-EHQVSBWCKGXE6",
    "name": "Bagel w/Cinnamon",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 727,
    "priceLabel": "$7.27",
    "requiresOptions": true
  },
  {
    "id": "online-EJ8TN77QZNJ7M",
    "name": "Bagel Nosh Box",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "BZDS9R4YW5V46",
        "name": "Choose CC NB",
        "required": true,
        "minRequired": 2,
        "maxAllowed": 2,
        "options": [
          {
            "id": "MSNGGKNFRRC34",
            "name": "Garlic & Chive CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "HCAM97YJZY2P2",
            "name": "Veggie CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "FWCB520EP8S0J",
            "name": "Jalapeño CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "RHSKJWHNGDEW2",
            "name": "Spinach Artichoke CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "CHS20W2E2WYMC",
            "name": "Strawberry CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "J7KJNKJNBWM10",
            "name": "Non-Diary CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "9V7MH9N242FX2",
            "name": "Plain CC",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "MW0M774V9S8TT",
            "name": "Greek Olives & Feta Cream Cheese",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "MWJYZH0NKJ8TE",
            "name": "Pecan Raisin Cream Cheese",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "3QA8E0B24W0PE",
            "name": "Lox Cream Cheese",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "VJS8599M2CZWP",
            "name": "Sundried Tomato Cream Cheese",
            "priceCents": 279,
            "priceLabel": "$2.79"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 4367,
    "priceLabel": "$43.67",
    "requiresOptions": true
  },
  {
    "id": "online-4ZG4TXZQZKR42",
    "name": "Cream Cheese Tub",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "T201M0H3FBB8W",
        "name": "Size CC Tub",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "DV0E6CRHY4D6P",
            "name": "8 oz",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "5NC8P6MGYWZ82",
            "name": "16 oz",
            "priceCents": 1679,
            "priceLabel": "$16.79"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-0GEFQQ1HNMA36",
    "name": "Bakers Dozen",
    "description": "A Golden Bagel Cafe favorite from the Golden Deals menu.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 2911,
    "priceLabel": "$29.11",
    "requiresOptions": false
  },
  {
    "id": "online-PKZGPT0D6RWQW",
    "name": "Single Bagel",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Golden Deals",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 349,
    "priceLabel": "$3.49",
    "requiresOptions": true
  },
  {
    "id": "online-Q396S464HRTQG",
    "name": "Golden Scramble",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1163,
    "priceLabel": "$11.63",
    "requiresOptions": true
  },
  {
    "id": "online-XSQ2X6ZEQZMT8",
    "name": "Smoked Lox Scramble",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1746,
    "priceLabel": "$17.46",
    "requiresOptions": true
  },
  {
    "id": "online-A88QZA05HXMVY",
    "name": "Golden Works",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1600,
    "priceLabel": "$16.00",
    "requiresOptions": true
  },
  {
    "id": "online-R5VH0XPC6FES8",
    "name": "Golden Scramble (Meat)",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "8B36BK646SR9E",
        "name": "Choose Protein",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "VEM2GMHK0Z30R",
            "name": "Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4WZAZC78H4J9Y",
            "name": "Sausage",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9MB66QX6BWKJT",
            "name": "Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SP6FXTJXSNMPR",
            "name": "Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-779Q8VNK6V5WP",
    "name": "Pesto Scramble",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-6110BQ75Q56MW",
    "name": "South Veggie Scramble",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-CRGB4BFRZE2C8",
    "name": "Greek Scramble",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-PD6GH4PSMQ456",
    "name": "Traditional Wrap",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Wraps",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-09GWTYQS6Y1ZA",
    "name": "Greek Wrap",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Wraps",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-FYX1JG7VMS5RJ",
    "name": "Pesto Wrap",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Wraps",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-MG65CWN3FKNQJ",
    "name": "Southwest Roast Veggie Wrap",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Breakfast Wraps",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-DCGKYSYCHNTZ8",
    "name": "Chicken Breast Sandwich",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-2JF4G5HXB51RE",
    "name": "Classic BLT",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-YVG5MQZBGRDV0",
    "name": "Golden Club",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-C2FT3HYQFGEGC",
    "name": "Turkey Sandwhich",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-GHR56QFXVKGXR",
    "name": "Veggie Sandwich",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-61AJTXW57R5W0",
    "name": "Ham Sandwich",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-J59WZ06QC2VXM",
    "name": "Tuna Sandwich",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": true
  },
  {
    "id": "online-S5AKTV68HGAMG",
    "name": "Lox Bagel",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Lunch Bagels",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "BHKQKWDHAR3M8",
        "name": "Style Lox",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "M0ENVZWGM9ZKC",
            "name": "Open Face",
            "priceCents": 2328,
            "priceLabel": "$23.28"
          },
          {
            "id": "DEABHH64KVXQ2",
            "name": "Closed",
            "priceCents": 1600,
            "priceLabel": "$16.00"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-7K05ZZDA292N4",
    "name": "Turkey Cobb Focaccia",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Focaccia Sandwiches",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 2037,
    "priceLabel": "$20.37",
    "requiresOptions": true
  },
  {
    "id": "online-8J95JVVS1JGGM",
    "name": "T.B.A.C Focaccia",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Focaccia Sandwiches",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 2037,
    "priceLabel": "$20.37",
    "requiresOptions": true
  },
  {
    "id": "online-M68KGZR32ZTBJ",
    "name": "French B.L.T Focaccia",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Focaccia Sandwiches",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 2037,
    "priceLabel": "$20.37",
    "requiresOptions": true
  },
  {
    "id": "online-0MD4G08X2B5PE",
    "name": "Tuna Boat Focaccia",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Focaccia Sandwiches",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 2037,
    "priceLabel": "$20.37",
    "requiresOptions": true
  },
  {
    "id": "online-XWNF82JH4P6BJ",
    "name": "Chicken Pesto Focaccia",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Focaccia Sandwiches",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 2037,
    "priceLabel": "$20.37",
    "requiresOptions": true
  },
  {
    "id": "online-HDXAMKE5CWMTC",
    "name": "Thai Chicken Wrap",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Gourmet Wraps",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1746,
    "priceLabel": "$17.46",
    "requiresOptions": true
  },
  {
    "id": "online-GDTQN7PBGEA5R",
    "name": "Turkey Club Wrap",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Gourmet Wraps",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1746,
    "priceLabel": "$17.46",
    "requiresOptions": true
  },
  {
    "id": "online-YNAZD7DPSYT7C",
    "name": "Caesar Wrap",
    "description": "A Golden Bagel Cafe favorite from the Gourmet Wraps menu.",
    "category": "Gourmet Wraps",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 1746,
    "priceLabel": "$17.46",
    "requiresOptions": false
  },
  {
    "id": "online-HFZ6F7CBWGZDG",
    "name": "Ceasar Salad",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Salads",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XJSW6ZHDPM442",
        "name": "Size Salads",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "25EZT7PXYJVQJ",
            "name": "Small",
            "priceCents": 1539,
            "priceLabel": "$15.39"
          },
          {
            "id": "9TXWGRFYTY9S6",
            "name": "Large",
            "priceCents": 1819,
            "priceLabel": "$18.19"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-QG8SXA21H8XVW",
    "name": "Oriental Chicken Salad",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Salads",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "KFCE3H0ZF5JHP",
        "name": "Size Salads+",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "K7SAR4AN0TG5G",
            "name": "Small",
            "priceCents": 1600,
            "priceLabel": "$16.00"
          },
          {
            "id": "T0BM6GA9HEH20",
            "name": "Large",
            "priceCents": 1891,
            "priceLabel": "$18.91"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-RE9Q0ACJ2FQHE",
    "name": "Traditional Cobb Salad",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Salads",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "KFCE3H0ZF5JHP",
        "name": "Size Salads+",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "K7SAR4AN0TG5G",
            "name": "Small",
            "priceCents": 1600,
            "priceLabel": "$16.00"
          },
          {
            "id": "T0BM6GA9HEH20",
            "name": "Large",
            "priceCents": 1891,
            "priceLabel": "$18.91"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-Q06D85K2G17D4",
    "name": "Greek Salad",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Salads",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "XJSW6ZHDPM442",
        "name": "Size Salads",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "25EZT7PXYJVQJ",
            "name": "Small",
            "priceCents": 1539,
            "priceLabel": "$15.39"
          },
          {
            "id": "9TXWGRFYTY9S6",
            "name": "Large",
            "priceCents": 1819,
            "priceLabel": "$18.19"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-XJGS75WB90SA2",
    "name": "Balsamic Chicken Salad",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Salads",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "4TJQMQKQ6AM4A",
        "name": "Sides",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "GSA158JJJ4AXW",
            "name": "Side Caesar Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "GFCTWCD0XMVA4",
            "name": "Side Baby Greens Salad",
            "priceCents": 581,
            "priceLabel": "$5.81"
          },
          {
            "id": "6J71P313F9JF4",
            "name": "Bag Of Chips",
            "priceCents": 333,
            "priceLabel": "$3.33"
          }
        ]
      },
      {
        "id": "KFCE3H0ZF5JHP",
        "name": "Size Salads+",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "K7SAR4AN0TG5G",
            "name": "Small",
            "priceCents": 1600,
            "priceLabel": "$16.00"
          },
          {
            "id": "T0BM6GA9HEH20",
            "name": "Large",
            "priceCents": 1891,
            "priceLabel": "$18.91"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-ACS8KGJJGV05R",
    "name": "Tomato Avocado Melt",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1746,
    "priceLabel": "$17.46",
    "requiresOptions": true
  },
  {
    "id": "online-WT4Z2MH9H2JS8",
    "name": "Acai Bowl",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "08QRAPC6DZ5NC",
        "name": "Add Acai Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "PDZ2QB5M3NXTA",
            "name": "+Granola",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "H7D2VX8Z0CS18",
            "name": "+Banana",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "P18J3SS3TAC50",
            "name": "+Strawberry",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "PNR4625KHF542",
            "name": "+Acai",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "Q937265KMC2H2",
            "name": "+Honey",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "BAQ37ZJ57XTJ2",
            "name": "+Blueberry",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "RJ028E3ERBV02",
            "name": "+Shredded Coconut",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "ASJ9PYC52A1WM",
            "name": "+Glazed Pecans",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "H5QR3PRCWJZS2",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          }
        ]
      },
      {
        "id": "KMR4E31ADV0NP",
        "name": "No ACAI",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "FN8RFWKVDMYC0",
            "name": "No Granola",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D8R0MJ323WAVP",
            "name": "No Banana",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "0TBECMRVZWX5P",
            "name": "No Strawberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BWKV4W7K1CS6W",
            "name": "No Acai",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5ET5Q33YAP0C4",
            "name": "No Honey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "KDXY41RZRWGBE",
            "name": "No Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WXA2XPQMYFJ42",
            "name": "No Shredded Coconut",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "75H3JH6PYPPAA",
            "name": "No Glazed Pecans",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 2037,
    "priceLabel": "$20.37",
    "requiresOptions": true
  },
  {
    "id": "online-8XKRQ4P5RHGE4",
    "name": "Yesterday's Bagels",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 1018,
    "priceLabel": "$10.18",
    "requiresOptions": false
  },
  {
    "id": "online-6GHWR3PZQR4YM",
    "name": "Kettle Chips",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 333,
    "priceLabel": "$3.33",
    "requiresOptions": false
  },
  {
    "id": "online-7CZNG0JKRZB36",
    "name": "Gluten Free Bagel",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 581,
    "priceLabel": "$5.81",
    "requiresOptions": false
  },
  {
    "id": "online-464JZWHTK1FZW",
    "name": "Gluten Free Bagel With Cream Cheese",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 872,
    "priceLabel": "$8.72",
    "requiresOptions": false
  },
  {
    "id": "online-K8DNEEPAE6ZF0",
    "name": "Bon Appetit Danish/Cake/Muffin",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 276,
    "priceLabel": "$2.76",
    "requiresOptions": false
  },
  {
    "id": "online-6CZ5WKZPBCVGT",
    "name": "Add Cream Cheese",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 217,
    "priceLabel": "$2.17",
    "requiresOptions": false
  },
  {
    "id": "online-YXVYFJ9APDYTJ",
    "name": "Side Of Cream Cheese",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 217,
    "priceLabel": "$2.17",
    "requiresOptions": false
  },
  {
    "id": "online-7CNK33F76VDYY",
    "name": "Side Of Non Dairy Cream Cheese",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 290,
    "priceLabel": "$2.90",
    "requiresOptions": false
  },
  {
    "id": "online-MJ6G581CCYM8R",
    "name": "Extra Dressing Large",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 260,
    "priceLabel": "$2.60",
    "requiresOptions": false
  },
  {
    "id": "online-VQKG10VFM53XA",
    "name": "Extra Dressing Small",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 188,
    "priceLabel": "$1.88",
    "requiresOptions": false
  },
  {
    "id": "online-RNN3MQBKPVHCR",
    "name": "Cream Cheese Melt",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1600,
    "priceLabel": "$16.00",
    "requiresOptions": true
  },
  {
    "id": "online-MNBPXM6RZZSEW",
    "name": "Pepperoni Melt",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "6ASNFJ10NZCZR",
        "name": "Choose CC Flavor",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "6XVAFA2NCE0GC",
            "name": "Strawberry CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "E94R9Q3RDTSH4",
            "name": "Garden Veggie CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "K5Y602W4KZN1C",
            "name": "Jalapeno CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "VWQG970RQDTWY",
            "name": "Greek Feta-Olive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "FC48AXVCRNSJW",
            "name": "Spinach Artichoke CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "64Z94SPWY1D3G",
            "name": "Pecan Raisin CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "CH7PXSZXXJDBW",
            "name": "Non-Dairy CC",
            "priceCents": 144,
            "priceLabel": "$1.44"
          },
          {
            "id": "0H4ARAPNB4C7J",
            "name": "Plain CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "GFPN0Y4SPQSXT",
            "name": "Garlic Chive CC",
            "priceCents": 90,
            "priceLabel": "$0.90"
          },
          {
            "id": "0QR5JXVPHPJZ2",
            "name": "Lox Cream Cheese",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "Y2QHSJZR29EDR",
            "name": "Sundried Tomato Cc",
            "priceCents": 90,
            "priceLabel": "$0.90"
          }
        ]
      },
      {
        "id": "CRJCCETD8RQ40",
        "name": "Choose Cheese",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "22H35CNRBQ3KM",
            "name": "Swiss",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PQWXXENFK9Z4G",
            "name": "Mozzarella",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N85RFYPN525K4",
            "name": "Pepper Jack",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SD24MJMNK9NZ6",
            "name": "Cheddar",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1746,
    "priceLabel": "$17.46",
    "requiresOptions": true
  },
  {
    "id": "online-61F8F4RED0B8R",
    "name": "Golden Bagels T-shirt",
    "description": "A Golden Bagel Cafe favorite from the Off Menu menu.",
    "category": "Off Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 3930,
    "priceLabel": "$39.30",
    "requiresOptions": false
  },
  {
    "id": "online-KQ50739G1GZT0",
    "name": "Triple Berry Sunrise Smoothie",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Smoothies",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [
      {
        "id": "VEF9F4KT7SPHW",
        "name": "Size Smoothies",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "A77W46WHSAXBT",
            "name": "Small (16 oz)",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "SQ3NQM2S2HFPP",
            "name": "Large (24 oz)",
            "priceCents": 1259,
            "priceLabel": "$12.59"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-T2D83SBM02CBT",
    "name": "Purple Rain Smoothie",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Smoothies",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "VEF9F4KT7SPHW",
        "name": "Size Smoothies",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "A77W46WHSAXBT",
            "name": "Small (16 oz)",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "SQ3NQM2S2HFPP",
            "name": "Large (24 oz)",
            "priceCents": 1259,
            "priceLabel": "$12.59"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-GJ2ZCBZ7FKVSR",
    "name": "California Summer Medley Smoothie",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Smoothies",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "VEF9F4KT7SPHW",
        "name": "Size Smoothies",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "A77W46WHSAXBT",
            "name": "Small (16 oz)",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "SQ3NQM2S2HFPP",
            "name": "Large (24 oz)",
            "priceCents": 1259,
            "priceLabel": "$12.59"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-N1Z17TFYXH2XP",
    "name": "Raspberry Crush Smoothie",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Smoothies",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "VEF9F4KT7SPHW",
        "name": "Size Smoothies",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "A77W46WHSAXBT",
            "name": "Small (16 oz)",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "SQ3NQM2S2HFPP",
            "name": "Large (24 oz)",
            "priceCents": 1259,
            "priceLabel": "$12.59"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-3H029MTNJTBKR",
    "name": "Jamaican Dream Smoothie",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Smoothies",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "VEF9F4KT7SPHW",
        "name": "Size Smoothies",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "A77W46WHSAXBT",
            "name": "Small (16 oz)",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "SQ3NQM2S2HFPP",
            "name": "Large (24 oz)",
            "priceCents": 1259,
            "priceLabel": "$12.59"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-AJ8219ZR1CXMA",
    "name": "Banana Berry Berry Good Smoothie",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Smoothies",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "VEF9F4KT7SPHW",
        "name": "Size Smoothies",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "A77W46WHSAXBT",
            "name": "Small (16 oz)",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "SQ3NQM2S2HFPP",
            "name": "Large (24 oz)",
            "priceCents": 1259,
            "priceLabel": "$12.59"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-33PQ5QQF6YG7R",
    "name": "Assorted Gourmet Teas",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "7CVP3P36CPDC2",
        "name": "Choose Tea",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "8PFXVFTKKA078",
            "name": "Regular Tea",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z1WBH4DB9ZPCA",
            "name": "Herbal Tea",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 437,
    "priceLabel": "$4.37",
    "requiresOptions": true
  },
  {
    "id": "online-X516GB62D0ZHW",
    "name": "Hot Chai Tea Latte",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "VHXY3MX2PCYS4",
        "name": "Choose Chai Tea",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "7Q6Z0KA2PA7VM",
            "name": "Vanilla Tea",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8N811CHWEZNRG",
            "name": "Spiced Tea",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 640,
    "priceLabel": "$6.40",
    "requiresOptions": true
  },
  {
    "id": "online-RXJSMXKRDAS82",
    "name": "Iced Tea",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "VADRS5ZQ0B51M",
        "name": "Size Iced Tea",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "DMES7JJCWT89G",
            "name": "Small (16 oz)",
            "priceCents": 340,
            "priceLabel": "$3.40"
          },
          {
            "id": "D5E9BGY6TBG4W",
            "name": "Large (24 oz)",
            "priceCents": 419,
            "priceLabel": "$4.19"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-JQDWG7W7MWR6P",
    "name": "Coffee",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "6Q6JMQ7K8ZVME",
        "name": "Size Coffee",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "DNYAWGBP25AQ2",
            "name": "Small(12 oz)",
            "priceCents": 321,
            "priceLabel": "$3.21"
          },
          {
            "id": "P5H7QGZXVAVAR",
            "name": "Large (20 oz)",
            "priceCents": 489,
            "priceLabel": "$4.89"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-TR8EBGT9T6DXA",
    "name": "Coffee Refill",
    "description": "A Golden Bagel Cafe favorite from the Coffee & Tea menu.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 203,
    "priceLabel": "$2.03",
    "requiresOptions": false
  },
  {
    "id": "online-HEG0T4E4Y5TCR",
    "name": "Iced Coffee",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "2SX9GDE6RZZ1J",
        "name": "Size Iced Coffee",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "WVVV0RF0B2G4P",
            "name": "Small (16 oz)",
            "priceCents": 378,
            "priceLabel": "$3.78"
          },
          {
            "id": "8PE7WHGCCJX72",
            "name": "Large (24 oz)",
            "priceCents": 493,
            "priceLabel": "$4.93"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-BY06513MCZ5F0",
    "name": "Blended Mochas",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "Q1W3396VM07T2",
        "name": "Choose Mocha",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "K79YAMPC1RHV0",
            "name": "Vanilla Latte",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "J3Z5QHCK1KQ3G",
            "name": "Caramel Latte",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GHV7NNS6H7G70",
            "name": "Mocha Latte",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "0087F4YWA6PZ6",
        "name": "Size Mochas",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "9K6YGRYF0XGPJ",
            "name": "Small (16 oz)",
            "priceCents": 720,
            "priceLabel": "$7.20"
          },
          {
            "id": "9Z90HSCJEZAPW",
            "name": "Large (24 oz)",
            "priceCents": 871,
            "priceLabel": "$8.71"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-4BRB00AA1YMJG",
    "name": "Hot Mocha (20 oz)",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Coffee & Tea",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "Q1W3396VM07T2",
        "name": "Choose Mocha",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "K79YAMPC1RHV0",
            "name": "Vanilla Latte",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "J3Z5QHCK1KQ3G",
            "name": "Caramel Latte",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GHV7NNS6H7G70",
            "name": "Mocha Latte",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 582,
    "priceLabel": "$5.82",
    "requiresOptions": true
  },
  {
    "id": "online-ACR42B9NTAB1J",
    "name": "O",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "55CEG99Y5XW8T",
        "name": "Size OJ",
        "required": true,
        "minRequired": 1,
        "maxAllowed": 1,
        "options": [
          {
            "id": "JNTXR38CD0008",
            "name": "16 oz",
            "priceCents": 979,
            "priceLabel": "$9.79"
          },
          {
            "id": "11FK49XTC6MHR",
            "name": "32 oz",
            "priceCents": 2099,
            "priceLabel": "$20.99"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": true
  },
  {
    "id": "online-3V5Z9Q7MKWEMC",
    "name": "Yerba Mate",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 567,
    "priceLabel": "$5.67",
    "requiresOptions": false
  },
  {
    "id": "online-5Q472XYZVY2K0",
    "name": "Nesquik",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 421,
    "priceLabel": "$4.21",
    "requiresOptions": false
  },
  {
    "id": "online-P3KR30V2PY8S2",
    "name": "Celsius",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 350,
    "priceLabel": "$3.50",
    "requiresOptions": false
  },
  {
    "id": "online-591KHKAV1R4EA",
    "name": "Snapple",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 466,
    "priceLabel": "$4.66",
    "requiresOptions": false
  },
  {
    "id": "online-QAY2BVTDQKD42",
    "name": "Apple Juice",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 462,
    "priceLabel": "$4.62",
    "requiresOptions": false
  },
  {
    "id": "online-ZS5B1T23730NJ",
    "name": "Smart Water Small",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 421,
    "priceLabel": "$4.21",
    "requiresOptions": false
  },
  {
    "id": "online-9DJT82RK5VKTW",
    "name": "Perrier Water",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 363,
    "priceLabel": "$3.63",
    "requiresOptions": false
  },
  {
    "id": "online-AT75V1ZZ637XM",
    "name": "Vitamin Water 20 Oz",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 363,
    "priceLabel": "$3.63",
    "requiresOptions": false
  },
  {
    "id": "online-8R0NQFFW2H4FC",
    "name": "Dite Coke Can 12 Oz",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 251,
    "priceLabel": "$2.51",
    "requiresOptions": false
  },
  {
    "id": "online-AMZ3HBHEC8JW8",
    "name": "Sprite Can 12 Oz",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 251,
    "priceLabel": "$2.51",
    "requiresOptions": false
  },
  {
    "id": "online-ZJM2ZGPDCF2YT",
    "name": "Evian Water",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 479,
    "priceLabel": "$4.79",
    "requiresOptions": false
  },
  {
    "id": "online-NQZ37QXRY7866",
    "name": "Dr Pepper 12 Oz Can",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 251,
    "priceLabel": "$2.51",
    "requiresOptions": false
  },
  {
    "id": "online-85QMD3NS2TE30",
    "name": "Coke Glass Bottle",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 435,
    "priceLabel": "$4.35",
    "requiresOptions": false
  },
  {
    "id": "online-M6EJY71GZ8M0C",
    "name": "Sprite Glass bottle",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 435,
    "priceLabel": "$4.35",
    "requiresOptions": false
  },
  {
    "id": "online-R949Y8SMA5J00",
    "name": "Fanta Glass Bottle",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 435,
    "priceLabel": "$4.35",
    "requiresOptions": false
  },
  {
    "id": "online-D8JS2KYW378GG",
    "name": "Electrolit 21oz",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 522,
    "priceLabel": "$5.22",
    "requiresOptions": false
  },
  {
    "id": "online-X94S950GJMP4P",
    "name": "Red Bull 8oz",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 494,
    "priceLabel": "$4.94",
    "requiresOptions": false
  },
  {
    "id": "online-MC15MY0D9293R",
    "name": "Bodyarmor",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 333,
    "priceLabel": "$3.33",
    "requiresOptions": false
  },
  {
    "id": "online-VPD1NT91QA154",
    "name": "Kirkland Water",
    "description": "A Golden Bagel Cafe favorite from the Beverages menu.",
    "category": "Beverages",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 140,
    "priceLabel": "$1.40",
    "requiresOptions": false
  },
  {
    "id": "online-8XE3STRH2Z0B4",
    "name": "REWARD - 24oz Coffee",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Rewards",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": false
  },
  {
    "id": "online-W549P15X5Q240",
    "name": "REWARD - Bagel w/Cream Cheese",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Rewards",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [
      "popular"
    ],
    "modifiers": [],
    "available": true,
    "priceCents": 0,
    "priceLabel": "Options vary",
    "requiresOptions": false
  },
  {
    "id": "online-BKG5JN8X6M7BJ",
    "name": "Scramble Delight",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Secret Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "8B36BK646SR9E",
        "name": "Choose Protein",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "VEM2GMHK0Z30R",
            "name": "Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4WZAZC78H4J9Y",
            "name": "Sausage",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9MB66QX6BWKJT",
            "name": "Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SP6FXTJXSNMPR",
            "name": "Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1600,
    "priceLabel": "$16.00",
    "requiresOptions": true
  },
  {
    "id": "online-8PAD3MYAFNCPW",
    "name": "Sunny Side Breakfast",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Secret Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "8B36BK646SR9E",
        "name": "Choose Protein",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "VEM2GMHK0Z30R",
            "name": "Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4WZAZC78H4J9Y",
            "name": "Sausage",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9MB66QX6BWKJT",
            "name": "Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SP6FXTJXSNMPR",
            "name": "Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1600,
    "priceLabel": "$16.00",
    "requiresOptions": true
  },
  {
    "id": "online-VFED5V3ARHS2G",
    "name": "All American Breakfast",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Secret Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "8B36BK646SR9E",
        "name": "Choose Protein",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "VEM2GMHK0Z30R",
            "name": "Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4WZAZC78H4J9Y",
            "name": "Sausage",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9MB66QX6BWKJT",
            "name": "Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SP6FXTJXSNMPR",
            "name": "Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1600,
    "priceLabel": "$16.00",
    "requiresOptions": true
  },
  {
    "id": "online-5ETTYZDRVMGCR",
    "name": "Sunny SunShine",
    "description": "Customize sizes, flavors, and add-ons through Golden Bagel online ordering.",
    "category": "Secret Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [
      {
        "id": "18JBVXY8ABT5T",
        "name": "Add CC",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "JQBCV8X57KSAT",
            "name": "+Strawberry CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "MMGAG6ZSYB444",
            "name": "+Garden Veggie CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "H85DYJG0Y0JX4",
            "name": "+Jalapeno CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "TYB7SYJDMG09P",
            "name": "+Greek Feta-Olive CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "YRJ614E0D54KE",
            "name": "+Spinach Artichoke CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "8EQH6SXJE29A0",
            "name": "+Pecan Raisin CC",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "GPH66EY1QMJHR",
            "name": "+Non-Dairy CC",
            "priceCents": 290,
            "priceLabel": "$2.90"
          },
          {
            "id": "5KEMEWVE9W0B0",
            "name": "+Plain CC",
            "priceCents": 181,
            "priceLabel": "$1.81"
          },
          {
            "id": "VBTY8YX20CYM2",
            "name": "Note: [Put CC On The Side]",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DAAHC1Q4FG8EJ",
            "name": "Garlic Chive Cc",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "SP8XCYT5XNE88",
            "name": "Sun Dried Tomato Crm Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "BYQZK5RX6MGMT",
            "name": "+lox Cream Cheese",
            "priceCents": 209,
            "priceLabel": "$2.09"
          }
        ]
      },
      {
        "id": "AP76FH90Y7RAP",
        "name": "Add Toppings",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "0MSJ5VJKYAH32",
            "name": "+Tomato",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "NZ323C535QHYW",
            "name": "+Capers",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "WCA54W1E66ZSE",
            "name": "+Cucumber",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "HX6ENC5R6K7KM",
            "name": "+Avocado",
            "priceCents": 251,
            "priceLabel": "$2.51"
          },
          {
            "id": "CD1YYTGZKS86J",
            "name": "+Olives",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "F0HCK17DSB4W0",
            "name": "+Spinach",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "3JBJYMAFA6PB2",
            "name": "+Sprouts",
            "priceCents": 105,
            "priceLabel": "$1.05"
          },
          {
            "id": "6H1P7NKS9A1FA",
            "name": "+Onion",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "4CFPT109SA3C2",
            "name": "+Lettuce",
            "priceCents": 91,
            "priceLabel": "$0.91"
          },
          {
            "id": "DYSG7KS55XDQ0",
            "name": "+Mayo",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "51FJGJE6G457E",
            "name": "+Mustard",
            "priceCents": 70,
            "priceLabel": "$0.70"
          },
          {
            "id": "PVBV6CRZHHWHP",
            "name": "+Pesto",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "EKKKNZVES0T1T",
            "name": "+Butter",
            "priceCents": 73,
            "priceLabel": "$0.73"
          },
          {
            "id": "MTCFQX14ZF304",
            "name": "+Jam",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "84WB1YGSPWB5Y",
            "name": "+Cheddar Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "39XVBK4HNT3W4",
            "name": "+Mozarella Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "SFBAZMW4AX700",
            "name": "+Peper Jack Cheese",
            "priceCents": 188,
            "priceLabel": "$1.88"
          },
          {
            "id": "7JSBV7350C8D0",
            "name": "+Swiss Cheese",
            "priceCents": 223,
            "priceLabel": "$2.23"
          },
          {
            "id": "DSNN09ARV44HW",
            "name": "+Ham",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "F7NFH5DBW822J",
            "name": "+Bacon",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "V60DSP8GFBRME",
            "name": "+Sausage",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "XJTQFV0176MBP",
            "name": "+Turkey",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "8DAJS58H6ZMT0",
            "name": "+Tuna",
            "priceCents": 349,
            "priceLabel": "$3.49"
          },
          {
            "id": "EJZ3N4NS6D16E",
            "name": "+Eggs",
            "priceCents": 435,
            "priceLabel": "$4.35"
          },
          {
            "id": "RAFZJNWJ95MSR",
            "name": "+Chicken",
            "priceCents": 629,
            "priceLabel": "$6.29"
          },
          {
            "id": "G5B0ZQG04A5VW",
            "name": "+Smoked Lox",
            "priceCents": 1018,
            "priceLabel": "$10.18"
          },
          {
            "id": "DGFAZFFNE3A4R",
            "name": "+Peanut Butter",
            "priceCents": 146,
            "priceLabel": "$1.46"
          },
          {
            "id": "18F724NFAZEC8",
            "name": "Side Of Hslapeno",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "CS1JPE9GJJ6D0",
            "name": "Side Of Pickels",
            "priceCents": 139,
            "priceLabel": "$1.39"
          },
          {
            "id": "R5G0KWAZXB26G",
            "name": "Hash Brown",
            "priceCents": 209,
            "priceLabel": "$2.09"
          },
          {
            "id": "Y95J90SWYQPMJ",
            "name": "Arugula",
            "priceCents": 83,
            "priceLabel": "$0.83"
          }
        ]
      },
      {
        "id": "BM12XFX9CW818",
        "name": "Choose Bagel",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "A1FK997J6EA96",
            "name": "Sun-Dried Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32C7DJ6104ZY",
            "name": "Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "ZNFKS0ZD76K5J",
            "name": "Chocolate Chip",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "JPCJRMYAFE3T8",
            "name": "Potato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "CJMYG8KSZG7J6",
            "name": "Muli-Grain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3XFZW0TFS93H4",
            "name": "Pumpernickel",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1F0JNS5CBF57W",
            "name": "Honey-Wheat",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BV3E9VE13KN2A",
            "name": "Sourdough",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F3BBM5275VHNJ",
            "name": "Garlic",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "M7VXR1BY5ADMA",
            "name": "Jalapeño Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "NPXFSQ79KMVFG",
            "name": "Blueberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QH0WABRM6T2KR",
            "name": "Everything",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "8JS0X7T89JM0C",
            "name": "Spinach",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "TQBYPAZ18HF2M",
            "name": "Asiago",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "D5GE35D4AF024",
            "name": "Cinnamon Raisin",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "49KRASKXNW5EA",
            "name": "Bialy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3AH439PR1GCDY",
            "name": "Sesame",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "QR4Y5HFMA35XG",
            "name": "Rye",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "BT2BM5QYFX86A",
            "name": "Cranberry Orange",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P1YEFPZ2VR50Y",
            "name": "Rainbow",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PAJS6AWXR1PM4",
            "name": "Plain",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5D6ZSZR1Q4S4",
            "name": "Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N5CD18GD3TT28",
            "name": "Salt",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "H0S1H7E5NSVXG",
            "name": "Poppy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4NSCQQXDYBY0A",
            "name": "Croissant",
            "priceCents": 217,
            "priceLabel": "$2.17"
          },
          {
            "id": "8X5V52AD8R0R8",
            "name": "Gluten Free Bagel",
            "priceCents": 559,
            "priceLabel": "$5.59"
          }
        ]
      },
      {
        "id": "8B36BK646SR9E",
        "name": "Choose Protein",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "VEM2GMHK0Z30R",
            "name": "Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "4WZAZC78H4J9Y",
            "name": "Sausage",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9MB66QX6BWKJT",
            "name": "Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "SP6FXTJXSNMPR",
            "name": "Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "CEM2B4F9AWDJJ",
        "name": "No",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "D4DVAZ8RX5ZY4",
            "name": "No Mayo",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3FDQYX41R82H8",
            "name": "No Mustard",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y4P1K6T2YJS9T",
            "name": "No Onion",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1P5M5JRZ44TW4",
            "name": "No Tomato",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "R62WNVTZB4YVP",
            "name": "No Lettuce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T065GKTCEW6KA",
            "name": "No Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "7FSVQ2W9VPD2A",
            "name": "No Sprouts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "9C74CCTG7RK6W",
            "name": "No Cucumber",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6VPR9DFAD5WXW",
            "name": "No Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "DHF44VR5Q2GK0",
            "name": "No Sauce",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WCAKDKAJ9ANGM",
            "name": "No Bacon",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "E4C51FSZ435G4",
            "name": "No Avocado",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "HA7WAYFCY0ENY",
            "name": "No Olives",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "V1MTZD0GAVTMG",
            "name": "No Cranberry",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "F1A1B4K3A73PA",
            "name": "No Chicken",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "N9ZPV14ASXKPG",
            "name": "No Peanuts",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "3DSX3XFVEY3EG",
            "name": "No Mandarin Oranges",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P32Y8AY45E1C0",
            "name": "No Roasted Veggies",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "PXJYEVDKBYDRC",
            "name": "No Feta",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "1BCGW22WS8KBY",
            "name": "No Dressing",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "5RVE8F4F56PXT",
            "name": "No Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "AMKP6MHZS8FQT",
            "name": "No Capers",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "P61XVEWRFDAWC",
            "name": "No Turkey",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Z6A8QY864FG7E",
            "name": "No Ham",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "Y0B2DN2JKT4HM",
            "name": "No Pesto",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "YCXTSVS16TEMA",
            "name": "No Blue cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "G1GHW7TB94TW4",
            "name": "No Egg",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      },
      {
        "id": "XMZH6X4TA203R",
        "name": "Style Toast",
        "required": false,
        "minRequired": 0,
        "maxAllowed": 2147483647,
        "options": [
          {
            "id": "E8Z7ANQ4JQ6QG",
            "name": "Double Toast",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "T5THBPAP8648W",
            "name": "Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "6SHYS4ZD8J2GC",
            "name": "Non-Toasted",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "GYHVB6ZWK2YPT",
            "name": "Easy Cream Cheese",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "FZV3V72G8JV8E",
            "name": "Scoop Bread",
            "priceCents": 0,
            "priceLabel": "Options vary"
          },
          {
            "id": "WK6ZSE4MZ5DYW",
            "name": "Allergy",
            "priceCents": 0,
            "priceLabel": "Options vary"
          }
        ]
      }
    ],
    "available": true,
    "priceCents": 1600,
    "priceLabel": "$16.00",
    "requiresOptions": true
  },
  {
    "id": "online-SEVH1NT8NTC9T",
    "name": "Wham Spam Scramble Wrap",
    "description": "A Golden Bagel Cafe favorite from the Secret Menu menu.",
    "category": "Secret Menu",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 1600,
    "priceLabel": "$16.00",
    "requiresOptions": false
  },
  {
    "id": "online-5VK01PDFHAAEC",
    "name": "Single Donut",
    "description": "A Golden Bagel Cafe favorite from the Donuts menu.",
    "category": "Donuts",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 290,
    "priceLabel": "$2.90",
    "requiresOptions": false
  },
  {
    "id": "online-YEJEAT08XB5K8",
    "name": "Half Dozen Donuts",
    "description": "A Golden Bagel Cafe favorite from the Donuts menu.",
    "category": "Donuts",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 1455,
    "priceLabel": "$14.55",
    "requiresOptions": false
  },
  {
    "id": "online-1A9C38901WSH0",
    "name": "Dozen Donuts",
    "description": "A Golden Bagel Cafe favorite from the Donuts menu.",
    "category": "Donuts",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 2765,
    "priceLabel": "$27.65",
    "requiresOptions": false
  },
  {
    "id": "online-PJPXFVQKDJRBG",
    "name": "Red Bull 8oz",
    "description": "A Golden Bagel Cafe favorite from the Other items menu.",
    "category": "Other items",
    "image": "/goldenbagels/menu/order-online.png",
    "tags": [],
    "modifiers": [],
    "available": true,
    "priceCents": 494,
    "priceLabel": "$4.94",
    "requiresOptions": false
  }
] satisfies MenuItem[];
