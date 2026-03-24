import type { Product } from '../types/Product';

export function getRecommendation(products: Product[]): Product | null {
  const availableProducts = products.filter((product) => product.inStock);

  if (availableProducts.length === 0) {
    return null;
  }

  return availableProducts.reduce((best, current) =>
    current.price < best.price ? current : best
  );
}
