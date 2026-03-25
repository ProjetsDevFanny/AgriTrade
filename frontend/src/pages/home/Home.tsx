/**
 * @file Home.tsx
 * @description Page d'accueil de l'application.
 * @author Simon Fanny
 * @date 25/03/2026
 * @project Agritrade - Projet personnel
 *
 * ===============================================================================
 */

// import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home;