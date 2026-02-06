import SectionTitle from './SectionTitle'
import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {
  return (
    <section className="experience block">
      <SectionTitle>Expérience</SectionTitle>
      <ul className="experience__list">
        {experience.map((exp) => (
          <li key={exp.period} className="experience__item">
            <span className="experience__period">{exp.period}</span>
            <p className="experience__title">{exp.title}</p>
            <p className="experience__place">{exp.place}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
