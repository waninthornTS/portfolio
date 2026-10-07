# Waninthorn Tepbundalsuk — Portfolio

Personal portfolio (React + Vite): who I am, work experience, skills with years of use, projects and achievements.

```bash
npm install
npm run dev
```

## Editing content

Everything shown on the site lives in [`src/data/resume.js`](src/data/resume.js):

- `profile` – name, tagline, about text, contact
- `experience` – jobs; each job's `skills` list drives the "years used" numbers in the Skills section
- `skills` – skill tiles (logos come from `simple-icons`; `mono` is a text badge for brands without a logo)
- `projects`, `certifications`, `education`

Replace `public/Waninthorn-Tepbundalsuk-Resume.pdf` to update the downloadable resume.
`node scripts/photo.mjs` re-crops `scripts/src-art/photo-original.jpg` into the hero photo, avatar and favicon.

Colour palette is inspired by KBTG (charcoal + teal `#62CBC9`); tokens are at the top of `src/styles.css`.
