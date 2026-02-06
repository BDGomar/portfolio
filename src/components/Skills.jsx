import SectionTitle from './SectionTitle'
import { skills } from '../data/content'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills block">
      <SectionTitle variant="light">Compétences</SectionTitle>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill} className="skills__item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}
