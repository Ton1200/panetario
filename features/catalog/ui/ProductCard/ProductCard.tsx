import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './ProductCard.module.scss'
import type { CatalogItem } from '@/features/catalog/model/catalog.types'
import { formatArs } from '@/lib/money'
import { Skeleton } from '@/components/ui/Skeleton'

type Props = {
  item: CatalogItem
  onClick?: () => void
}

export function ProductCard({ item, onClick }: Props) {
  const [imgSrc, setImgSrc] = useState(
    `/products/plp/${item.id}/1.png`
  )
  const [isLoading, setIsLoading] = useState(true)

  // Timeout de seguridad: ocultar skeleton después de 3 segundos aunque no se dispare onLoad
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

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
        {isLoading && (
          <div className={styles.skeletonWrapper}>
            <Skeleton width="100%" height="100%" />
          </div>
        )}
        <Image
          src={imgSrc}
          alt=""
          width={112}
          height={112}
          className={styles.thumbImg}
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
