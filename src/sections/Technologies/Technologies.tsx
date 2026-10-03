import Section from '../../components/Section/Section'
import { technologies } from '../../data/technologies'
import styles from './Technologies.module.scss'

export default function Technologies() {
  return (
    <Section id="tecnologias" title="Tecnologias">
      <div className={styles.groups}>
        {technologies.map(({ title, items }) => (
          <div key={title}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
