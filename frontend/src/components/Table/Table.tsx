import { products } from "../../data/products";
import TableLine from "./TableLine";
import "./table.scss";

function Table() {
  const tableHeader = [
    "Marché de référence",
    "Dernière cotation",
    "Prix moyen",
    "Taxe",
    "1 mois",
    "6 mois",
    "1 an",
    "Tendance",
    "Recommandation",
  ];

  return (
    <div className="table-container">
      <ul className="table-header">
        <li>N °</li>
        <li></li>
        <li>Produit</li>
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