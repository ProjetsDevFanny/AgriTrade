/**
 * @file Layout.jsx
 * @description Composant de mise en page principal contenant Header, Footer et zone de contenu.
 *              Affiche le Header, le main et le Footer.
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 * 
 * ===============================================================================
 */

import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from "react-router-dom";

import './layoutStyle.scss'

function Layout() {
 
  return (
    <div className="layout">
      <Header />
      <main className="layout__main-container">
        <Outlet /> {/* Ici s'afficheront le contenu des pages enfants */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout