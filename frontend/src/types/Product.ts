export type Category =
  | "Céréales"
  | "Oléagineux"
  | "Protéagineux";

export type Product = {
  id: number;
  name: string;
  category: Category;
  currentPrice: number;
  buyThreshold: number;
  sellThreshold: number;
  change1M: number;
  change6M: number;
  change1Y: number;
  trend: "hausse" | "baisse" | "stable";
  unit: string;
};
