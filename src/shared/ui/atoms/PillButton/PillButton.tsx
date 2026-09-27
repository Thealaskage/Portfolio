import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '@/shared/lib/cx'
import styles from './PillButton.module.css'

/** Outlined pill link with monospace label (e.g. "CV ↓"). */
export function PillLink({ className, ...rest }: ComponentPropsWithoutRef<'a'>) {
  return <a className={cx(styles.pill, className)} {...rest} />
}
