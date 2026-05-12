# RIAH — Luxury Weddings & Cultural Celebrations

**RIAH** is the official website for RIAH Weddings & Events, a globally mobile luxury wedding planning house founded by Tobi Yusuf. Built for culturally rich couples across the UK, Europe, and beyond.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS v4**
- **Framer Motion / Motion**
- **React Router v7**
- **Lenis** (smooth scroll)

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```
   App runs at [http://localhost:3000](http://localhost:3000)

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This is a standard Vite + React SPA. Deploy to any static host:

- **Vercel** — connect the repo, set framework to Vite, deploy
- **Netlify** — connect the repo, build command `npm run build`, publish dir `dist`
- **Cloudflare Pages** — build command `npm run build`, output dir `dist`

> For SPA routing to work on any host, configure all routes to serve `index.html` (Netlify: add a `_redirects` file; Vercel: handled automatically).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About & Founder |
| `/planning` | Planning Experiences (3 tiers) |
| `/journal` | Journal |
| `/press` | Press |
| `/enquire` | Enquiry Form |
| `/portal` | Client Portal |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/faq` | FAQ |

## Domain

[riahevents.com](https://riahevents.com)

## Contact

- General: [tobi@riahevents.com](mailto:tobi@riahevents.com)
- Press: [press@riah.co.uk](mailto:press@riah.co.uk)
