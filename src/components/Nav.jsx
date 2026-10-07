import { useEffect, useState } from 'react'
import { profile } from '../data/resume'
import { useActiveSection } from '../hooks'

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
const IDS = ['home', ...SECTIONS.map((s) => s.id)]

export default function Nav() {
  const active = useActiveSection(IDS)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '') + (open ? ' open' : '')}>
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img src={import.meta.env.BASE_URL + 'avatar.webp'} alt="" className="brand-avatar" />
          <span>
            {profile.shortName}
            <i>.dev</i>
          </span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-sm nav-cta" href={import.meta.env.BASE_URL + profile.resume} download>
          Résumé
        </a>
        <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
