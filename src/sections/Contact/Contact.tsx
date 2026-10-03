import Section from '../../components/Section/Section'
import { profile } from '../../data/profile'
import styles from './Contact.module.scss'

export default function Contact() {
  const { github, linkedin } = profile.links

  return (
    <Section id="contato" title="Contato">
      <p className={styles.text}>
        Estou em busca de uma oportunidade como desenvolvedor front-end. Se quiser conversar sobre
        uma vaga ou ver meu código, fale comigo pelo meu email de contato: dr549243@gmail.com, LinkedIn ou acesse meu GitHub.
      </p>
      <ul className={styles.links}>
        {[linkedin, github].map(({ label, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
