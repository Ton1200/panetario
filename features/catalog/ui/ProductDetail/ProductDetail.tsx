'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './ProductDetail.module.scss'
import type { CatalogItem } from '@/features/catalog/model/catalog.types'
import { formatArs } from '@/lib/money'
import { Skeleton } from '@/components/ui/Skeleton'

type Props = {
  item: CatalogItem
}

export function ProductDetail({ item }: Props) {
  const [imgSrc, setImgSrc] = useState(`/products/plp/${item.id}/1.png`)
  const [isLoading, setIsLoading] = useState(true)

  // Timeout de seguridad
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <article className={styles.detail}>
      <div className={styles.header}>
        <h2 className={styles.title}>{item.name}</h2>
        <p className={styles.category}>{item.category}</p>
      </div>

      <div className={styles.imageWrapper}>
        {isLoading && (
          <div className={styles.skeletonWrapper}>
            <Skeleton width="100%" height="100%" />
          </div>
        )}
        <Image
          src={imgSrc}
          alt=""
          width={400}
          height={400}
          className={styles.image}
          priority
          onLoad={() => setIsLoading(false)}
          onError={() => {
            if (imgSrc.endsWith('.png')) {
              setImgSrc(`/products/plp/${item.id}/1.jpg`)
            } else {
              setImgSrc('/placeholders/pan.png')
            }
            setIsLoading(false)
          }}
          style={{ opacity: isLoading ? 0 : 1 }}
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
