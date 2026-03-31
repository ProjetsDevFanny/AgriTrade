const mais = new URL('../assets/icones_cultures/maïs.png', import.meta.url).href;
const ble = new URL('../assets/icones_cultures/blé.png', import.meta.url).href;
const colza = new URL('../assets/icones_cultures/colza.png', import.meta.url).href;
const tournesol = new URL('../assets/icones_cultures/tournesol.png', import.meta.url).href;
const orge = new URL('../assets/icones_cultures/orge.png', import.meta.url).href;
const pois = new URL('../assets/icones_cultures/pois.png', import.meta.url).href;
const soja = new URL('../assets/icones_cultures/soja.png', import.meta.url).href;
const feverole = new URL('../assets/icones_cultures/feverole.png', import.meta.url).href;

export const icons = {
  ble: ble,
  mais: mais,
  colza: colza,
  tournesol: tournesol,
  orge: orge,
  pois: pois,
  soja: soja,
  feverole: feverole,
} as const;

