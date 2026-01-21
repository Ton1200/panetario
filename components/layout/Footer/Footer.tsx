import styles from './Footer.module.scss'
import { SOCIAL, getWhatsappUrl } from '@/config/social'

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
    <path
      fill="currentColor"
      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.1a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"
    />
  </svg>
)

const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
    <path
      fill="currentColor"
      d="M12 2a9.7 9.7 0 0 0-8.38 14.6L2.6 21.5l5.02-1A9.8 9.8 0 0 0 12 21.8 9.9 9.9 0 0 0 12 2Zm0 17.9c-1.46 0-2.86-.4-4.1-1.16l-.3-.18-2.95.59.62-2.87-.2-.3A7.9 7.9 0 1 1 12 19.9Zm4.6-5.2c-.25-.12-1.46-.72-1.69-.8-.23-.09-.4-.12-.56.12-.17.25-.65.8-.8.96-.15.17-.3.18-.55.06-.25-.12-1.05-.39-2-1.24-.74-.65-1.24-1.46-1.38-1.71-.14-.25-.02-.38.1-.5l.37-.43c.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.49-.4-.43-.56-.44h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.17 1.74 2.65 4.22 3.71.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.2-.59.2-1.1.14-1.18-.06-.08-.22-.13-.47-.25Z"
    />
  </svg>
)

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.dot} aria-hidden="true" />
          <span> Precios sujetos a disponibilidad</span>
        </div>

        <div className={styles.actions} aria-label="Redes sociales">
          <a
            className={`${styles.actionBtn} ${styles.ig}`}
            href={SOCIAL.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram"
            title="Instagram"
          >
            <IconInstagram />
          </a>

          <a
            className={`${styles.actionBtn} ${styles.wpp}`}
            href={getWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Enviar WhatsApp"
            title="WhatsApp"
          >
            <IconWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}
