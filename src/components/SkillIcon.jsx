import {
  siAngular, siBootstrap, siCodeigniter, siConfluence, siCplusplus, siCss, siDbeaver, siDiagramsdotnet, siDotnet,
  siFigma, siFlutter, siGitlab, siHtml5, siIntellijidea, siJavascript, siJenkins, siJira, siLucid, siLumen, siMysql,
  siNuxt, siOpenjdk, siPhp, siPostman, siReact, siSass, siSourcetree, siSpringboot, siTailwindcss, siTypescript,
  siVuedotjs, siXampp, siGithub,
} from 'simple-icons'
import { skills } from '../data/resume'

const ICONS = {
  siAngular, siBootstrap, siCodeigniter, siConfluence, siCplusplus, siCss, siDbeaver, siDiagramsdotnet, siDotnet,
  siFigma, siFlutter, siGitlab, siHtml5, siIntellijidea, siJavascript, siJenkins, siJira, siLucid, siLumen, siMysql,
  siNuxt, siOpenjdk, siPhp, siPostman, siReact, siSass, siSourcetree, siSpringboot, siTailwindcss, siTypescript,
  siVuedotjs, siXampp, siGithub,
}

// Brand colours that read better on pastel tiles than the current simple-icons value.
const HEX_OVERRIDE = { angular: 'DD0031' }
const HEX = (ic) => HEX_OVERRIDE[ic.slug] || ic.hex

export const skillById = Object.fromEntries(skills.map((s) => [s.id, s]))

export function brandColor(skill) {
  const ic = skill.icon && ICONS[skill.icon]
  return ic ? `#${HEX(ic)}` : skill.color
}

export function BrandSvg({ name, size = 18, color }) {
  const ic = ICONS[name]
  if (!ic) return null
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d={ic.path} fill={color || `#${HEX(ic)}`} />
    </svg>
  )
}

// Square tile with the brand logo (or a coloured monogram when no logo exists).
export default function SkillIcon({ id, size = 40 }) {
  const s = skillById[id]
  if (!s) return null
  const ic = s.icon && ICONS[s.icon]
  if (ic) {
    return (
      <span className="skill-ico" style={{ width: size, height: size, '--brand': `#${HEX(ic)}` }} title={s.name}>
        <BrandSvg name={s.icon} size={size * 0.55} />
      </span>
    )
  }
  return (
    <span className="skill-ico mono" style={{ width: size, height: size, background: s.color, fontSize: size * (s.mono.length > 2 ? 0.28 : 0.36) }} title={s.name}>
      {s.mono}
    </span>
  )
}
