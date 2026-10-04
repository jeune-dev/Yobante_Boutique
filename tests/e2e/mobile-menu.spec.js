// P1 — Menu mobile : ouverture, navigation, fermeture (bouton, Échap, tap extérieur, rotation).
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome, expectSectionInView, horizontalOverflow } from './utils/helpers.js';

test.use({ viewport: { width: 390, height: 844 } });

const nav = (page) => page.getByRole('navigation', { name: 'Navigation principale' });
const burger = (page) => nav(page).getByRole('button', { name: /(Ouvrir|Fermer) le menu/ });
const menu = (page) => page.locator('#mobile-menu');

test.describe('Menu mobile', () => {
  test('est fermé au chargement', async ({ page }) => {
    await gotoHome(page);
    await expect(burger(page)).toBeVisible();
    await expect(burger(page)).toHaveAttribute('aria-expanded', 'false');
    await expect(menu(page)).toBeHidden();
    // les liens du bureau ne sont pas affichés
    await expect(nav(page).getByRole('button', { name: 'Services', exact: true })).toBeHidden();
  });

  test('s’ouvre, expose tous les liens puis se referme', async ({ page }) => {
    await gotoHome(page);
    await burger(page).click();
    await expect(burger(page)).toHaveAttribute('aria-expanded', 'true');
    await expect(menu(page)).toBeVisible();
    for (const { label } of site.nav) await expect(menu(page).getByRole('button', { name: label, exact: true })).toBeVisible();

    await burger(page).click();
    await expect(burger(page)).toHaveAttribute('aria-expanded', 'false');
    await expect(menu(page)).toBeHidden();
  });

  for (const { label, id } of site.nav) {
    test(`le lien « ${label} » affiche #${id} et referme le menu`, async ({ page }) => {
      await gotoHome(page);
      await burger(page).click();
      await menu(page).getByRole('button', { name: label, exact: true }).click();
      await expectSectionInView(page, id);
      await expect(burger(page)).toHaveAttribute('aria-expanded', 'false');
      await expect(menu(page)).toBeHidden();
    });
  }

  test('le bouton « Nous contacter » du menu mène au formulaire', async ({ page }) => {
    await gotoHome(page);
    await burger(page).click();
    await menu(page).getByRole('button', { name: 'Nous contacter' }).click();
    await expectSectionInView(page, 'contact');
    await expect(menu(page)).toBeHidden();
  });

  test('Échap referme le menu et rend le focus au bouton', async ({ page }) => {
    await gotoHome(page);
    await burger(page).click();
    await expect(menu(page)).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu(page)).toBeHidden();
    await expect(burger(page)).toBeFocused();
  });

  test('un tap en dehors du menu le referme', async ({ page }) => {
    await gotoHome(page);
    await burger(page).click();
    await expect(menu(page)).toBeVisible();
    await page.mouse.click(200, 800);
    await expect(menu(page)).toBeHidden();
  });

  test('l’en-tête reste visible quand on défile menu ouvert', async ({ page }) => {
    await gotoHome(page);
    await burger(page).click();
    // scrollBy plutôt que mouse.wheel : la molette n'existe pas dans WebKit mobile
    await page.evaluate(() => window.scrollBy({ top: 700, behavior: 'instant' }));
    await expect(menu(page)).toBeVisible();
    await expect(nav(page)).toBeInViewport();
  });

  test('en paysage, le menu ne dépasse pas l’écran', async ({ page }) => {
    await page.setViewportSize({ width: 844, height: 390 });
    await gotoHome(page);
    await burger(page).click();
    await expect(menu(page)).toBeVisible();
    const box = await menu(page).boundingBox();
    expect(box.y + box.height, 'le menu doit tenir (ou défiler) dans la hauteur de l’écran').toBeLessThanOrEqual(390 + 1);
    expect(await horizontalOverflow(page)).toBe(0);
  });

  test('passer en largeur desktop referme le menu', async ({ page }) => {
    await gotoHome(page);
    await burger(page).click();
    await expect(menu(page)).toBeVisible();
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(menu(page)).toBeHidden();
    await expect(nav(page).getByRole('button', { name: 'Services', exact: true })).toBeVisible();
  });

  test('les cibles tactiles du menu font au moins 44 px', async ({ page }) => {
    await gotoHome(page);
    await burger(page).click();
    const boxes = await Promise.all([burger(page), ...site.nav.map(({ label }) => menu(page).getByRole('button', { name: label, exact: true }))].map((l) => l.boundingBox()));
    for (const box of boxes) expect(Math.min(box.width, box.height)).toBeGreaterThanOrEqual(44);
  });
});
