import styles from './SearchBar.module.scss'

type Props = {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className={styles.wrap}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Buscar producto..."
        className={styles.input}
        inputMode="search"
      />
    </div>
  )
}
