import SectionTitle from './SectionTitle'
import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects block">
      <SectionTitle>Portfolio</SectionTitle>
      <ul className="projects__list">
        {projects.map((project) => (
          <li
            key={project.title}
            className={`projects__item ${project.inProgress ? 'projects__item--progress' : ''}`}
          >
            <h3 className="projects__title">
              {project.title}
              {project.inProgress && (
                <span className="projects__badge">En cours</span>
              )}
            </h3>
            <p className="projects__description">{project.description}</p>
            <div className="projects__tech">
              {project.tech.map((t) => (
                <span key={t} className="projects__tech-tag">{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
