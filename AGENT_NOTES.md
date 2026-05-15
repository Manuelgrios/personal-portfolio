# Agent Notes

Read `DESIGN_GUIDE.md` before changing layout, colors, copy tone, or component styling.

## Source of Truth

- Profile and contact info: `src/data/profile.ts`
- Project info: `src/data/projects.ts`
- Skill info: `src/data/skills.ts`
- Resume PDF location: `public/assets/resume/Manuel_Garnica_Resume.pdf`

## Updating Profile Links

Update `src/data/profile.ts` only. Navbar, footer, home social links, contact cards, and the resume button should read from `profile`, `profileLinks`, or `contactLinks`.

## Adding a Project

Add one object to the `projects` array in `src/data/projects.ts`.

Required fields:

- `slug`
- `title`
- `summary`
- `problem`
- `outcome`
- `tools`

The `/projects` page and `/projects/:slug` detail route will pick it up automatically.

## Adding a Skill

Add a new item to `skillItems` in `src/data/skills.ts`.

Use a short `mark` value because it appears inside a compact tile.

## Resume

Do not invent resume content. When the PDF is available, place it at:

`public/assets/resume/Manuel_Garnica_Resume.pdf`

The resume URL is configured in `src/data/profile.ts`.

## Before Committing

Run:

```bash
npm run build
```

Fix all TypeScript, routing, import, and build errors before committing.
