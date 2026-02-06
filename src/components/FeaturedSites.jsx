import SectionTitle from './SectionTitle'
import { featuredSites } from '../data/content'
import './FeaturedSites.css'

export default function FeaturedSites() {
  return (
    <section className="featured-sites block">
      <SectionTitle>Sites réalisés</SectionTitle>
      <p className="featured-sites__intro">
        Découvrez les sites web que j’ai conçus ou auxquels j’ai contribué.
      </p>
      <ul className="featured-sites__list">
        {featuredSites.map((site) => (
          <li key={site.url} className="featured-sites__item">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-sites__card"
            >
              <h3 className="featured-sites__name">{site.name}</h3>
              <p className="featured-sites__description">{site.description}</p>
              <span className="featured-sites__link">
                Visiter le site
                <span className="featured-sites__arrow" aria-hidden>→</span>
              </span>
              <span className="featured-sites__url">{site.url.replace(/^https?:\/\//, '')}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
