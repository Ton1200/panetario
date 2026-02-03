'use client'

import { useState } from 'react'
import styles from './ProductList.module.scss'
import type { CatalogItem } from '@/features/catalog/model/catalog.types'
import { ProductCard } from '@/features/catalog/ui/ProductCard'
import { ProductDetail } from '@/features/catalog/ui/ProductDetail'
import { Modal } from '@/components/ui/Modal'

type Props = {
  items: CatalogItem[]
  emptyText: string
}

export function ProductList({ items, emptyText }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<CatalogItem | null>(null)

  return (
    <>
      <section className={styles.section}>
        <div className={styles.list}>
          {items.map(item => (
            <ProductCard 
              key={`${item.category}-${item.id}`} 
              item={item}
              onClick={() => setSelectedProduct(item)}
            />
          ))}
        </div>

        {items.length === 0 && <p className={styles.empty}>{emptyText}</p>}
      </section>

      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && <ProductDetail item={selectedProduct} />}
      </Modal>
    </>
  )
}
