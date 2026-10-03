import { profile } from '../../data/profile'
import styles from './Hero.module.scss'

export default function Hero() {
  const { name, role, intro, links } = profile

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-titulo">
      <div className={`container ${styles.inner}`}>
        <p className={styles.role}>{role}</p>
        <h1 id="hero-titulo" className={styles.name}>{name}</h1>
        <p className={styles.intro}>{intro}</p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#projetos">Ver projetos</a>
          <a className={styles.secondary} href={links.github.href} target="_blank" rel="noopener noreferrer">
            {links.github.label}
          </a>
          <a className={styles.secondary} href={links.linkedin.href} target="_blank" rel="noopener noreferrer">
            {links.linkedin.label}
          </a>
        </div>
      </div>
    </section>
  )
}
