# Portfolio Repository
This is the repository for Software Engineering Training Weeks 1-2 Portfolio Project

## Getting Started
### Running Locally
```bash
pnpm install
pnpm dev
```

Local page is hosted at [http://localhost:3000](http://localhost:3000)

## Stack
- Next.js 16
- React 19
- Tailwind v4
- ShadCN
- Next-themes
- Nodemailer
- Biome

## MVP Requirements
1. Home Page: Server component, has metadata (title, description, openGraph).
2. About me Page: Shared layout.tsx with header + nav, has loading.tsx skeleton.
3. Projects list: Async Server Component. Reads from JSON. Renders Project Card.
4. Individual Project Page: Dynamic route with await params to get slug. Calls notFound() on invalid slug.
5. Contact form: Client Component using useActionState() + Server Action. Submit button uses useFormStatus(). Shows success/error state. Email sent with nodemailer.
6. error.tsx: "use client" boundary. Message + Reset to home button.
7. loading.tsx: Skeleton UI with ShadCN component.
8. All images via next/image: No raw <img> tags. All images have alt, width, and height.
9. Tailwind v4 @theme token: At least one custom --color-* token in globals.css, used in a component.
10. Deployed to Vercel: Live public URL. Auto-deploys on push to main.

### Stretch Goals
- Blog/Writing Section: Reads MDX or JSON per post. Dynamic routes.
- Dark Mode Toggle: Tailwind v4 dark: variant. State via localStorage or system preference.
- Page Transitions: CSS @starting-style or Framer-motion
