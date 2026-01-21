import Image from 'next/image'
import styles from './CatalogHeader.module.scss'

export function CatalogHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.brandRow}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="El Panetario"
            width={120}
            height={120}
            className={styles.logo}
            priority
          />
        </div>

        <div className={styles.text}>
          <h1 className={styles.title}>El Panetario</h1>
          <p className={styles.subtitle}>Croissants & especialidades</p>

          <div className={styles.meta}>
            <span className={styles.pill}>Solo online</span>
            <span className={styles.pillAccent}>Minorista y mayorista</span>
            <span className={styles.pill}>La Falda, Córdoba</span>
          </div>
        </div>
      </div>
    </header>
  )
}
