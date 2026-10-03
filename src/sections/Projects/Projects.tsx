import ProjectItem from '../../components/ProjectItem/ProjectItem'
import Section from '../../components/Section/Section'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      {projects.map((project) => (
        <ProjectItem key={project.slug} project={project} />
      ))}
    </Section>
  )
}
