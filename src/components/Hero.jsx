import { companies, devMonths, profile, projects, skills } from '../data/resume'
import { useCountUp } from '../hooks'
import SkillIcon, { BrandSvg } from './SkillIcon'

function Stat({ value, suffix = '', label }) {
  const [ref, n] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <b>
        {n}
        {suffix}
      </b>
      <span>{label}</span>
    </div>
  )
}

// Floating stack chips around the avatar; right-side ones anchor to the right edge so they never overflow.
const ORBIT = [
  { id: 'typescript', label: 'TypeScript', pos: { left: '28%', top: '-3%' }, d: 2.4 },
  { id: 'angular', label: 'Angular', pos: { left: '-2%', top: '17%' }, d: 0 },
  { id: 'dotnet', label: '.NET', pos: { right: '-2%', top: '10%' }, d: 0.6 },
  { id: 'vue', label: 'Vue · Nuxt', pos: { right: '-4%', top: '58%' }, d: 1.2 },
  { id: 'sqlserver', label: 'SQL Server', pos: { left: '-4%', top: '64%' }, d: 1.8 },
]

export default function Hero() {
  const years = Math.floor(devMonths / 12)
  const base = import.meta.env.BASE_URL

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <span className="badge-open reveal">
          <i /> Open to {profile.seeking} roles
        </span>
        <h1 className="reveal">
          Hi, I'm{' '}
          <span className="nowrap">
            <span className="grad">{profile.shortName}</span>
            <span className="wave">👋</span>
          </span>
        </h1>
        <p className="hero-role reveal">{profile.role}</p>
        <p className="hero-tagline reveal">{profile.tagline}</p>
        <div className="hero-cta reveal">
          <a className="btn" href="#experience">
            View my experience
          </a>
          <a className="btn ghost" href={base + profile.resume} download>
            ⬇ Download résumé
          </a>
        </div>
        <div className="hero-links reveal">
          <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <BrandSvg name="siGithub" size={16} color="currentColor" /> GitHub
          </a>
        </div>
      </div>

      <div className="hero-art reveal">
        <span className="shape shape-block" aria-hidden="true" />
        <span className="shape shape-ring" aria-hidden="true" />
        <span className="shape shape-dot" aria-hidden="true" />
        <div className="hero-photo">
          <img src={base + 'photo.webp'} alt={`Portrait of ${profile.name}`} />
        </div>
        <span className="name-tag">
          <i /> {profile.shortName} · {profile.role}
        </span>
        {ORBIT.map((o) => (
          <span key={o.id} className="orbit-chip" style={{ ...o.pos, animationDelay: `${o.d}s` }}>
            <SkillIcon id={o.id} size={26} />
            {o.label}
          </span>
        ))}
      </div>

      <div className="stats reveal">
        <Stat value={years} suffix="+" label="Years building software" />
        <Stat value={companies} label="Companies" />
        <Stat value={projects.length} label="Projects" />
        <Stat value={Math.floor(skills.length / 5) * 5} suffix="+" label="Tools & technologies" />
      </div>
    </section>
  )
}
