import { education, profile } from '../data/resume'

export function SectionHead({ kicker, title, sub }) {
  return (
    <div className="section-head reveal">
      <span className="kicker">✦ {kicker}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHead kicker="About me" title="Developer with a business analyst's ear" />
      <div className="about-grid">
        <div className="card about-text reveal">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="soft">
            <span className="soft-label">Soft skills</span>
            {profile.softSkills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="about-side">
          <div className="card edu reveal">
            <span className="edu-ico">🎓</span>
            <div>
              <span className="mini-label">Education</span>
              <h3>{education.degree}</h3>
              <p>
                {education.school} · {education.faculty}
              </p>
              <p className="muted">
                {education.period} · GPA {education.gpa}
              </p>
            </div>
          </div>
          <div className="strengths">
            {profile.strengths.map((s, i) => (
              <div key={s.title} className="card strength reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="strength-ico">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
