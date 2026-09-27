import type { ReactNode } from 'react'
import { cx } from '@/shared/lib/cx'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  title: string
  /** Right-hand content: a subtitle, tabs, etc. */
  aside?: ReactNode
  align?: 'baseline' | 'end'
}

export function SectionHeader({ title, aside, align = 'baseline' }: SectionHeaderProps) {
  return (
    <div data-reveal className={cx(styles.header, styles[align])}>
      <h2 className={styles.title}>{title}</h2>
      {typeof aside === 'string' ? <span className={styles.sub}>{aside}</span> : aside}
    </div>
  )
}
