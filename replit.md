# Dr Kabelo Kgoete Medical Practice & Optometry

A React SPA website for Dr Kabelo Kgoete's medical practice and optometry clinic in Glen Cowie, Limpopo, South Africa.

## Tech Stack

- **Framework**: React 19 + TanStack Router (SPA, client-side routing)
- **Build tool**: Vite 7
- **Styling**: Tailwind CSS v4 + shadcn/ui components (Radix UI)
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
src/
  routes/         # TanStack Router file-based routes
  components/
    site/         # Site-specific components (SiteShell, ClinicPages)
    ui/           # shadcn/ui component library
  assets/         # Images (logo, facility photos)
  styles.css      # Tailwind global styles
  main.tsx        # App entry point
  router.tsx      # TanStack Router configuration
  routeTree.gen.ts # Auto-generated route tree (do not edit)
index.html        # HTML entry point
```

## Routes

- `/` — Home page
- `/about` — About the practice
- `/medical-services` — Medical services offered
- `/optometry` — Optometry services
- `/contact` — Contact information
- `/blog` — Health journal / patient education articles
- `/doctor-jane-furse`, `/gp-glencowie`, `/medical-practice`, `/optometrist-limpopo` — SEO landing pages

## Running the App

```bash
npm run dev    # Start dev server on port 5000
npm run build  # Production build
```

## Migration Notes

Migrated from Vercel/Cloudflare Workers (TanStack Start SSR) to a standard Vite SPA on Replit:
- Replaced `@lovable.dev/vite-tanstack-config` with standard Vite + TanStack Router plugin
- Removed `@tanstack/react-start` and `@cloudflare/vite-plugin` (SSR/CF-specific)
- Removed SSR-only `head()` functions from route files
- Added `index.html` entry point and `src/main.tsx`
- Simplified `__root.tsx` to remove `shellComponent`, `HeadContent`, `Scripts`
- Dev server configured on port 5000 with `host: 0.0.0.0` for Replit compatibility
