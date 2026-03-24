import type { Product } from "../types/Product";

export function getRecommendation(product: Product): string {
  if (product.currentPrice <= product.buyThreshold) {
    return "Acheter";
  }

  if (product.currentPrice >= product.sellThreshold) {
    return "Vendre";
  }

  return "Attendre";
}
