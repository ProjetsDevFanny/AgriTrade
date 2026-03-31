export type Category =
  | "Céréales"
  | "Oléagineux"
  | "Protéagineux";

export type Product = {
  id: number;
  name: string;
  icon: string;
  category: Category;
  referenceMarket: string;
  lastCotation: string;
  tax: number;
  currentPrice: number;
  buyThreshold: number;
  sellThreshold: number;
  change1M: number;
  change6M: number;
  change1Y: number;
  trend: "hausse" | "baisse" | "stable";
  unit: string;
};
