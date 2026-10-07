import { useEffect, useState } from 'react'
import { careerMonths, formatMonths, formatPeriod, jobMonths, projects, skillCategories, skillUsage, skills } from '../data/resume'
import SkillIcon, { brandColor } from './SkillIcon'
import { SectionHead } from './About'

const catLabel = Object.fromEntries(skillCategories.map((c) => [c.id, c.label]))

function SkillDetail({ skill, onClose }) {
  const { jobs, months } = skillUsage(skill.id)
  const used = projects.filter((p) => p.tech.includes(skill.id))
  const pct = Math.max(4, Math.round((months / careerMonths) * 100))
  return (
    <div className="skill-detail card" style={{ '--brand': brandColor(skill) }}>
      <button className="sd-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="sd-head">
        <SkillIcon id={skill.id} size={56} />
        <div>
          <h3>{skill.name}</h3>
          <span className="tag">{catLabel[skill.cat]}</span>
          {skill.core && <span className="tag core">★ Core stack</span>}
        </div>
      </div>

      {months > 0 ? (
        <>
          <p className="sd-years">
            <b>{formatMonths(months)}</b> of professional use
          </p>
          <div className="sd-bar" aria-hidden="true">
            <i style={{ width: `${pct}%` }} />
          </div>
          <p className="muted small">{pct}% of my career so far</p>
          <h4>Used at</h4>
          <ul className="sd-jobs">
            {jobs.map((j) => (
              <li key={j.id} style={{ '--c': j.color }}>
                <b>{j.role}</b>
                <span>{j.company}</span>
                <small>
                  {formatPeriod(j)} · {formatMonths(jobMonths(j))}
                </small>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="sd-years">
          <b>Academic & personal projects</b>
          <span className="muted small"> — learned in my Software Engineering degree and side projects.</span>
        </p>
      )}

      {used.length > 0 && (
        <>
          <h4>In projects</h4>
          <div className="sd-projects">
            {used.map((p) => (
              <a key={p.id} href={`#project-${p.id}`} className="chip">
                {p.emoji} {p.title}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Skills() {
  const [cat, setCat] = useState('all')
  const [selected, setSelected] = useState('angular')
  const [sheet, setSheet] = useState(false)
  const list = cat === 'all' ? skills : skills.filter((s) => s.cat === cat)
  const core = skills.filter((s) => s.core)
  const current = skills.find((s) => s.id === selected)

  const pick = (id) => {
    setSelected(id)
    setSheet(true)
  }

  useEffect(() => {
    document.body.classList.toggle('sheet-open', sheet)
  }, [sheet])

  return (
    <section id="skills" className="section">
      <SectionHead
        kicker="Skills"
        title="What I work with"
        sub="Years are calculated from my work history. Tap any skill to see where I used it."
      />

      <div className="core-row">
        {core.map((s, i) => {
          const { months } = skillUsage(s.id)
          return (
            <button
              key={s.id}
              className={'card core-card reveal' + (selected === s.id ? ' selected' : '')}
              style={{ '--brand': brandColor(s), transitionDelay: `${i * 60}ms` }}
              onClick={() => pick(s.id)}
            >
              <SkillIcon id={s.id} size={44} />
              <b>{s.name}</b>
              <span>{formatMonths(months)}</span>
            </button>
          )
        })}
      </div>

      <div className="filters reveal" role="tablist">
        {skillCategories.map((c) => (
          <button key={c.id} role="tab" aria-selected={cat === c.id} className={'filter' + (cat === c.id ? ' on' : '')} onClick={() => setCat(c.id)}>
            {c.label}
            <span>{c.id === 'all' ? skills.length : skills.filter((s) => s.cat === c.id).length}</span>
          </button>
        ))}
      </div>

      <div className="skills-layout">
        <div className="skill-grid">
          {list.map((s) => {
            const { months } = skillUsage(s.id)
            return (
              <button key={s.id} className={'skill-tile' + (selected === s.id ? ' selected' : '')} style={{ '--brand': brandColor(s) }} onClick={() => pick(s.id)}>
                <SkillIcon id={s.id} size={36} />
                <span className="st-name">{s.name}</span>
                <span className="st-years">{months ? formatMonths(months) : 'Academic'}</span>
              </button>
            )
          })}
        </div>
        <div className={'skill-side' + (sheet ? ' show' : '')} onClick={(e) => e.target === e.currentTarget && setSheet(false)}>
          {current && <SkillDetail skill={current} onClose={() => setSheet(false)} />}
        </div>
      </div>
    </section>
  )
}
