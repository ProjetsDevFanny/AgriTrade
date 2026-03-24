import type { Product } from '../../types/Product';

type ProductCardProps = {
  product: Product;
  highlighted?: boolean;
};

function ProductCard({ product, highlighted = false }: ProductCardProps) {
  return (
    <article
      style={{
        border: highlighted ? '2px solid #22c55e' : '1px solid #d1d5db',
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '10px',
        backgroundColor: highlighted ? '#f0fdf4' : '#ffffff',
      }}
    >
      <h3 style={{ margin: 0 }}>{product.name}</h3>
      <p style={{ margin: '6px 0' }}>
        {product.category} - {product.price.toFixed(2)} EUR/{product.unit}
      </p>
      <small>{product.inStock ? 'Disponible' : 'Rupture de stock'}</small>
    </article>
  );
}

export default ProductCard;
