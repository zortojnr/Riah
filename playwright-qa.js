import { chromium } from '@playwright/test';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = 'http://localhost:5173';
const PAGES = ['/', '/about', '/planning', '/journal', '/press', '/enquire', '/faq', '/wedding-planner-london', '/nigerian-wedding-planner-uk'];
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

const screenshotsDir = path.join(__dirname, 'playwright-screenshots');
if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

(async () => {
  const browser = await chromium.launch();
  const issues = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const route of PAGES) {
      await page.goto(BASE + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(1500);

      const slug = route === '/' ? 'home' : route.replace('/', '');
      await page.screenshot({
        path: path.join(screenshotsDir, `${slug}-${vp.name}.png`),
        fullPage: true,
      });

      // Check for horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      if (hasOverflow) {
        issues.push(`OVERFLOW: ${route} at ${vp.name} (${vp.width}px) — scrollWidth > innerWidth`);
      }

      // Check title is set correctly
      const title = await page.title();
      if (!title.includes('RIAH')) {
        issues.push(`TITLE MISSING "RIAH": ${route} — got: "${title}"`);
      }

      // Check tap target sizes on mobile
      if (vp.name === 'mobile') {
        const smallTargets = await page.evaluate(() => {
          const interactive = Array.from(document.querySelectorAll('a, button'));
          return interactive
            .map(el => {
              const r = el.getBoundingClientRect();
              return { tag: el.tagName, text: el.textContent?.trim().slice(0, 40), w: r.width, h: r.height };
            })
            .filter(el => el.w > 0 && el.h > 0 && (el.w < 44 || el.h < 44))
            .slice(0, 5);
        });
        if (smallTargets.length > 0) {
          issues.push(`SMALL TAP TARGETS on ${route} (${vp.name}): ${smallTargets.map(t => `"${t.text}" ${Math.round(t.w)}x${Math.round(t.h)}`).join(', ')}`);
        }
      }
    }

    await context.close();
  }

  await browser.close();

  console.log('\n=== PLAYWRIGHT QA REPORT ===\n');
  if (issues.length === 0) {
    console.log('✓ No issues found across all pages and viewports.');
  } else {
    issues.forEach(i => console.log('✗', i));
  }
  console.log(`\nScreenshots saved to: ${screenshotsDir}`);
  console.log(`Total pages tested: ${PAGES.length} × ${VIEWPORTS.length} viewports = ${PAGES.length * VIEWPORTS.length} screenshots`);
})();
