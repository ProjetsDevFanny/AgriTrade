/**
 * @file Home.tsx
 * @description Page d'accueil de l'application.
 * @author Simon Fanny
 * @date 25/03/2026
 * @project Agritrade - Projet personnel
 *
 * ===============================================================================
 */

import Table from "../../components/Table/Table";
import "./home.scss";

function Home() {
  return (
    <main className="home">
      <section className="home__dashboard">
        <h1 className="home__title">Agritrade</h1>
        <p className="home__subtitle">
          Suivez les prix agricoles et les tendances du marché
        </p>

        <Table />
      </section>
    </main>
  );
}

export default Home;