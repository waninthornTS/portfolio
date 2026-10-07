import { useState } from 'react'
import { profile } from '../data/resume'
import { BrandSvg } from './SkillIcon'

function CopyButton({ text }) {
  const [done, setDone] = useState(false)
  return (
    <button
      className="copy"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setDone(true)
          setTimeout(() => setDone(false), 1500)
        } catch {
          /* clipboard blocked: the link still works */
        }
      }}
    >
      {done ? 'Copied ✓' : 'Copy'}
    </button>
  )
}

export default function Contact() {
  const base = import.meta.env.BASE_URL
  return (
    <section id="contact" className="section">
      <div className="contact card reveal">
        <img src={base + 'avatar.webp'} alt="" className="contact-avatar" />
        <span className="kicker">✦ Contact</span>
        <h2>Let's build something great together</h2>
        <p>
          I'm looking for a <b>{profile.seeking}</b> role where I can work across the stack and with the business. I'd love to hear from you!
        </p>
        <div className="contact-list">
          <div className="contact-item">
            <span>✉️</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <CopyButton text={profile.email} />
          </div>
          <div className="contact-item">
            <span>📞</span>
            <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
            <CopyButton text={profile.phone} />
          </div>
          <div className="contact-item">
            <BrandSvg name="siGithub" size={20} color="currentColor" />
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/waninthornTS
            </a>
          </div>
        </div>
        <div className="hero-cta center">
          <a className="btn" href={`mailto:${profile.email}?subject=${encodeURIComponent('Job opportunity')}`}>
            Email me
          </a>
          <a className="btn ghost" href={base + profile.resume} download>
            ⬇ Download Resume
          </a>
        </div>
      </div>
      <footer className="footer">
        Designed & built by {profile.name} with React · {new Date().getFullYear()}
      </footer>
    </section>
  )
}
