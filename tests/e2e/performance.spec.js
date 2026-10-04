// P1 — Non-régression de performance (Chromium) : poids, ressources, LCP, CLS.
// Seuils fixés au-dessus des valeurs mesurées après l'audit performance, avec de la marge :
// ils signalent une dérive, pas une variation normale.
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { scrollThroughPage } from './utils/helpers.js';

test.skip(({ browserName }) => browserName !== 'chromium', 'Les API de mesure (LCP, CLS) sont celles de Chromium.');

const LIMITS = { js: 320_000, css: 20_000, firstLoadRequests: 25 };

test.describe('Performance', () => {
  test('poids du JavaScript et du CSS, nombre de requêtes au chargement', async ({ page }) => {
    const sizes = { js: 0, css: 0, font: 0, image: 0 };
    let requests = 0;
    page.on('response', async (response) => {
      requests++;
      const type = response.request().resourceType();
      const body = await response.body().catch(() => Buffer.alloc(0));
      if (type === 'script') sizes.js += body.length;
      else if (type === 'stylesheet') sizes.css += body.length;
      else if (type === 'font') sizes.font += body.length;
      else if (type === 'image') sizes.image += body.length;
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(sizes.js, `JS : ${sizes.js} octets`).toBeLessThan(LIMITS.js);
    expect(sizes.css, `CSS : ${sizes.css} octets`).toBeLessThan(LIMITS.css);
    expect(sizes.font, 'au moins une police auto-hébergée chargée').toBeGreaterThan(0);
    expect(requests, `${requests} requêtes au chargement`).toBeLessThan(LIMITS.firstLoadRequests);
  });

  test('le visuel du Hero est préchargé, la police ne l’est volontairement pas', async ({ page }) => {
    await page.goto('/');
    const preloads = await page.locator('head link[rel="preload"]').evaluateAll((els) => els.map((e) => `${e.getAttribute('as')}:${e.getAttribute('href')}`));
    if (site.heroPreload) expect(preloads).toContain(`image:${site.heroPreload}`);
    // WebKit (Safari) télécharge deux fois une police préchargée : voir fonts.spec.js
    expect(preloads.filter((p) => p.startsWith('font:'))).toEqual([]);
  });

  test('l’image du Hero est demandée avant la fin du JavaScript', async ({ page }) => {
    test.skip(!site.heroPreload, 'Ce site ne précharge pas son visuel de Hero.');
    const starts = {};
    page.on('request', (r) => {
      if (r.url().endsWith(site.heroPreload)) starts.hero = Date.now();
      if (/assets\/index-.*\.js$/.test(r.url())) starts.js = Date.now();
    });
    const done = {};
    page.on('requestfinished', (r) => { if (/assets\/index-.*\.js$/.test(r.url())) done.js = Date.now(); });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(starts.hero, 'image du Hero demandée').toBeDefined();
    expect(starts.hero, 'l’image ne doit pas attendre l’exécution du JavaScript').toBeLessThanOrEqual(done.js);
  });

  test('LCP rapide et CLS quasi nul, mesurés sur un parcours complet', async ({ page }) => {
    await page.addInitScript(() => {
      window.__lcp = 0;
      window.__cls = 0;
      new PerformanceObserver((list) => { for (const e of list.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
      new PerformanceObserver((list) => { for (const e of list.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const lcp = await page.evaluate(() => window.__lcp);
    await scrollThroughPage(page);
    await page.waitForLoadState('networkidle');
    const cls = await page.evaluate(() => window.__cls);

    expect(lcp, `LCP ${Math.round(lcp)} ms (serveur local, sans limitation réseau)`).toBeGreaterThan(0);
    expect(lcp).toBeLessThan(2500);
    expect(cls, `CLS ${cls.toFixed(4)}`).toBeLessThan(0.1);
  });
});
