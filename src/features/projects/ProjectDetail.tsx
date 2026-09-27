import { cx } from '@/shared/lib/cx'
import { usePreferences } from '@/shared/preferences/PreferencesContext'
import { TagList } from '@/shared/ui/atoms/Tag/Tag'
import type { Project } from './projects.data'
import styles from './ProjectDetail.module.css'

interface ProjectDetailProps {
  project: Project
  index: number
  total: number
  fading: boolean
}

const pad = (n: number) => String(n).padStart(2, '0')

export function ProjectDetail({ project, index, total, fading }: ProjectDetailProps) {
  const { lang } = usePreferences()
  const { kind, desc } = project.content[lang]

  return (
    <div className={cx(styles.detail, fading && styles.fading)} aria-live="polite">
      <div className={styles.meta}>
        {pad(index + 1)} / {pad(total)} · {kind}
      </div>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.spacer} />
      {project.tech.length > 0 && (
        <div className={styles.tags}>
          <TagList items={project.tech} variant="outline" />
        </div>
      )}
    </div>
  )
}
