'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ProductDetail.module.scss'
import type { CatalogItem } from '@/features/catalog/model/catalog.types'
import { formatArs } from '@/lib/money'

type Props = {
  item: CatalogItem
}

export function ProductDetail({ item }: Props) {
  const [imgSrc, setImgSrc] = useState(`/products/plp/${item.id}/1.png`)

  return (
    <article className={styles.detail}>
      <div className={styles.header}>
        <h2 className={styles.title}>{item.name}</h2>
        <p className={styles.category}>{item.category}</p>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={item.name}
          width={400}
          height={400}
          className={styles.image}
          priority
          onError={() => {
            if (imgSrc.endsWith('.png')) {
              setImgSrc(`/products/plp/${item.id}/1.jpg`)
            } else {
              setImgSrc('/placeholders/pan.png')
            }
          }}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.priceSection}>
          <div className={styles.priceLabel}>Precio</div>
          <div className={styles.priceValue}>
            <span className={styles.amount}>{formatArs(item.price)}</span>
            <span className={styles.currency}>{item.currency}</span>
          </div>
        </div>

        <div className={styles.unitSection}>
          <div className={styles.unitLabel}>Unidad</div>
          <div className={styles.unitValue}>{item.unit || 'unidad'}</div>
        </div>
      </div>
    </article>
  )
}
