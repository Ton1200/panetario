import type { CatalogCategory, CatalogItem } from './catalog.types'

export const onlyActive = (items: CatalogItem[]) => items.filter(i => i.active)

export const sortByOrder = (items: CatalogItem[]) => 
  [...items].sort((a, b) => a.order - b.order)

export const filterByCategoryAndQuery = (
  items: CatalogItem[],
  category: CatalogCategory,
  query: string
) => {
  const q = query.trim().toLowerCase()

  return items.filter(i => {
    const matchesCategory = category === 'Todo' || i.category === category
    const matchesQuery = !q || i.name.toLowerCase().includes(q)
    return matchesCategory && matchesQuery
  })
}
