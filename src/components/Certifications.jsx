import SectionTitle from './SectionTitle'
import { certifications, badges } from '../data/content'
import './Certifications.css'

export default function Certifications() {
  return (
    <section className="certifications block">
      <SectionTitle variant="dark">Badges & certifications</SectionTitle>
      <ul className="certifications__list">
        {certifications.map((cert) => (
          <li key={cert} className="certifications__item">{cert}</li>
        ))}
      </ul>
      <div className="certifications__badges">
        {badges.map((badge) => (
          <div key={badge.name} className="cert-badge">
            <div className="cert-badge__wave" />
            <span className="cert-badge__name">{badge.name}</span>
            {badge.verified && (
              <span className="cert-badge__verified">Verified</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
