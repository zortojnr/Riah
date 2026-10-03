import { preview } from 'vite';
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

// Static routes only — dynamic routes (/journal/:slug) and the gated /portal are excluded.
const ROUTES = [
  '/',
  '/about',
  '/planning',
  '/journal',
  '/press',
  '/enquire',
  '/faq',
  '/media',
  '/privacy',
  '/terms',
  '/wedding-planner-london',
  '/wedding-planner-uk',
  '/destination-wedding-planner-uk',
  '/luxury-wedding-planner-uk',
  '/multicultural-wedding-planner-uk',
  '/nigerian-wedding-planner-uk',
];

const DIST = path.resolve(process.cwd(), 'dist');

async function main() {
  const server = await preview({ preview: { port: 4173, strictPort: false } });
  const base = server.resolvedUrls.local[0];

  let browser;
  try {
    browser = await chromium.launch();
  } catch (error) {
    if (process.env.VERCEL !== '1') throw error;
    console.warn('[prerender] Chromium is unavailable on Vercel; skipping route prerendering.');
    await new Promise((resolve) => server.httpServer.close(resolve));
    return;
  }
  const page = await browser.newPage();

  // Analytics/tag-manager calls go to real external hosts and can hang the
  // prerender (no real GA4 ID is wired up yet) — block them, they're not part
  // of page content.
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.includes('googletagmanager.com') || url.includes('google-analytics.com')) {
      return route.abort();
    }
    route.continue();
  });

  for (const route of ROUTES) {
    await page.goto(new URL(route, base).toString(), { waitUntil: 'load' });
    await page.waitForSelector('footer', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(300);
    const html = await page.content();

    const outDir = route === '/' ? DIST : path.join(DIST, route.slice(1));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`Prerendered ${route}`);
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
