import type { ExperienceItem as Experience } from '../../types'
import styles from './ExperienceItem.module.scss'

type Props = { item: Experience }

export default function ExperienceItem({ item }: Props) {
  const { company, role, period, location, highlights, stack } = item

  return (
    <article className={styles.item}>
      <header className={styles.header}>
        <h3 className={styles.role}>{role}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.meta}>
          {period}, {location}
        </p>
      </header>

      <ul className={styles.highlights}>
        {highlights.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      <p className={styles.stack}>
        <strong>Tecnologias:</strong> {stack.join(', ')}
      </p>
    </article>
  )
}
