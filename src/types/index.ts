export type ExternalLink = { label: string; href: string }

export type Profile = {
  name: string
  role: string
  intro: string
  links: { github: ExternalLink; linkedin: ExternalLink }
}

export type NavItem = { id: string; label: string }

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  stack: string[]
}

export type Project = {
  slug: string
  title: string
  kind: 'professional' | 'personal'
  summary: string
  contribution: string
  stack: string[]
  links: ExternalLink[]
  pending?: string[]
}

export type TechGroup = {
  title: 'Front-end' | 'Back-end / integração' | 'Ferramentas'
  items: string[]
}
