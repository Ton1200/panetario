'use client'

import { useMemo, useState } from 'react'
import styles from './CatalogPage.module.scss'
import { Container } from '@/components/ui'
import { Footer } from '@/components/layout'
import {
  CATALOG,
  CATEGORIES,
  type CatalogCategory,
  filterByCategoryAndQuery,
  onlyActive,
  sortByOrder,
} from '@/features/catalog'
import { CatalogHeader } from '../CatalogHeader'
import { SearchBar } from '../SearchBar'
import { CategoryTabs } from '../CategoryTabs'
import { ProductList } from '../ProductList'

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
