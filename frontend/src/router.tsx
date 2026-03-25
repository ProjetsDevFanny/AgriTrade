/**
 * @file Index.tsx
 * @description Composant de routage pour l'application.
 * @author Simon Fanny
 * @date 24/03/2026
 * @project Agritrade - Projet personnel
 *
 * ===============================================================================
 */

import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout.tsx';
import Home from './pages/home/Home.tsx';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
    ]
  }
]);