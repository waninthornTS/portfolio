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

// Day / night theme. index.html sets the initial value before first paint.
function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f6f8f8' : '#161616')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage blocked: theme just won't persist */
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))]
}

function ThemeToggle({ theme, onToggle }) {
  const light = theme === 'light'
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label={light ? 'Switch to night mode' : 'Switch to day mode'} title={light ? 'Night mode' : 'Day mode'}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {light ? (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
          </>
        )}
      </svg>
    </button>
  )
}

export default function Nav() {
  const active = useActiveSection(IDS)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, toggleTheme] = useTheme()

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
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <a className="btn btn-sm nav-cta" href={import.meta.env.BASE_URL + profile.resume} download>
          Resume
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
