import SectionTitle from './SectionTitle'
import { about } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section className="about block">
      <SectionTitle>À propos de moi</SectionTitle>
      <ul className="about__list">
        {about.map((item) => (
          <li key={item.label} className="about__item">
            <span className="about__label">{item.label}:</span>{' '}
            <span className="about__value">{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
