import type { CatalogCategory, CatalogItem } from '@/features/catalog/model/catalog.types'

type CatalogResponse = {
  categories: CatalogCategory[]
  catalog: CatalogItem[]
}

export const fetchCatalog = async (): Promise<CatalogResponse> => {
  const res = await fetch('/api/catalog', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch catalog')
  }

  return res.json()
}
