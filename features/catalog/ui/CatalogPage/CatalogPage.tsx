'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './CatalogPage.module.scss'
import { Container } from '@/components/ui'
import { Footer } from '@/components/layout'
import {
  CATALOG as CATALOG_MOCK,
  CATEGORIES as CATEGORIES_MOCK,
  type CatalogCategory,
  filterByCategoryAndQuery,
  onlyActive,
  sortByOrder,
} from '@/features/catalog'
import { CatalogHeader } from '../CatalogHeader'
import { SearchBar } from '../SearchBar'
import { CategoryTabs } from '../CategoryTabs'
import { ProductList } from '../ProductList'

type ApiResponse = {
  categories: CatalogCategory[]
  catalog: typeof CATALOG_MOCK
}

export function CatalogPage() {
  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState<CatalogCategory[]>(CATEGORIES_MOCK)
  const [catalog, setCatalog] = useState(CATALOG_MOCK)
  const [activeCategory, setActiveCategory] = useState<CatalogCategory>(CATEGORIES_MOCK[0])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/catalog', { cache: 'no-store' })
        if (!res.ok) throw new Error('Failed to fetch catalog')

        const data = (await res.json()) as ApiResponse

        if (cancelled) return

        setCategories(data.categories?.length ? data.categories : CATEGORIES_MOCK)
        setCatalog(Array.isArray(data.catalog) ? data.catalog : CATALOG_MOCK)

        const first = data.categories?.[0] ?? CATEGORIES_MOCK[0]
        setActiveCategory((prev) => (data.categories?.includes(prev) ? prev : first))
      } catch {
        if (cancelled) return
        setCategories(CATEGORIES_MOCK)
        setCatalog(CATALOG_MOCK)
        setActiveCategory(CATEGORIES_MOCK[0])
      } finally {
        if (cancelled) return
        setLoading(false)
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [])

  const activeItems = useMemo(() => sortByOrder(onlyActive(catalog)), [catalog])
  const filtered = useMemo(
    () => filterByCategoryAndQuery(activeItems, activeCategory, query),
    [activeItems, activeCategory, query]
  )

  const emptyText = loading ? 'Cargando productos…' : 'No encontramos productos para tu búsqueda'

  return (
    <main className={styles.page}>
      <Container>
        <CatalogHeader />

        <div className={styles.controls}>
          <SearchBar value={query} onChange={setQuery} />
          <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>

        <ProductList items={filtered} emptyText={emptyText} />

        <Footer />
      </Container>
    </main>
  )
}
