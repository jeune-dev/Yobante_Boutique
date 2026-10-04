// P1 — Routes : le site est une page unique à ancres (aucun routeur côté client).
// On vérifie l'ouverture directe, l'actualisation, le retour/avance du navigateur
// et le comportement sur une URL inexistante.
import { readFileSync } from 'node:fs';
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome, expectSectionInView, waitForScrollEnd } from './utils/helpers.js';

test.describe('Routes et historique', () => {
  test('la racine répond 200 et affiche le site', async ({ page }) => {
    const response = await page.goto('/');
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(site.title);
  });

  for (const id of ['services', 'faq', 'contact', 'about']) {
    test(`ouverture directe de /#${id} : la section est affichée`, async ({ page }) => {
      await page.goto(`/#${id}`);
      await expect(page.getByRole('heading', { level: 1 })).toBeAttached();
      await expectSectionInView(page, id);
    });
  }

  test('actualiser la page à une ancre la conserve et ne casse rien', async ({ page }) => {
    await page.goto('/#contact');
    await expectSectionInView(page, 'contact');
    await page.reload();
    await expect(page).toHaveTitle(site.title);
    await expectSectionInView(page, 'contact');
    await expect(page.locator('form.contact-form')).toBeVisible();
  });

  test('retour et avance du navigateur entre deux ancres', async ({ page }) => {
    await gotoHome(page);
    await page.goto('/#faq');
    await expectSectionInView(page, 'faq');
    await page.goto('/#contact');
    await expectSectionInView(page, 'contact');

    await page.goBack();
    await expect(page).toHaveURL(/#faq$/);
    await expectSectionInView(page, 'faq');

    await page.goForward();
    await expect(page).toHaveURL(/#contact$/);
    await expectSectionInView(page, 'contact');
    await expect(page.getByRole('heading', { level: 1 })).toBeAttached();
  });

  test('une navigation rapide entre plusieurs sections n’abîme pas la page', async ({ page }) => {
    await gotoHome(page);
    const nav = page.getByRole('navigation', { name: 'Navigation principale' });
    for (const { label } of [...site.nav, ...site.nav].slice(0, 8)) {
      // le défilement précédent doit être terminé, puis l'en-tête (masquée quand on descend)
      // réapparaît au moindre geste vers le haut
      await waitForScrollEnd(page);
      await page.evaluate(() => window.scrollBy({ top: -40, behavior: 'instant' }));
      await expect.poll(() => nav.evaluate((el) => Math.round(el.getBoundingClientRect().top))).toBe(0);
      await nav.getByRole('button', { name: label, exact: true }).click();
    }
    await expect(page.getByRole('heading', { level: 1 })).toBeAttached();
    await expect(page.getByRole('main')).toBeVisible();
  });

  test('URL inexistante : le site s’affiche (repli prévu par nginx), pas d’écran blanc', async ({ page }) => {
    const response = await page.goto('/page-inexistante');
    expect(response.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page).toHaveTitle(site.title);
  });

  test('URL profonde inexistante : les ressources se chargent toujours (chemins absolus)', async ({ page }) => {
    await page.goto('/a/b/c/d');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('img', { name: 'YOBANTÉ Logo' }).first()).toBeVisible();
  });

  // `vite preview` renvoie la page d'accueil pour tout chemin inconnu, même un fichier : le 404 réel des
  // assets est assuré par nginx. On vérifie donc la configuration de production elle-même.
  test('nginx renvoie un vrai 404 pour un asset inexistant (configuration de production)', async () => {
    const conf = readFileSync(new URL('../../deploy/nginx.conf', import.meta.url), 'utf8');
    const assets = conf.match(/location \/assets\/ \{[^}]*\}/s)?.[0] ?? '';
    expect(assets).toContain('try_files $uri =404;');
  });
});
