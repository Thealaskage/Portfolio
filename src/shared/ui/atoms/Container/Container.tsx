import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '@/shared/lib/cx'
import styles from './Container.module.css'

/** Centered, max-width content column with the page gutter. */
export function Container({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cx(styles.container, className)} {...rest} />
}
