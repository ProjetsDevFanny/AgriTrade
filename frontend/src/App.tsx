/**
 * @file App.jsx
 * @description Composant racine de l'application qui initialise le RouterProvider pour gérer le routage.
 * @author Simon Fanny
 * @date 24/03/2026
 * @project Agritrade - Projet personnel
 *
 * ===============================================================================
 */

import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './router'
import './styles/main.scss'
    
function App() {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App