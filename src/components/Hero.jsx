import { profile } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__shapes hero__shapes--top">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
        </div>
        <div className="hero__photo-wrap">
          <div className="hero__photo">
            <img
              src="/photo.jpg"
              alt=""
              className="hero__photo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling?.classList.add('hero__photo-placeholder--visible')
              }}
            />
            <span className="hero__photo-placeholder" aria-hidden>IBO</span>
          </div>
        </div>
      </div>
    </header>
  )
}
