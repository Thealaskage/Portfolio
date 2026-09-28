import { cx } from '@/shared/lib/cx'
import { usePreferences, useT } from '@/shared/preferences/PreferencesContext'
import { TagList } from '@/shared/ui/atoms/Tag/Tag'
import { LinkArrow } from '@/shared/ui/molecules/LinkArrow/LinkArrow'
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
  const t = useT()
  const { kind, desc } = project.content[lang]

  return (
    <div className={cx(styles.detail, fading && styles.fading)} aria-live="polite">
      <div className={styles.meta}>
        {pad(index + 1)} / {pad(total)} · {kind}
      </div>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{desc}</p>
      {project.url && (
        <LinkArrow href={project.url} target="_blank" rel="noopener noreferrer" size="sm" className={styles.link}>
          {t.projLink}
        </LinkArrow>
      )}
      <div className={styles.spacer} />
      {project.tech.length > 0 && (
        <div className={styles.tags}>
          <TagList items={project.tech} variant="outline" />
        </div>
      )}
    </div>
  )
}
