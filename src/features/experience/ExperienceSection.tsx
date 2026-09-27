import { useState } from 'react'
import { useT } from '@/shared/preferences/PreferencesContext'
import { Container } from '@/shared/ui/atoms/Container/Container'
import { SectionHeader } from '@/shared/ui/molecules/SectionHeader/SectionHeader'
import { EXPERIENCES } from './experience.data'
import { ExperienceCard } from './ExperienceCard'
import styles from './ExperienceSection.module.css'

export function ExperienceSection() {
  const t = useT()
  const [openId, setOpenId] = useState<string | null>(EXPERIENCES[0]?.id ?? null)

  return (
    <section id="experiencia" className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeader title={t.expTitle} aside={t.expSub} />
        <div className={styles.list}>
          {EXPERIENCES.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              open={openId === exp.id}
              onToggle={() => setOpenId((cur) => (cur === exp.id ? null : exp.id))}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
