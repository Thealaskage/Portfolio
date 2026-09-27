import { useEffect, useRef, useState } from 'react'
import { cx } from '@/shared/lib/cx'
import { useT } from '@/shared/preferences/PreferencesContext'
import { Container } from '@/shared/ui/atoms/Container/Container'
import { ImageSlot } from '@/shared/ui/atoms/ImageSlot/ImageSlot'
import { SectionHeader } from '@/shared/ui/molecules/SectionHeader/SectionHeader'
import { ProjectDetail } from './ProjectDetail'
import { ProjectTabs } from './ProjectTabs'
import { PROJECTS, projectImage } from './projects.data'
import styles from './ProjectsSection.module.css'

/** Time the detail text stays faded out before swapping content. */
const FADE_MS = 220

export function ProjectsSection() {
  const t = useT()
  const [active, setActive] = useState(1)
  const [shown, setShown] = useState(active)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const select = (i: number) => {
    if (i === active) return
    setActive(i)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setShown(i), FADE_MS)
  }

  return (
    <section id="proyectos" className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeader
          title={t.projTitle}
          align="end"
          aside={<ProjectTabs projects={PROJECTS} active={active} onSelect={select} />}
        />

        <div data-reveal className={styles.card}>
          <div className={styles.media}>
            {PROJECTS.map((p, i) => (
              <ImageSlot
                key={p.id}
                className={cx(styles.slide, i === active && styles.slideActive)}
                src={projectImage(p.id)}
                alt={p.name}
                placeholder={`${t.slotPh} · ${p.name}`}
                framed={false}
              />
            ))}
          </div>
          <ProjectDetail project={PROJECTS[shown]} index={shown} total={PROJECTS.length} fading={shown !== active} />
        </div>
      </Container>
    </section>
  )
}
