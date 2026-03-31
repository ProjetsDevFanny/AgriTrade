import type { Product } from "../../types/Product";
import { getRecommendation } from "../../utils/getRecommendation";

type TableLineProps = {
  product: Product;
  index: number;
};

function TableLine({ product, index }: TableLineProps) {
  return (
    <ul className="table-line">
      <li>{index + 1}</li>
      <li><img src={product.icon} alt={product.name} /></li>
      <li>{product.name}</li>
      <li>{product.referenceMarket}</li>
      <li>{product.lastCotation}</li>
      <li>{product.currentPrice} {product.unit}</li>
      <li>{product.change1M}%</li>
      <li>{product.tax}%</li>
      <li>{product.change6M}%</li>
      <li>{product.change1Y}%</li>
      <li>{product.trend === "hausse" ? "↑" : product.trend === "baisse" ? "↓" : "→"}</li>
      <li>{getRecommendation(product)}</li>
    </ul>
  );
}

export default TableLine;