import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { getRecommendation } from './utils/getRecommendation';

function App() {
  const recommendedProduct = getRecommendation(products);

  return (
    <main style={{ maxWidth: '560px', margin: '32px auto', fontFamily: 'sans-serif' }}>
      <h1>AgriTrade 🌾</h1>

      {recommendedProduct && (
        <>
          <h2 style={{ marginBottom: '8px' }}>Recommandation du jour</h2>
          <ProductCard product={recommendedProduct} highlighted />
        </>
      )}

      <h2 style={{ marginTop: '20px' }}>Catalogue</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

export default App;