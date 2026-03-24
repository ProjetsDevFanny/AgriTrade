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
  unit: string;
};
