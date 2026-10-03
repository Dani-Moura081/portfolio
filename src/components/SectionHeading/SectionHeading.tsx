import styles from './SectionHeading.module.scss'

type Props = { id: string; title: string }

export default function SectionHeading({ id, title }: Props) {
  return (
    <h2 id={`${id}-titulo`} className={styles.heading}>
      {title}
    </h2>
  )
}
