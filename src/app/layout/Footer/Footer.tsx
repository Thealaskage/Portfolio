import { SITE } from '@/shared/config/site'
import { useT } from '@/shared/preferences/PreferencesContext'
import { Container } from '@/shared/ui/atoms/Container/Container'
import { Icon } from '@/shared/ui/atoms/Icon/Icon'
import { LinkArrow } from '@/shared/ui/molecules/LinkArrow/LinkArrow'
import styles from './Footer.module.css'

export function Footer() {
  const t = useT()

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span className={styles.copy}>
          © 2026 {SITE.name}. {t.rights}
        </span>
        <div className={styles.links}>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.icon}>
            <Icon name="github" size={18} />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.icon}>
            <Icon name="linkedin" />
          </a>
          <a href={SITE.cv.href} download={SITE.cv.filename} className={styles.cv}>
            CV
          </a>
          <LinkArrow href={`mailto:${SITE.email}`} size="sm">
            {t.contact}
          </LinkArrow>
        </div>
      </Container>
    </footer>
  )
}
