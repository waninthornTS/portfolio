// All portfolio content lives here (source: Waninthorn's resume). Edit this file to update the site.

export const profile = {
  name: 'Waninthorn Tepbundalsuk',
  shortName: 'Waninthorn',
  role: 'Full Stack Developer',
  seeking: 'Software Developer',
  location: 'Thailand',
  email: 'waninthorn.ts@gmail.com',
  phone: '082-108-2688',
  github: 'https://github.com/waninthornTS',
  resume: 'Waninthorn-Tepbundalsuk-Resume.pdf',
  tagline:
    'I turn business requirements into polished, reliable web applications — from Angular and Vue interfaces to C# .NET APIs and SQL databases.',
  about: [
    "I'm a Full Stack Developer who has built web applications for telecom, government, healthcare and retail organizations. Today I work on a Warehouse Management System and a pharmaceutical e-commerce platform with Angular, C# .NET and SQL Server.",
    'Before that, I developed and maintained a web portal for a leading Thai telecommunications company (onsite at AIS) with Nuxt.js and Vue.js, and built government digital platforms with PHP and MySQL.',
    'I started my career as a Business Analyst intern — gathering requirements, writing SRSDs, designing wireframes and running UAT — so I care about understanding the "why" before writing the "how", and I communicate comfortably with BAs, designers, QA and users.',
  ],
  softSkills: ['Communication', 'Time Management', 'Conflict Resolution', 'Working Under Pressure'],
  strengths: [
    { icon: '🎨', title: 'Frontend', text: 'Responsive, pixel-careful UIs in Angular, Vue/Nuxt and React with Tailwind, Bootstrap and SCSS.' },
    { icon: '⚙️', title: 'Backend & APIs', text: 'RESTful APIs and business workflows in C# .NET and PHP, integrated end-to-end with the frontend.' },
    { icon: '🗄️', title: 'Databases', text: 'SQL Server and MySQL — queries, data validation and integrating services with business data.' },
    { icon: '🧭', title: 'Analysis & Delivery', text: 'Requirements, wireframes, SRSD and UAT, plus code reviews, GitLab flow and deployment support.' },
  ],
}

export const education = {
  school: 'Burapha University',
  degree: 'Bachelor of Software Engineering',
  faculty: 'Faculty of Informatics',
  period: '2020 – 2024',
  gpa: '3.14',
}

export const certifications = [
  {
    title: 'Open Source Software Developer Camp #10',
    org: 'Software Engineering Program, Burapha University',
    date: 'April 7–14, 2022',
    points: [
      'Intensive Agile/Scrum software development camp.',
      'Built a software solution for a real company client in a cross-functional team.',
      'Went through the full lifecycle: requirement analysis, sprint planning, development, testing and presentation.',
      'Presented the final product in a team competition judged by industry representatives.',
    ],
  },
]

// Skills. `icon` is a simple-icons export name; `mono` is a fallback badge (Microsoft brands aren't in simple-icons).
export const skillCategories = [
  { id: 'all', label: 'All' },
  { id: 'language', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools & DevOps' },
  { id: 'design', label: 'Design & Docs' },
]

export const skills = [
  { id: 'csharp', name: 'C#', cat: 'language', mono: 'C#', color: '#68217A', core: true },
  { id: 'typescript', name: 'TypeScript', cat: 'language', icon: 'siTypescript', core: true },
  { id: 'javascript', name: 'JavaScript', cat: 'language', icon: 'siJavascript' },
  { id: 'html', name: 'HTML5', cat: 'language', icon: 'siHtml5' },
  { id: 'css', name: 'CSS3 / SCSS', cat: 'language', icon: 'siCss' },
  { id: 'sql', name: 'SQL', cat: 'language', mono: 'SQL', color: '#3E7CB1' },
  { id: 'php', name: 'PHP', cat: 'language', icon: 'siPhp' },
  { id: 'java', name: 'Java', cat: 'language', icon: 'siOpenjdk' },
  { id: 'cpp', name: 'C / C++', cat: 'language', icon: 'siCplusplus' },

  { id: 'angular', name: 'Angular', cat: 'frontend', icon: 'siAngular', core: true },
  { id: 'vue', name: 'Vue.js', cat: 'frontend', icon: 'siVuedotjs', core: true },
  { id: 'nuxt', name: 'Nuxt.js', cat: 'frontend', icon: 'siNuxt', core: true },
  { id: 'react', name: 'React', cat: 'frontend', icon: 'siReact' },
  { id: 'tailwind', name: 'Tailwind CSS', cat: 'frontend', icon: 'siTailwindcss' },
  { id: 'bootstrap', name: 'Bootstrap', cat: 'frontend', icon: 'siBootstrap' },
  { id: 'sass', name: 'SASS', cat: 'frontend', icon: 'siSass' },
  { id: 'flutter', name: 'Flutter', cat: 'frontend', icon: 'siFlutter' },

  { id: 'dotnet', name: '.NET', cat: 'backend', icon: 'siDotnet', core: true },
  { id: 'rest', name: 'RESTful APIs', cat: 'backend', mono: 'API', color: '#E8708F' },
  { id: 'spring', name: 'Spring Boot', cat: 'backend', icon: 'siSpringboot' },
  { id: 'lumen', name: 'Lumen', cat: 'backend', icon: 'siLumen' },
  { id: 'codeigniter', name: 'CodeIgniter', cat: 'backend', icon: 'siCodeigniter' },

  { id: 'sqlserver', name: 'SQL Server', cat: 'database', mono: 'SQL', color: '#CC2927', core: true },
  { id: 'mysql', name: 'MySQL', cat: 'database', icon: 'siMysql' },
  { id: 'ssms', name: 'SSMS', cat: 'database', mono: 'MS', color: '#A91D22' },
  { id: 'mysqlwb', name: 'MySQL Workbench', cat: 'database', icon: 'siMysql' },
  { id: 'dbeaver', name: 'DBeaver', cat: 'database', icon: 'siDbeaver' },

  { id: 'gitlab', name: 'GitLab', cat: 'tools', icon: 'siGitlab' },
  { id: 'sourcetree', name: 'Sourcetree', cat: 'tools', icon: 'siSourcetree' },
  { id: 'postman', name: 'Postman', cat: 'tools', icon: 'siPostman' },
  { id: 'vs', name: 'Visual Studio', cat: 'tools', mono: 'VS', color: '#5C2D91' },
  { id: 'vscode', name: 'VS Code', cat: 'tools', mono: '</>', color: '#0078D4' },
  { id: 'intellij', name: 'IntelliJ IDEA', cat: 'tools', icon: 'siIntellijidea' },
  { id: 'jira', name: 'Jira', cat: 'tools', icon: 'siJira' },
  { id: 'jenkins', name: 'Jenkins', cat: 'tools', icon: 'siJenkins' },
  { id: 'confluence', name: 'Confluence', cat: 'tools', icon: 'siConfluence' },
  { id: 'xampp', name: 'XAMPP', cat: 'tools', icon: 'siXampp' },
  { id: 'prepros', name: 'Prepros', cat: 'tools', mono: 'P', color: '#7A5AF8' },

  { id: 'figma', name: 'Figma', cat: 'design', icon: 'siFigma' },
  { id: 'drawio', name: 'Draw.io', cat: 'design', icon: 'siDiagramsdotnet' },
  { id: 'lucid', name: 'Lucidchart', cat: 'design', icon: 'siLucid' },
  { id: 'vp', name: 'Visual Paradigm', cat: 'design', mono: 'VP', color: '#2F6FB5' },
  { id: 'office', name: 'MS Office', cat: 'design', mono: 'W', color: '#2B579A' },
  { id: 'srsd', name: 'SRSD / UAT Docs', cat: 'design', mono: '📄', color: '#F2A93B' },
  { id: 'wireframe', name: 'UX Wireframing', cat: 'design', mono: '✏️', color: '#E86FA0' },
]

// Work history. `end: null` = present. `skills` drive the "years used" numbers on the Skills section.
export const experience = [
  {
    id: 'smartgo',
    company: 'Smart Go System Development Co., Ltd.',
    short: 'Smart Go',
    role: 'Full Stack Developer',
    type: 'Full-time',
    start: '2026-01',
    end: null,
    color: '#62CBC9',
    summary: 'Full-stack web applications with Angular and C# .NET for warehouse and pharmaceutical retail businesses.',
    bullets: [
      'Develop full-stack web applications using Angular and C# .NET.',
      'Designed and implemented business workflows for a Warehouse Management System (WMS), covering inventory and warehouse operations.',
      'Developed an e-commerce platform for pharmaceutical retailers where customers browse products, place orders and manage purchases.',
      'Built RESTful APIs and integrated them with Angular frontends and SQL Server databases.',
    ],
    skills: ['csharp', 'dotnet', 'angular', 'typescript', 'javascript', 'html', 'css', 'sql', 'sqlserver', 'rest', 'ssms', 'vs', 'vscode', 'gitlab', 'sourcetree', 'postman', 'figma'],
  },
  {
    id: 'chareontut',
    company: 'Chareon Tut Co., Ltd.',
    short: 'Chareon Tut × AIS',
    role: 'Full Stack Developer',
    type: 'Onsite at AIS',
    start: '2024-05',
    end: '2025-12',
    color: '#5AA9E6',
    summary: 'Web portal for a leading Thai telecommunications company, built with Nuxt.js and Vue.js.',
    bullets: [
      'Developed and maintained a web portal for a leading telecommunications company using Nuxt.js, Vue.js, JavaScript, HTML, CSS and SQL.',
      'Designed and implemented responsive UI components with Tailwind CSS and Bootstrap, ensuring cross-browser compatibility.',
      'Integrated frontend applications with backend APIs and database services to support business operations.',
      'Collaborated with Business Analysts, QA and backend developers to deliver new features and resolve production issues.',
      'Took part in code reviews, GitLab version control and deployments to improve code quality and maintainability.',
    ],
    skills: ['nuxt', 'vue', 'javascript', 'html', 'css', 'sass', 'sql', 'tailwind', 'bootstrap', 'rest', 'vscode', 'gitlab', 'sourcetree', 'figma', 'postman'],
  },
  {
    id: 'clicknext-dev',
    company: 'ClickNext Co., Ltd.',
    short: 'ClickNext',
    role: 'Full Stack Developer',
    type: 'Full-time',
    start: '2023-10',
    end: '2024-04',
    color: '#8ED9B5',
    summary: 'Frontend and full-stack work on multiple government digital platforms with PHP and MySQL.',
    bullets: [
      'Developed and maintained frontend applications for multiple government digital platforms using HTML, CSS/SCSS, JavaScript, PHP and SQL.',
      'Implemented responsive, user-friendly interfaces from UI/UX designs and business requirements.',
      'Integrated pages with RESTful APIs and validated data using Postman and MySQL.',
      'Improved usability by fixing UI defects, optimizing layouts and refactoring existing frontend code.',
      'Supported system testing, bug fixing, deployment and maintenance across the SDLC.',
    ],
    skills: ['php', 'javascript', 'html', 'css', 'sass', 'sql', 'mysql', 'mysqlwb', 'rest', 'xampp', 'prepros', 'vscode', 'gitlab', 'sourcetree', 'figma', 'postman'],
  },
  {
    id: 'clicknext-ba',
    company: 'ClickNext Co., Ltd.',
    short: 'ClickNext',
    role: 'Business Analyst Intern',
    type: 'Internship',
    start: '2023-04',
    end: '2023-09',
    color: '#F2C46D',
    summary: 'Requirements, UX wireframes and project documentation for healthcare, government and banking systems.',
    bullets: [
      'Gathered and analyzed business requirements with stakeholders and translated them into functional specifications.',
      'Designed UX wireframes and user flows, and worked with developers on workflow and system design.',
      'Wrote SRSDs, functional specs, API documentation, user manuals, UAT reports, proposals and project plans.',
      'Coordinated UAT, ran end-user training and supported system go-live.',
    ],
    skills: ['srsd', 'wireframe', 'figma', 'drawio', 'lucid', 'vp', 'office', 'jira', 'confluence'],
  },
]

export const projects = [
  {
    id: 'wms',
    title: 'Warehouse Management System',
    org: 'Smart Go System Development',
    period: '2026 – Present',
    category: 'Enterprise',
    emoji: '📦',
    summary: 'Business workflows for inventory and warehouse operations.',
    role: 'Full Stack Developer',
    highlights: [
      'Designed and implemented WMS business workflows for inventory and warehouse operations.',
      'Built RESTful APIs in C# .NET backed by SQL Server.',
      'Integrated the APIs with Angular screens used by warehouse teams.',
    ],
    tech: ['angular', 'typescript', 'csharp', 'dotnet', 'sqlserver'],
  },
  {
    id: 'pharma',
    title: 'Pharmaceutical E-commerce Platform',
    org: 'Smart Go System Development',
    period: '2026 – Present',
    category: 'E-commerce',
    emoji: '💊',
    summary: 'Online store for pharmaceutical retailers: browse, order and manage purchases.',
    role: 'Full Stack Developer',
    highlights: [
      'Developed the customer journey: product browsing, ordering and purchase management.',
      'Connected the Angular frontend to C# .NET APIs and SQL Server.',
    ],
    tech: ['angular', 'typescript', 'csharp', 'dotnet', 'sqlserver'],
  },
  {
    id: 'telecom',
    title: 'Telecom Web Portal',
    org: 'Chareon Tut · Onsite at AIS',
    period: 'May 2024 – Dec 2025',
    category: 'Telecom',
    emoji: '📡',
    summary: 'Web portal for a leading telecommunications company in Thailand.',
    role: 'Full Stack Developer',
    highlights: [
      'Developed and maintained the portal with Nuxt.js and Vue.js.',
      'Built responsive, cross-browser UI components with Tailwind CSS and Bootstrap.',
      'Integrated backend APIs and database services; resolved production issues with BA, QA and backend teams.',
      'Contributed to code reviews and the GitLab deployment process.',
    ],
    tech: ['nuxt', 'vue', 'javascript', 'tailwind', 'bootstrap', 'sql'],
  },
  {
    id: 'gov',
    title: 'Government Digital Platforms',
    org: 'ClickNext',
    period: 'Oct 2023 – Apr 2024',
    category: 'Government',
    emoji: '🏛️',
    summary: 'Frontends for multiple public-sector digital services.',
    role: 'Full Stack Developer',
    highlights: [
      'Implemented responsive interfaces from UI/UX designs and business requirements.',
      'Integrated RESTful APIs and validated data with Postman and MySQL.',
      'Refactored frontend code and fixed UI defects to improve usability.',
    ],
    tech: ['php', 'javascript', 'html', 'sass', 'mysql'],
  },
  {
    id: 'emeeting',
    title: 'E-Meeting System',
    org: 'ClickNext',
    period: '2023',
    category: 'Business Analysis',
    emoji: '🗓️',
    summary: 'Documentation, training and UAT for an electronic meeting platform.',
    role: 'Business Analyst Intern',
    highlights: [
      'Prepared the user manual, UAT reports, API documentation, SRSD and functional specifications.',
      'Ran end-user training sessions and onboarding.',
      'Coordinated UAT and supported go-live.',
    ],
    tech: ['srsd', 'office', 'figma'],
  },
  {
    id: 'telemed',
    title: 'Telemedicine, Ministry & Court Systems',
    org: 'ClickNext',
    period: '2023',
    category: 'Healthcare & Public',
    emoji: '🚑',
    summary: 'Hospital and ambulance telemedicine plus ministry and court systems.',
    role: 'Business Analyst Intern',
    highlights: [
      'Gathered and analyzed requirements through stakeholder discussions.',
      'Designed UX wireframes and worked with developers on workflow and system design.',
      'Tracked project progress and produced plans, proposals, SRSDs and presentations.',
    ],
    tech: ['wireframe', 'figma', 'drawio', 'srsd'],
  },
  {
    id: 'banking',
    title: 'Banking LINE OA Service & Loyalty CRM',
    org: 'ClickNext',
    period: '2023',
    category: 'Banking',
    emoji: '💳',
    summary: 'Official LINE account service for a bank and a loyalty-program CRM.',
    role: 'Business Analyst Intern',
    highlights: [
      'Helped gather business requirements and turn them into functional specifications.',
      'Designed UX wireframes and user flows to improve usability.',
      'Prepared proposals, quotations and requirement documents.',
    ],
    tech: ['wireframe', 'figma', 'srsd'],
  },
  {
    id: 'leafy',
    title: 'Leafy Desk (Personal PWA)',
    org: 'Personal project',
    period: '2026',
    category: 'Personal',
    emoji: '🍃',
    summary: 'Installable offline web app: a software-engineering knowledge base and a guitar chord library.',
    role: 'Designer & Developer',
    highlights: [
      '140+ software-engineering topics, including an Angular → .NET → SQL Server request-flow guide.',
      '529 guitar chords with SVG diagrams; every voicing is checked against music theory by a script.',
      'Time-of-day themed UI, offline support and GitHub Actions deployment to GitHub Pages.',
    ],
    tech: ['react', 'javascript', 'css'],
    links: [{ label: 'GitHub', href: 'https://github.com/waninthornTS/appdream' }],
  },
]

// ---- helpers ----
const monthIndex = (ym) => {
  const [y, m] = ym.split('-').map(Number)
  return y * 12 + (m - 1)
}
const nowIndex = () => {
  const d = new Date()
  return d.getFullYear() * 12 + d.getMonth()
}

export function jobMonths(job) {
  return (job.end ? monthIndex(job.end) : nowIndex()) - monthIndex(job.start) + 1
}

export function formatMonths(total) {
  const y = Math.floor(total / 12)
  const m = total % 12
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`].filter(Boolean).join(' ') || '< 1 mo'
}

export function formatPeriod(job) {
  const f = (ym) => new Date(`${ym}-01T00:00:00`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  return `${f(job.start)} – ${job.end ? f(job.end) : 'Present'}`
}

export function skillUsage(skillId) {
  const jobs = experience.filter((j) => j.skills.includes(skillId))
  return { jobs, months: jobs.reduce((n, j) => n + jobMonths(j), 0) }
}

const devJobs = experience.filter((j) => j.type !== 'Internship')
export const careerMonths = experience.reduce((n, j) => n + jobMonths(j), 0)
export const devMonths = devJobs.reduce((n, j) => n + jobMonths(j), 0)
export const companies = new Set(experience.map((j) => j.company)).size
