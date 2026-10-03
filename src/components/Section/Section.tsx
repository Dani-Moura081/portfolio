import type { ReactNode } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Section.module.scss'

type Props = { id: string; title: string; children: ReactNode }

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-titulo`}>
      <div className="container">
        <SectionHeading id={id} title={title} />
        {children}
      </div>
    </section>
  )
}
