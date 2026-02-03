import styles from './Skeleton.module.scss'

type Props = {
  width?: string | number
  height?: string | number
  circle?: boolean
  className?: string
}

export function Skeleton({ width, height, circle, className }: Props) {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  return (
    <div
      className={`${styles.skeleton} ${circle ? styles.circle : ''} ${className || ''}`}
      style={style}
      aria-busy="true"
      aria-live="polite"
    />
  )
}
