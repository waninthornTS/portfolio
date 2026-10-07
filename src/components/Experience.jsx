import { useState } from 'react'
import { careerMonths, experience, formatMonths, formatPeriod, jobMonths } from '../data/resume'
import SkillIcon, { skillById } from './SkillIcon'
import { SectionHead } from './About'

export default function Experience() {
  const [open, setOpen] = useState(experience[0].id)

  return (
    <section id="experience" className="section">
      <SectionHead
        kicker="Experience"
        title="Where I've worked"
        sub={`${formatMonths(careerMonths)} across telecom, government, healthcare, warehouse and retail projects. Tap a role to see the details.`}
      />
      <ol className="timeline">
        {experience.map((job) => {
          const isOpen = open === job.id
          const current = !job.end
          return (
            <li key={job.id} className={'tl-item reveal' + (isOpen ? ' open' : '')} style={{ '--c': job.color }}>
              <span className="tl-dot" aria-hidden="true">
                {current && <i />}
              </span>
              <div className="card tl-card">
                <button className="tl-head" onClick={() => setOpen(isOpen ? null : job.id)} aria-expanded={isOpen}>
                  <span className="tl-logo">{job.short.slice(0, 1)}</span>
                  <span className="tl-title">
                    <b>{job.role}</b>
                    <span>{job.company}</span>
                  </span>
                  <span className="tl-meta">
                    <span className="tl-period">{formatPeriod(job)}</span>
                    <span className="tl-tags">
                      {current && <span className="tag now">Current</span>}
                      <span className="tag">{job.type}</span>
                      <span className="tag dur">{formatMonths(jobMonths(job))}</span>
                    </span>
                  </span>
                  <span className="tl-toggle">{isOpen ? '−' : '+'}</span>
                </button>
                <p className="tl-summary">{job.summary}</p>
                <div className="tl-body" hidden={!isOpen}>
                  <ul className="tl-bullets">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="tl-skills">
                    {job.skills.map((id) => (
                      <span key={id} className="tech">
                        <SkillIcon id={id} size={22} />
                        {skillById[id]?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
