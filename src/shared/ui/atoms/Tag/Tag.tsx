import type { ReactNode } from 'react'
import { cx } from '@/shared/lib/cx'
import styles from './Tag.module.css'

interface TagProps {
  children: ReactNode
  variant?: 'filled' | 'outline'
}

export function Tag({ children, variant = 'filled' }: TagProps) {
  return <span className={cx(styles.tag, styles[variant])}>{children}</span>
}

export function TagList({ items, variant }: { items: readonly string[]; variant?: TagProps['variant'] }) {
  if (items.length === 0) return null
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <Tag key={item} variant={variant}>
          {item}
        </Tag>
      ))}
    </div>
  )
}
