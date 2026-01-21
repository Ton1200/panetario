import type { Currency } from '@/types'

export type CatalogCategory =
  | 'Panadería & Bollería'
  | 'Panificados salados'
  | 'Criollos'
  | 'Palmerones'
  | 'Congelados'

export type CatalogItem = {
  id: string
  name: string
  category: CatalogCategory
  price: number
  currency: Currency
  unit?: string
  imageUrl?: string
  active: boolean
  order: number
}
