import type { NavItem, Profile } from '../types'

export const profile: Profile = {
  name: 'Daniel Rodrigues',
  role: 'Desenvolvedor Front-end',
  intro:
    'Trabalho com interfaces de aplicações web e e-commerce usadas por clientes reais. Hoje aprofundo meus estudos em React e TypeScript.',
  links: {
    github: { label: 'GitHub', href: 'https://github.com/Dani-Moura081' },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniel-rodrigues-364982334/',
    },
  },
}

export const navItems: NavItem[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'contato', label: 'Contato' },
]
