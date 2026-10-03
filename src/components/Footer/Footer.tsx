import { profile } from '../../data/profile'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>{profile.name}, {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
