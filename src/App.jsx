import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FeaturedSites from './components/FeaturedSites'
import Reference from './components/Reference'
import { profile } from './data/content'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="app__shapes-bottom" aria-hidden>
        <div className="app__shape-bottom-1" />
        <div className="app__shape-bottom-2" />
      </div>

      <Hero />

      <div className="app__contact-bar">
        <a href={`mailto:${profile.email}`}>
          <span aria-hidden>✉</span> {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
          <span aria-hidden>📞</span> {profile.phone}
        </a>
      </div>

      <main className="app__main">
        <div className="app__grid">
          <aside className="app__col-left">
            <About />
            <Education />
            <Certifications />
            <Skills />
            <Reference />
          </aside>
          <div className="app__col-right">
            <Experience />
            <FeaturedSites />
            <Projects />
          </div>
        </div>
      </main>

      <footer className="app__footer">
        <p>BANDAOGO Idrissa Ben Omar — Développeur Full Stack</p>
      </footer>
    </div>
  )
}

export default App
