import styles from './PendingNote.module.scss'

type Props = { items?: string[] }

/** Lembrete de conteúdo a preencher. Não é renderizado no build de produção. */
export default function PendingNote({ items }: Props) {
  if (!import.meta.env.DEV || !items?.length) return null

  return (
    <ul className={styles.note}>
      {items.map((item) => (
        <li key={item}>A preencher: {item}</li>
      ))}
    </ul>
  )
}
