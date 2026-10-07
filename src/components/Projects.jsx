import { useEffect, useState } from 'react'
import { projects } from '../data/resume'
import SkillIcon, { skillById } from './SkillIcon'
import { SectionHead } from './About'

const CATS = ['All', ...new Set(projects.map((p) => p.category))]

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.classList.add('modal-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
    }
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card">
        <button className="sd-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="pm-hero">
          <span className="pm-emoji">{project.emoji}</span>
        </div>
        <div className="pm-body">
          <span className="tag">{project.category}</span>
          <h3>{project.title}</h3>
          <p className="muted">
            {project.org} · {project.period}
          </p>
          <p className="pm-role">
            <b>My role:</b> {project.role}
          </p>
          <p>{project.summary}</p>
          <h4>What I did</h4>
          <ul className="tl-bullets">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <h4>Built with</h4>
          <div className="tl-skills">
            {project.tech.map((id) => (
              <span key={id} className="tech">
                <SkillIcon id={id} size={22} />
                {skillById[id]?.name}
              </span>
            ))}
          </div>
          {project.links && (
            <div className="row">
              {project.links.map((l) => (
                <a key={l.href} className="btn btn-sm" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('All')
  const [openId, setOpenId] = useState(null)
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat)
  const open = projects.find((p) => p.id === openId)

  // Deep links like #project-wms (used from the Skills panel) open the modal.
  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#project-(.+)$/)
      if (m && projects.some((p) => p.id === m[1])) {
        setOpenId(m[1])
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  const close = () => {
    setOpenId(null)
    if (window.location.hash.startsWith('#project-')) history.replaceState(null, '', '#projects')
  }

  return (
    <section id="projects" className="section">
      <SectionHead kicker="Projects" title="Things I've helped build" sub="Enterprise systems, public-sector platforms and a personal app. Open a card for the details." />
      <div className="filters reveal">
        {CATS.map((c) => (
          <button key={c} className={'filter' + (cat === c ? ' on' : '')} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {list.map((p, i) => (
          <button key={p.id} id={`project-${p.id}`} className="card project reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }} onClick={() => setOpenId(p.id)}>
            <span className="project-cover">
              <span className="project-emoji">{p.emoji}</span>
              <span className="tag">{p.category}</span>
            </span>
            <span className="project-body">
              <b>{p.title}</b>
              <small>
                {p.org} · {p.period}
              </small>
              <span className="project-sum">{p.summary}</span>
              <span className="project-tech">
                {p.tech.slice(0, 5).map((id) => (
                  <SkillIcon key={id} id={id} size={24} />
                ))}
                <span className="project-more">Details →</span>
              </span>
            </span>
          </button>
        ))}
      </div>
      {open && <ProjectModal project={open} onClose={close} />}
    </section>
  )
}
