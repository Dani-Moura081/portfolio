import type { Project } from '../../types'
import PendingNote from '../PendingNote/PendingNote'
import styles from './ProjectItem.module.scss'

type Props = { project: Project }

const KIND_LABEL: Record<Project['kind'], string> = {
  professional: 'Projeto profissional',
  personal: 'Projeto autoral',
}

export default function ProjectItem({ project }: Props) {
  const { title, kind, summary, contribution, stack, links, pending } = project

  return (
    <article className={styles.item}>
      <div className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.kind}>{KIND_LABEL[kind]}</p>
      </div>

      <div className={styles.body}>
        <p>{summary}</p>
        <p className={styles.contribution}>
          <strong>Minha participação:</strong> {contribution}
        </p>
        <p className={styles.stack}>
          <strong>Tecnologias:</strong> {stack.join(', ')}
        </p>

        {links.length > 0 && (
          <ul className={styles.links}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              </li>
            ))}
          </ul>
        )}

        <PendingNote items={pending} />
      </div>
    </article>
  )
}
