# Agent Notes

Read `DESIGN_GUIDE.md` before changing layout, colors, copy tone, or component styling.

## Source of Truth

- Site title, brand, copyright, theme notes, and resume path: `src/data/siteConfig.ts`
- Profile, hero, section copy, and contact email: `src/data/profile.ts`
- Education entries: `src/data/education.ts`
- Navigation items: `src/data/navigation.ts`
- Project info: `src/data/projects.ts`
- Skill info: `src/data/skills.ts`
- Social/contact links: `src/data/socialLinks.ts`
- Resume file location: configured in `src/data/siteConfig.ts`

## Updating Profile Links

Update `src/data/socialLinks.ts` for social/contact URLs and `src/data/profile.ts` for email/profile text. Navbar, footer, home social links, contact cards, and the resume button should read from config/data files.

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

Do not invent resume content. When the resume file is available, place it under `public/assets/resume/` and update `src/data/siteConfig.ts`.

The resume URL is configured in `src/data/siteConfig.ts`.

## Customizing This Portfolio For A New Person

1. Change name, initials, site title, copyright year, and resume path in `src/data/siteConfig.ts`.
2. Change bio, hero, education-facing text, location, and email in `src/data/profile.ts`.
3. Update degrees and school entries in `src/data/education.ts`.
4. Update GitHub, LinkedIn, email, and optional profile links in `src/data/socialLinks.ts`.
5. Add or replace project entries in `src/data/projects.ts`.
6. Add or replace skills in `src/data/skills.ts`.
7. Replace the headshot in `public/assets/`.
8. Replace the resume in `public/assets/resume/`.
9. Run `npm run build` before committing.

Page and layout components should not contain client-specific names, emails, schools, project titles, or resume filenames.

## Before Committing

Run:

```bash
npm run build
```

Fix all TypeScript, routing, import, and build errors before committing.
