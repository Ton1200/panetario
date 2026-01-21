import Image from 'next/image'
import styles from './ProductCard.module.scss'
import type { CatalogItem } from '@/features/catalog/model/catalog.types'
import { formatArs } from '@/lib/money'

type Props = {
  item: CatalogItem
}

export function ProductCard({ item }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={item.imageUrl || '/placeholders/pan.png'}
          alt={item.name}
          width={112}
          height={112}
          className={styles.thumbImg}
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
