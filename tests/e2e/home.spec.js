// P0 — Page d'accueil : chargement, structure, images, révélations au défilement.
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome, scrollThroughPage, scrollToTop } from './utils/helpers.js';

test.describe('Page d’accueil', () => {
  test('se charge sans erreur et affiche les repères principaux', async ({ page }) => {
    await gotoHome(page);

    await expect(page).toHaveTitle(site.title);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(site.h1);
    await expect(page.getByRole('navigation', { name: 'Navigation principale' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'YOBANTÉ Logo' }).first()).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeAttached();
  });

  test('contient toutes les sections attendues, dans l’ordre', async ({ page }) => {
    await gotoHome(page);
    const ids = await page.evaluate(() => [...document.querySelectorAll('main > section[id]')].map((s) => s.id));
    expect(ids).toEqual(site.sections);
    for (const id of site.sections) await expect(page.locator(`#${id}`)).toBeAttached();
  });

  test('toutes les images se chargent, ont un alt et des dimensions', async ({ page }) => {
    await gotoHome(page);
    await scrollThroughPage(page);

    // Les images différées peuvent finir de charger un instant après le défilement.
    await expect
      .poll(() => page.evaluate(() => [...document.images].filter((i) => i.offsetParent !== null && !(i.complete && i.naturalWidth > 0)).map((i) => i.currentSrc || i.src)), {
        message: 'images non chargées',
      })
      .toEqual([]);

    const problems = await page.evaluate(() =>
      [...document.images].flatMap((img) => {
        const name = (img.currentSrc || img.src).split('/').pop();
        const out = [];
        if (!img.hasAttribute('alt')) out.push(`${name}: attribut alt absent`);
        if (!img.getAttribute('width') || !img.getAttribute('height')) out.push(`${name}: width/height absents (risque de décalage de mise en page)`);
        return out;
      }),
    );
    expect(problems).toEqual([]);
  });

  test('le footer est affiché en bas de page avec son contenu', async ({ page }) => {
    await gotoHome(page);
    await page.getByRole('contentinfo').scrollIntoViewIfNeeded();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByRole('contentinfo')).not.toBeEmpty();
  });

  test('les révélations au défilement n’en laissent aucune invisible', async ({ page }) => {
    await gotoHome(page);
    await scrollThroughPage(page);
    // Après être passé devant chaque bloc, aucun ne doit rester à opacité 0.
    await expect
      .poll(() =>
        page.evaluate(() =>
          [...document.querySelectorAll('.sr, .sr-l, .sr-r')]
            .filter((el) => el.offsetParent !== null) // un bloc non affiché n'a rien à révéler
            .filter((el) => Number(getComputedStyle(el).opacity) < 1)
            .map((el) => el.className.toString().slice(0, 40)),
        ),
      )
      .toEqual([]);
  });

  test('revient en haut de page sans erreur (bouton « remonter »)', async ({ page }) => {
    await gotoHome(page);
    await page.evaluate(() => window.scrollTo({ top: 1500, behavior: 'instant' }));
    const button = page.getByRole('button', { name: 'Remonter en haut de la page' });
    await expect(button).toBeVisible();
    await button.click();
    await expect.poll(() => page.evaluate(() => Math.round(window.scrollY))).toBeLessThan(5);
    await scrollToTop(page);
  });
});
