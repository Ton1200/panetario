import styles from './ProductList.module.scss'
import type { CatalogItem } from '@/features/catalog/model/catalog.types'
import { ProductCard } from '@/features/catalog/ui/ProductCard'

type Props = {
  items: CatalogItem[]
  emptyText: string
}

export function ProductList({ items, emptyText }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.list}>
        {items.map(item => (
          <ProductCard key={`${item.category}-${item.id}`} item={item} />
        ))}
      </div>

      {items.length === 0 && <p className={styles.empty}>{emptyText}</p>}
    </section>
  )
}
