export type VisitPhoto = {
  src: string;
  fallbackSrc?: string;
  fallbackLabel: string;
  alt: string;
};

export const visitPhotos: readonly VisitPhoto[] = [
  {
    src: "/goldenbagels/gallery/storefront.jpg",
    fallbackLabel: "Storefront",
    alt: "Golden Bagel Cafe storefront on Fletcher Parkway"
  }
] as const;
