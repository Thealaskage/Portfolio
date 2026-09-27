import { SITE } from '@/shared/config/site'
import { useT } from '@/shared/preferences/PreferencesContext'
import { Container } from '@/shared/ui/atoms/Container/Container'
import { IconLink } from '@/shared/ui/atoms/IconButton/IconButton'
import { ImageSlot } from '@/shared/ui/atoms/ImageSlot/ImageSlot'
import { PillLink } from '@/shared/ui/atoms/PillButton/PillButton'
import { LinkArrow } from '@/shared/ui/molecules/LinkArrow/LinkArrow'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const t = useT()

  return (
    <section id="inicio" className={styles.hero}>
      <Container className={styles.grid}>
        <div className={styles.name}>
          <h1 className={styles.title}>
            Jorge Ponce
            <br />
            Loyola<span className={styles.accent}>.</span>
          </h1>
          <div className={styles.bar} />
          <div className={styles.socials}>
            <IconLink href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" icon="github" iconSize={18} />
            <IconLink href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" icon="linkedin" />
            <PillLink href={SITE.cv.href} download={SITE.cv.filename} aria-label="CV">
              CV ↓
            </PillLink>
          </div>
        </div>

        <div className={styles.photo}>
          <div className={styles.arch} />
          <ImageSlot className={styles.photoSlot} src={SITE.photo} alt={SITE.name} placeholder={t.photoPh} fit="contain" />
        </div>

        <div className={styles.about}>
          <div className={styles.kicker}>— {t.aboutKicker}</div>
          <h2 className={styles.aboutTitle}>{t.aboutTitle}</h2>
          <p className={styles.aboutBody}>{t.aboutBody}</p>
          <LinkArrow href={`mailto:${SITE.email}`}>{t.writeMe}</LinkArrow>
        </div>
      </Container>
    </section>
  )
}
