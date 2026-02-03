import Image from 'next/image'
import { useState } from 'react'
import styles from './ProductCard.module.scss'
import type { CatalogItem } from '@/features/catalog/model/catalog.types'
import { formatArs } from '@/lib/money'

type Props = {
  item: CatalogItem
  onClick?: () => void
}

export function ProductCard({ item, onClick }: Props) {
  const [imgSrc, setImgSrc] = useState(
    `/products/plp/${item.id}/1.png`
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <article 
      className={styles.card}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.thumb}>
        <Image
          src={imgSrc}
          alt={item.name}
          width={112}
          height={112}
          className={styles.thumbImg}
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
        <p className={styles.name}>{item.name}</p>
        <p className={styles.unit}>{item.unit || 'unidad'}</p>
      </div>

      <div className={styles.priceWrap}>
        <p className={styles.price}>{formatArs(item.price)}</p>
        <p className={styles.currency}>ARS</p>
      </div>
    </article>
  )
}
