// P0 — En-tête desktop et navigation interne (viewport 1280 × 720).
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome, scrollToTop, scrollY, expectSectionInView } from './utils/helpers.js';

test.use({ viewport: { width: 1280, height: 720 } });

const mainNav = (page) => page.getByRole('navigation', { name: 'Navigation principale' });

test.describe('En-tête et navigation (desktop)', () => {
  test('affiche le logo, tous les liens et le bouton de contact', async ({ page }) => {
    await gotoHome(page);
    const nav = mainNav(page);
    await expect(nav.getByRole('button', { name: 'YOBANTÉ Logo' })).toBeVisible();
    for (const { label } of site.nav) await expect(nav.getByRole('button', { name: label, exact: true })).toBeVisible();
    await expect(nav.getByRole('button', { name: 'Nous contacter' }).first()).toBeVisible();
    // le burger est réservé aux petits écrans
    await expect(nav.getByRole('button', { name: 'Ouvrir le menu' })).toBeHidden();
  });

  for (const { label, id } of site.nav) {
    test(`le lien « ${label} » affiche la section #${id} et devient actif`, async ({ page }) => {
      await gotoHome(page);
      await mainNav(page).getByRole('button', { name: label, exact: true }).click();
      await expectSectionInView(page, id);
      await expect(mainNav(page).getByRole('button', { name: label, exact: true })).toHaveAttribute('aria-current', 'true');
    });
  }

  test('le bouton « Nous contacter » mène au formulaire', async ({ page }) => {
    await gotoHome(page);
    await mainNav(page).getByRole('button', { name: 'Nous contacter' }).first().click();
    await expectSectionInView(page, 'contact');
  });

  test('le logo ramène en haut de page', async ({ page }) => {
    await gotoHome(page);
    await page.evaluate(() => document.getElementById('faq').scrollIntoView({ behavior: 'instant' }));
    await expect.poll(() => scrollY(page)).toBeGreaterThan(500);
    // l'en-tête se masque en descendant : on remonte d'un cran pour la faire réapparaître
    await page.mouse.wheel(0, -200);
    await expect(mainNav(page).getByRole('button', { name: 'YOBANTÉ Logo' })).toBeInViewport();
    await mainNav(page).getByRole('button', { name: 'YOBANTÉ Logo' }).click();
    await expect.poll(() => scrollY(page)).toBeLessThan(5);
  });

  test('l’en-tête se masque en descendant et réapparaît en remontant', async ({ page }) => {
    await gotoHome(page);
    const top = () => mainNav(page).evaluate((el) => Math.round(el.getBoundingClientRect().top));
    expect(await top()).toBe(0);
    await page.mouse.wheel(0, 900);
    await expect.poll(top).toBeLessThan(0);
    await page.mouse.wheel(0, -300);
    await expect.poll(top).toBe(0);
  });

  for (const cta of site.heroCtas) {
    test(`le bouton du Hero « ${cta.name.source} » affiche #${cta.target}`, async ({ page }) => {
      await gotoHome(page);
      await scrollToTop(page);
      await page.getByRole('main').getByRole('button', { name: cta.name }).first().click();
      await expectSectionInView(page, cta.target);
    });
  }

  test('le focus clavier fait avancer la page comme un clic', async ({ page }) => {
    await gotoHome(page);
    const faq = mainNav(page).getByRole('button', { name: 'FAQ', exact: true });
    await faq.focus();
    await page.keyboard.press('Enter');
    await expectSectionInView(page, 'faq');
  });
});
