import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'bcw-plus',
    title: 'BCW+',
    kind: 'professional',
    summary: 'Aplicativo relacionado ao Beto Carrero World, publicado na Play Store.',
    contribution:
      'Implementei a parte visual da tela de identificação facial, em React Native. Minha contribuição foi a interface dessa funcionalidade, não o aplicativo inteiro.',
    stack: ['React Native'],
    links: [],
  },
  {
    slug: 'grupo-oceanic',
    title: 'Projetos do Grupo Oceanic',
    kind: 'professional',
    summary: 'Aplicações web e e-commerce de clientes reais.',
    contribution:
      'Desenvolvimento e manutenção de interfaces e fluxos durante o estágio na PWI Sistemas.',
    stack: ['JavaScript', 'jQuery', 'HTML/CSS', 'LESS/SCSS', 'ASP.NET MVC/Razor'],
    links: [],
  },
  {
    slug: 'Projeto ingreador - UNISA',
    title: 'Daiany Rodrigues - PI',
    kind: 'personal',
    summary: 'Projeto integrador da UNISA, desenvolvido em equipe com o intuito de criar um site para uma autonoma, designer de sobrancelhas para ajudar na divulgação de seu serviço.',
    contribution:
      'Projeto, design e código. Página única, componentes pequenos, dados tipados separados da interface e estilos organizados em SCSS.',
    stack: ['React', 'TypeScript', 'Vite', 'SCSS'],
    links: [
      {
        label: 'Ver projeto',
        href: 'https://daianyrodrigueseyebrowsdesign.netlify.app/',
      },
    ],
  },
]
