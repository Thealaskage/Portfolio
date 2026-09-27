import { useId } from 'react'
import { cx } from '@/shared/lib/cx'
import { usePreferences } from '@/shared/preferences/PreferencesContext'
import { TagList } from '@/shared/ui/atoms/Tag/Tag'
import type { Experience } from './experience.data'
import styles from './ExperienceCard.module.css'

interface ExperienceCardProps {
  experience: Experience
  open: boolean
  onToggle: () => void
}

export function ExperienceCard({ experience, open, onToggle }: ExperienceCardProps) {
  const { lang } = usePreferences()
  const { role, date, bullets } = experience.content[lang]
  const panelId = useId()

  return (
    <div data-reveal className={cx(styles.card, open && styles.open)}>
      <button type="button" className={styles.head} onClick={onToggle} aria-expanded={open} aria-controls={panelId}>
        <div className={styles.titles}>
          <div className={styles.role}>{role}</div>
          <div className={styles.company}>{experience.company}</div>
        </div>
        <span className={styles.date}>{date}</span>
        <span className={styles.plus} aria-hidden="true">
          +
        </span>
      </button>

      <div id={panelId} className={styles.collapse} inert={!open}>
        <div className={styles.clip}>
          <div className={styles.body}>
            <div className={styles.divider} />
            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <TagList items={experience.tech} />
          </div>
        </div>
      </div>
    </div>
  )
}
