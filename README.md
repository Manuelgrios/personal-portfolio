# Personal Portfolio

Personal portfolio website for Manuel Garnica.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Before making design or content changes, read `DESIGN_GUIDE.md`.

## Deployment

- Local development: `npm install`, then `npm run dev`
- Production build: `npm run build`
- GitHub Pages deploys automatically on push to `main`
- GitHub Pages source should be set to **GitHub Actions**
- Live URL: https://manuelgrios.github.io/personal-portfolio/

In GitHub, check **Settings -> Pages -> Source** and confirm it is set to
**GitHub Actions**.

## Updating Content

Profile and contact information live in `src/data/profile.ts`.

Project information lives in `src/data/projects.ts`. To add a future project,
add a new object with a unique `slug`, `title`, `summary`, `problem`, `outcome`,
and `tools`. The project index and detail route will use that data.

Skill information lives in `src/data/skills.ts`.

## Resume

Place the resume file at:

```text
public/assets/resume/Manuel_Garnica_Resume.docx
```

The Resume button reads its URL from `src/data/profile.ts`.
