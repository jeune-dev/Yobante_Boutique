// P1 — Responsive : aucun débordement, navigation adaptée, éléments clés dans l'écran,
// du plus petit mobile au 1920 px, et autour de chaque point de rupture.
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome, horizontalOverflow, scrollThroughPage } from './utils/helpers.js';

// Au-delà de ce seuil le menu complet remplace le burger (voir Navbar.jsx : 900 / 901 px).
const MENU_BREAKPOINT = 901;

const VIEWPORTS = [
  // mobile
  [320, 800], [360, 800], [375, 812], [390, 844], [414, 896], [480, 900],
  // tablette
  [768, 1024], [820, 1180], [1024, 1366],
  // desktop
  [1280, 720], [1366, 768], [1440, 900], [1536, 864], [1920, 1080],
];

// Largeurs autour des points de rupture de la mise en page.
const BREAKPOINTS = [767, 768, 769, 899, 900, 901, 1023, 1024, 1025, 1179, 1180, 1181, 1279, 1280, 1281];

test.use({ reducedMotion: 'reduce' }); // contenu immédiatement visible : mesures stables
test.describe.configure({ timeout: 90_000 }); // chaque test charge puis parcourt toute la page

async function offscreen(page) {
  // éléments interactifs ou médias dont un bord sort réellement de la fenêtre
  return page.evaluate(() => {
    const width = window.innerWidth;
    return [...document.querySelectorAll('main img, main button, main a, main input, main select, main textarea, nav button, h1, h2')]
      .filter((el) => el.offsetParent !== null || getComputedStyle(el).position === 'fixed')
      .filter((el) => !el.closest('[aria-hidden="true"], #mobile-menu:not(.open)'))
      .map((el) => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ r }) => r.width > 0 && r.height > 0 && (r.right > width + 1 || r.left < -1))
      .map(({ el, r }) => `${el.tagName.toLowerCase()}${el.className ? '.' + String(el.className).split(' ')[0] : ''} « ${(el.textContent || el.alt || '').trim().slice(0, 30)} » [${Math.round(r.left)} → ${Math.round(r.right)}] sur ${width}px`);
  });
}

async function checkLayout(page, width, browserName) {
  await gotoHome(page);
  expect(await horizontalOverflow(page), `débordement horizontal à ${width}px`).toBe(0);

  const nav = page.getByRole('navigation', { name: 'Navigation principale' });
  await expect(nav).toBeVisible();
  const burger = nav.getByRole('button', { name: /(Ouvrir|Fermer) le menu/ });
  const desktopLink = nav.getByRole('button', { name: 'Services', exact: true });
  // Le mode attendu est celui de la media query que le CSS et le script utilisent. WebKit pour Windows
  // retire la barre de défilement (≈15 px) de la largeur des media queries (fenêtre de 901 px = 886 px
  // « utiles ») : sur ce moteur on ne compare pas à la largeur brute, mais on vérifie toujours que le
  // menu complet et le burger ne sont jamais affichés ensemble ni absents ensemble.
  const wide = await page.evaluate((min) => window.matchMedia(`(min-width: ${min}px)`).matches, MENU_BREAKPOINT);
  if (browserName !== 'webkit') expect(wide, `mode de navigation attendu à ${width}px`).toBe(width >= MENU_BREAKPOINT);
  if (wide) {
    await expect(desktopLink, `menu complet attendu à ${width}px`).toBeVisible();
    await expect(burger).toBeHidden();
  } else {
    await expect(burger, `burger attendu à ${width}px`).toBeVisible();
    await expect(desktopLink).toBeHidden();
  }

  // titre principal et bouton d'action principal entièrement dans l'écran
  const h1 = await page.getByRole('heading', { level: 1 }).boundingBox();
  expect(h1.x).toBeGreaterThanOrEqual(-1);
  expect(h1.x + h1.width).toBeLessThanOrEqual(width + 1);
  const cta = page.getByRole('main').getByRole('button', { name: site.heroCtas[0].name }).first();
  await expect(cta).toBeVisible();
  const ctaBox = await cta.boundingBox();
  expect(ctaBox.x + ctaBox.width).toBeLessThanOrEqual(width + 1);
}

test.describe('Responsive — tailles courantes', () => {
  for (const [width, height] of VIEWPORTS) {
    test(`${width} × ${height}`, async ({ page, browserName }) => {
      await page.setViewportSize({ width, height });
      await checkLayout(page, width, browserName);

      await scrollThroughPage(page);
      expect(await horizontalOverflow(page), `débordement après défilement à ${width}px`).toBe(0);
      expect(await offscreen(page), 'éléments qui sortent de l’écran').toEqual([]);

      // pied de page atteint et formulaire entièrement dans l'écran
      await page.getByRole('contentinfo').scrollIntoViewIfNeeded();
      await expect(page.getByRole('contentinfo')).toBeVisible();
      const form = await page.locator('form.contact-form').boundingBox();
      expect(form.x).toBeGreaterThanOrEqual(-1);
      expect(form.x + form.width).toBeLessThanOrEqual(width + 1);
    });
  }
});

test.describe('Responsive — autour des points de rupture', () => {
  for (const width of BREAKPOINTS) {
    test(`${width}px`, async ({ page, browserName }) => {
      await page.setViewportSize({ width, height: 900 });
      await checkLayout(page, width, browserName);
      await scrollThroughPage(page);
      expect(await offscreen(page), 'éléments qui sortent de l’écran').toEqual([]);
    });
  }
});

test.describe('Responsive — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('les cibles tactiles font au moins 24 px (WCAG 2.5.8), 44 px visés', async ({ page }, testInfo) => {
    await gotoHome(page);
    await scrollThroughPage(page);
    const small = await page.evaluate(() =>
      [...document.querySelectorAll('main button, main a, nav button, main input, main select, main textarea, footer a, footer button')]
        .filter((el) => el.offsetParent !== null)
        .map((el) => ({ el, r: el.getBoundingClientRect() }))
        .filter(({ r }) => r.width > 0 && r.height > 0 && Math.min(r.width, r.height) < 44)
        .map(({ el, r }) => ({ name: `${el.tagName.toLowerCase()} « ${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30)} »`, min: Math.round(Math.min(r.width, r.height)) })),
    );
    // sous 24 px : échec ; entre 24 et 44 px : signalé dans le rapport sans faire échouer
    expect(small.filter((s) => s.min < 24), 'cibles tactiles trop petites').toEqual([]);
    if (small.length) testInfo.annotations.push({ type: 'cibles < 44px', description: small.map((s) => `${s.name} ${s.min}px`).join(' ; ') });
  });

  test('l’orientation paysage ne casse pas la page', async ({ page }) => {
    await page.setViewportSize({ width: 844, height: 390 });
    await gotoHome(page);
    expect(await horizontalOverflow(page)).toBe(0);
    await scrollThroughPage(page);
    expect(await offscreen(page)).toEqual([]);
  });
});
