import { useMemo, useState } from 'react'
import { navItems } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './Header.module.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => navItems.map((item) => item.id), [])
  const active = useActiveSection(ids)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label="Daniel Rodrigues, início">
          DR
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`${styles.nav} ${open ? styles.open : ''}`}
        >
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
