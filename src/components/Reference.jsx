import SectionTitle from './SectionTitle'
import { reference } from '../data/content'
import './Reference.css'

export default function Reference() {
  return (
    <section className="reference block">
      <h2 className="reference__heading">Personne de référence</h2>
      <div className="reference__card">
        <p className="reference__name">{reference.name}</p>
        <p className="reference__role">{reference.role}</p>
        <p className="reference__place">{reference.place}</p>
        <a href={`tel:${reference.phone.replace(/\s/g, '')}`} className="reference__phone">
          <span className="reference__phone-icon" aria-hidden>📞</span>
          {reference.phone}
        </a>
      </div>
    </section>
  )
}
