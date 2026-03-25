/**
 * @file ProductCard.tsx
 * @description Composant de carte de produit.
 * @author Simon Fanny
 * @date 25/03/2026
 * @project Agritrade - Projet personnel
 *
 * ===============================================================================
 */

import "./productCard.scss";
import type { Product } from "../../types/Product";
import { getRecommendation } from "../../utils/getRecommendation";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <h2 className="product-card__title">{product.name}</h2>
      <p className="product-card__category">{product.category}</p>
      <p className="product-card__currentPrice">
        Prix actuel : {product.currentPrice} {product.unit}
      </p>
      <p className="product-card__buyThreshold">
        Seuil d'achat : {product.buyThreshold} {product.unit}
      </p>
      <p className="product-card__sellThreshold">
        Seuil de vente : {product.sellThreshold} {product.unit}
      </p>
      <p className="product-card__recommendation">
        Recommandation : {getRecommendation(product)}
      </p>
    </article>
  );
}

export default ProductCard;