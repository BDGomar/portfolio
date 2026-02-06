import SectionTitle from './SectionTitle'
import { education } from '../data/content'
import './Education.css'

export default function Education() {
  return (
    <section className="education block">
      <SectionTitle>Éducation</SectionTitle>
      <p className="education__school">{education.school}</p>
      <ul className="education__list">
        {education.items.map((item) => (
          <li key={item} className="education__item">{item}</li>
        ))}
      </ul>
    </section>
  )
}
