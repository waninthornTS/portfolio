import { certifications, companies, education, experience, formatMonths, careerMonths } from '../data/resume'
import { SectionHead } from './About'

const domains = ['Telecom', 'Government', 'Healthcare', 'Banking', 'Warehouse', 'Pharma retail']

export default function Achievements() {
  const highlights = [
    { icon: '📡', title: 'Telecom-scale portal', text: 'Developed and maintained a web portal for a leading Thai telecommunications company, onsite at AIS.' },
    { icon: '🏛️', title: 'Public-sector platforms', text: 'Shipped frontends for multiple government digital platforms, from UI/UX designs to API integration.' },
    { icon: '📦', title: 'End-to-end business systems', text: 'Building a Warehouse Management System and a pharmaceutical e-commerce platform with Angular and C# .NET.' },
    { icon: '🧭', title: 'From requirements to go-live', text: 'As a BA intern: wrote SRSDs and UAT reports, trained end users and supported go-live.' },
  ]

  return (
    <section id="achievements" className="section">
      <SectionHead kicker="Achievements" title="Highlights & certifications" />

      <div className="ach-grid">
        {highlights.map((h, i) => (
          <div key={h.title} className="card ach reveal" style={{ transitionDelay: `${i * 70}ms` }}>
            <span className="ach-ico">{h.icon}</span>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </div>
        ))}
      </div>

      <div className="cert-row">
        {certifications.map((c) => (
          <div key={c.title} className="card cert reveal">
            <div className="cert-ribbon">🏅 Certification</div>
            <h3>{c.title}</h3>
            <p className="muted">
              {c.org} · {c.date}
            </p>
            <ul className="tl-bullets">
              {c.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="card cert edu-cert reveal">
          <div className="cert-ribbon lav">🎓 Degree</div>
          <h3>{education.degree}</h3>
          <p className="muted">
            {education.school} · {education.period}
          </p>
          <div className="gpa">
            <b>{education.gpa}</b>
            <span>GPA</span>
          </div>
          <div className="mini-stats">
            <span>
              <b>{formatMonths(careerMonths)}</b> in industry
            </span>
            <span>
              <b>{experience.length}</b> roles · <b>{companies}</b> companies
            </span>
          </div>
          <div className="chips">
            {domains.map((d) => (
              <span key={d} className="chip">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
