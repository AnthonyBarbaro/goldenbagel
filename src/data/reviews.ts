export type Review = {
  id: string;
  author: string;
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    id: "vince-z",
    author: "Vince Z.",
    rating: 5,
    quote: "Fresh, delicious bagels and friendly service."
  },
  {
    id: "toota-3",
    author: "Toota 3",
    rating: 5,
    quote: "Fresh, chewy bagels and a really nice staff."
  },
  {
    id: "kerwin-a",
    author: "Kerwin A.",
    rating: 5,
    quote: "A quiet morning spot for bagels and lox."
  },
  {
    id: "jacob-t",
    author: "Jacob T.",
    rating: 5,
    quote: "Great food, great vibes, and amazing customer service."
  }
];
