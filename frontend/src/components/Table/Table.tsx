import { products } from "../../data/products";
import TableLine from "./TableLine";

function Table() {
  const tableHeader = [
    "Prix actuel",
    "1Mois",
    "6Mois",
    "1An",
    "Tendance",
    "Recommandation",
  ];

  return (
    <div className="table-container">
      <ul className="table-header">
        <li>Produit</li>
        <li>Catégorie</li>
        {tableHeader.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {products.map((product, index) => (
        <TableLine key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

export default Table;