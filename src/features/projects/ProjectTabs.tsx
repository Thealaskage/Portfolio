import { cx } from '@/shared/lib/cx'
import type { Project } from './projects.data'
import styles from './ProjectTabs.module.css'

interface ProjectTabsProps {
  projects: readonly Project[]
  active: number
  onSelect: (index: number) => void
}

export function ProjectTabs({ projects, active, onSelect }: ProjectTabsProps) {
  return (
    <div className={styles.tabs} role="tablist">
      {projects.map((p, i) => (
        <button
          key={p.id}
          type="button"
          role="tab"
          aria-selected={i === active}
          className={cx(styles.tab, i === active && styles.active)}
          onClick={() => onSelect(i)}
        >
          {p.name}
        </button>
      ))}
    </div>
  )
}
