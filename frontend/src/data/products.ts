import type { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Blé tendre",
    category: "Céréales",
    currentPrice: 230,
    buyThreshold: 190,
    sellThreshold: 225,
    unit: "€/tonne"
  },
  {
    id: 2,
    name: "Blé dur",
    category: "Céréales",
    currentPrice: 260,
    buyThreshold: 220,
    sellThreshold: 255,
    unit: "€/tonne"
  },
  {
    id: 3,
    name: "Maïs",
    category: "Céréales",
    currentPrice: 210,
    buyThreshold: 180,
    sellThreshold: 205,
    unit: "€/tonne"
  },
  {
    id: 4,
    name: "Colza",
    category: "Oléagineux",
    currentPrice: 480,
    buyThreshold: 440,
    sellThreshold: 470,
    unit: "€/tonne"
  },
  {
    id: 5,
    name: "Tournesol classique",
    category: "Oléagineux",
    currentPrice: 450,
    buyThreshold: 410,
    sellThreshold: 440,
    unit: "€/tonne"
  },
  {
    id: 6,
    name: "Orge brassicole de printemps",
    category: "Céréales",
    currentPrice: 240,
    buyThreshold: 200,
    sellThreshold: 235,
    unit: "€/tonne"
  },
  {
    id: 7,
    name: "Orge fourragère",
    category: "Céréales",
    currentPrice: 220,
    buyThreshold: 185,
    sellThreshold: 215,
    unit: "€/tonne"
  },
  {
    id: 8,
    name: "Pois",
    category: "Protéagineux",
    currentPrice: 260,
    buyThreshold: 220,
    sellThreshold: 250,
    unit: "€/tonne"
  },
  {
    id: 9,
    name: "Soja",
    category: "Protéagineux",
    currentPrice: 500,
    buyThreshold: 450,
    sellThreshold: 490,
    unit: "€/tonne"
  },
  {
    id: 10,
    name: "Féverole",
    category: "Protéagineux",
    currentPrice: 240,
    buyThreshold: 200,
    sellThreshold: 235,
    unit: "€/tonne"
  },
];