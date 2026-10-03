import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Experience from './sections/Experience/Experience'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Technologies from './sections/Technologies/Technologies'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
