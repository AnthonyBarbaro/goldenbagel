export type Review = {
  id: string;
  author: string;
  source: "Google";
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    id: "vince-z",
    author: "Vince Z.",
    source: "Google",
    rating: 5,
    quote: "Fresh, delicious bagels and friendly service."
  },
  {
    id: "toota-3",
    author: "Toota 3",
    source: "Google",
    rating: 5,
    quote: "Fresh, chewy bagels and a really nice staff."
  },
  {
    id: "kerwin-a",
    author: "Kerwin A.",
    source: "Google",
    rating: 5,
    quote: "A quiet morning spot for bagels and lox."
  },
  {
    id: "jacob-t",
    author: "Jacob T.",
    source: "Google",
    rating: 5,
    quote: "Great food, great vibes, and amazing customer service."
  }
];
