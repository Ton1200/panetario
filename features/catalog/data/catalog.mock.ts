import type { CatalogCategory, CatalogItem } from '@/features/catalog/model/catalog.types'

export const CATEGORIES: CatalogCategory[] = [
  'Panadería & Bollería',
  'Panificados salados',
  'Criollos',
  'Palmerones',
  'Congelados',
]

export const CATALOG: CatalogItem[] = [
  // Panadería & Bollería
  { id: 'medialunas', name: 'Medialunas', category: 'Panadería & Bollería', price: 400, currency: 'ARS', unit: 'unidad', active: true, order: 1 },
  { id: 'croissants', name: 'Croissants', category: 'Panadería & Bollería', price: 800, currency: 'ARS', unit: 'unidad', active: true, order: 2 },
  { id: 'croissant-l', name: 'Croissant L', category: 'Panadería & Bollería', price: 1000, currency: 'ARS', unit: 'unidad', active: true, order: 3 },
  { id: 'croissants-xl', name: 'Croissants XL', category: 'Panadería & Bollería', price: 1300, currency: 'ARS', unit: 'unidad', active: true, order: 4 },
  { id: 'croissants-banados', name: 'Croissants bañados', category: 'Panadería & Bollería', price: 1800, currency: 'ARS', unit: 'unidad', active: true, order: 5 },
  { id: 'pain-au-chocolat', name: 'Pain au chocolat', category: 'Panadería & Bollería', price: 1500, currency: 'ARS', unit: 'unidad', active: true, order: 6 },
  { id: 'brioche', name: 'Brioche', category: 'Panadería & Bollería', price: 950, currency: 'ARS', unit: 'unidad', active: true, order: 7 },
  { id: 'rolls-canela-nuez', name: 'Rolls de canela y nuez', category: 'Panadería & Bollería', price: 1500, currency: 'ARS', unit: 'unidad', active: true, order: 8 },

  // Panificados salados
  { id: 'prepizza', name: 'Prepizza', category: 'Panificados salados', price: 1700, currency: 'ARS', unit: 'unidad', active: true, order: 1 },
  { id: 'pan-hamburguesas', name: 'Pan de hamburguesas', category: 'Panificados salados', price: 600, currency: 'ARS', unit: 'unidad', active: true, order: 2 },
  { id: 'pan-lomitero', name: 'Pan lomitero', category: 'Panificados salados', price: 900, currency: 'ARS', unit: 'unidad', active: true, order: 3 },

  // Criollos
  { id: 'criollos', name: 'Criollos', category: 'Criollos', price: 4800, currency: 'ARS', unit: 'bandeja', active: true, order: 1 },
  { id: 'criollos-x-kg', name: 'Criollos x kg', category: 'Criollos', price: 4800, currency: 'ARS', unit: 'kg', active: true, order: 2 },

  // Palmerones
  { id: 'palmeron-capresse', name: 'Palmeron capresse', category: 'Palmerones', price: 1800, currency: 'ARS', unit: 'unidad', active: true, order: 1 },
  { id: 'palmeron-longaniza-queso', name: 'Palmeron de longaniza y queso', category: 'Palmerones', price: 1800, currency: 'ARS', unit: 'unidad', active: true, order: 2 },
  { id: 'palmeron-jamon-queso', name: 'Palmeron de jamón y queso', category: 'Palmerones', price: 1800, currency: 'ARS', unit: 'unidad', active: true, order: 3 },
  { id: 'palmeron-roquefort-verdeo-nueces', name: 'Palmeron de roquefort verdeo y nueces', category: 'Palmerones', price: 1800, currency: 'ARS', unit: 'unidad', active: true, order: 4 },

  // Congelados
  { id: 'congelados-medialunas', name: 'Medialunas', category: 'Congelados', price: 400, currency: 'ARS', unit: 'unidad', active: true, order: 1 },
  { id: 'congelados-croissants', name: 'Croissants', category: 'Congelados', price: 800, currency: 'ARS', unit: 'unidad', active: true, order: 2 },
  { id: 'congelados-criollos', name: 'Criollos', category: 'Congelados', price: 4800, currency: 'ARS', unit: 'bandeja', active: true, order: 3 },
]
