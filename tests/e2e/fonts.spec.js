// P1 — Police Inter auto-hébergée : servie par le site, chargée sans erreur et UNE SEULE fois,
// dans tous les navigateurs. Ce test protège d'un préchargement mal apparié : WebKit (Safari)
// téléchargeait la police deux fois (et affichait un avertissement) quand elle était préchargée.
import { test, expect } from './utils/test.js';
import { gotoHome } from './utils/helpers.js';

test.describe('Police', () => {
  test('est chargée sans erreur, depuis le site, et téléchargée une seule fois', async ({ page, baseURL }) => {
    const fontRequests = [];
    page.on('request', (request) => {
      if (request.resourceType() === 'font') fontRequests.push(request.url());
    });
    await gotoHome(page);
    await page.waitForLoadState('networkidle');

    const statuses = await page.evaluate(async () => {
      await document.fonts.ready;
      return [...document.fonts].map((font) => font.status);
    });
    expect(statuses, 'aucune police en erreur').not.toContain('error');
    expect(statuses, 'la police latine est chargée').toContain('loaded');

    expect(fontRequests.length, 'au moins un fichier de police demandé').toBeGreaterThan(0);
    const counts = new Map();
    for (const url of fontRequests) counts.set(url, (counts.get(url) ?? 0) + 1);
    for (const [url, count] of counts) {
      expect(url.startsWith(`${baseURL}/fonts/`), `police servie par le site : ${url}`).toBe(true);
      expect(count, `${url} téléchargée ${count} fois`).toBe(1);
    }

    expect(await page.evaluate(() => getComputedStyle(document.body).fontFamily)).toMatch(/^"?Inter"?,/);
  });
});
