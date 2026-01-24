'use client'

import styles from './ThemeSwitch.module.scss'
import { useTheme } from '@/app/providers'

export default function ThemeSwitch() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.switch}
      onClick={toggle}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      aria-pressed={isDark}
    >
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
    </button>
  )
}
