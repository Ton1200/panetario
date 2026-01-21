import styles from './Container.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: Props) {
  const classes = className ? `${styles.container} ${className}` : styles.container
  return <div className={classes}>{children}</div>
}
