import './SectionTitle.css'

export default function SectionTitle({ children, variant = 'primary' }) {
  return (
    <h2 className={`section-title section-title--${variant}`}>
      {children}
    </h2>
  )
}
