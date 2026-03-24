import type { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Blé",
    category: "Céréales",
    currentPrice: 230,
    buyThreshold: 180,
    sellThreshold: 220,
    unit: "€/tonne"
  }
];