'use client'

import { useMemo, useState } from 'react'
import styles from './CatalogPage.module.scss'
import { Container } from '@/components/ui/Container'
import { CATALOG, CATEGORIES } from '@/features/catalog/data/catalog.mock'
import type { CatalogCategory } from '@/features/catalog/model/catalog.types'
import { filterByCategoryAndQuery, onlyActive, sortByOrder } from '@/features/catalog/model/catalog.selectors'
import { CatalogHeader } from '@/features/catalog/ui/CatalogHeader'
import { SearchBar } from '@/features/catalog/ui/SearchBar'
import { CategoryTabs } from '@/features/catalog/ui/CategoryTabs'
import { ProductList } from '@/features/catalog/ui/ProductList'
import { Footer } from '@/components/layout/Footer/Footer'

export function CatalogPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<CatalogCategory>(CATEGORIES[0])

  const activeItems = useMemo(() => sortByOrder(onlyActive(CATALOG)), [])
  const filtered = useMemo(
    () => filterByCategoryAndQuery(activeItems, activeCategory, query),
    [activeItems, activeCategory, query]
  )

  return (
    <main className={styles.page}>
      <Container>
        <CatalogHeader />

        <div className={styles.controls}>
          <SearchBar value={query} onChange={setQuery} />
          <CategoryTabs categories={CATEGORIES} active={activeCategory} onChange={setActiveCategory} />
        </div>

        <ProductList items={filtered} emptyText="No encontramos productos para tu búsqueda" />

        <Footer />

      </Container>
    </main>
  )
}
