import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import Section from '../../components/Section/Section'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiência profissional">
      {experience.map((item) => (
        <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
      ))}
    </Section>
  )
}
