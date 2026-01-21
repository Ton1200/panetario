import styles from './CategoryTabs.module.scss'
import type { CatalogCategory } from '@/features/catalog/model/catalog.types'

type Props = {
  categories: CatalogCategory[]
  active: CatalogCategory
  onChange: (category: CatalogCategory) => void
}

export function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className={styles.sticky}>
      <div className={styles.scroller}>
        {categories.map(cat => {
          const isActive = cat === active

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onChange(cat)}
              className={isActive ? styles.tabActive : styles.tab}
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}
