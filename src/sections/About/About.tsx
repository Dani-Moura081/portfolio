import Section from '../../components/Section/Section'
import styles from './About.module.scss'

export default function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      <div className={styles.text}>
        <p>
          Sou desenvolvedor front-end e atuo há cerca de um ano como estagiário na PWI Sistemas,
          em aplicações web e e-commerce de clientes reais.
        </p>
        <p>
          No dia a dia, desenvolvo e ajusto interfaces, mantenho sistemas existentes e integro
          funcionalidades com APIs REST. Cursando Análise e Desenvolvimento de Sistemas na UNISA,
          o intuito deste projeto é aprofundar meus conhecimentos em React e TypeScript.
        </p>
      </div>
    </Section>
  )
}
