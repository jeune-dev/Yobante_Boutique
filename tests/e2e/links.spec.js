// P0/P1 — Liens et boutons d'action : aucun lien cassé, aucun bouton qui ne fait rien.
import { test, expect } from './utils/test.js';
import { gotoHome, scrollToTop, scrollY, scrollThroughPage, waitForScrollEnd } from './utils/helpers.js';

test.describe('Liens', () => {
  test('aucun lien vide, mort ou mal formé', async ({ page }) => {
    await gotoHome(page);
    await scrollThroughPage(page);

    const links = await page.evaluate(() =>
      [...document.querySelectorAll('a')].map((a) => ({
        text: (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 40),
        href: a.getAttribute('href'),
        target: a.getAttribute('target'),
        rel: a.getAttribute('rel') || '',
        targetExists: a.getAttribute('href')?.startsWith('#') ? !!document.getElementById(a.getAttribute('href').slice(1)) : null,
      })),
    );
    expect(links.length, 'la page doit contenir des liens').toBeGreaterThan(0);

    const problems = [];
    for (const link of links) {
      const label = `« ${link.text} » (${link.href})`;
      if (!link.href || link.href === '#') problems.push(`${label} : href vide ou « # »`);
      else if (link.href.startsWith('#') && !link.targetExists) problems.push(`${label} : la cible n'existe pas`);
      else if (/^https?:/.test(link.href)) {
        if (link.target !== '_blank') problems.push(`${label} : lien externe sans target="_blank"`);
        if (!/noopener|noreferrer/.test(link.rel)) problems.push(`${label} : lien externe sans rel="noopener noreferrer"`);
      } else if (link.href.startsWith('mailto:') && !/^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/.test(link.href)) problems.push(`${label} : email invalide`);
      else if (link.href.startsWith('tel:') && !/^tel:\+?\d{6,}$/.test(link.href)) problems.push(`${label} : numéro invalide`);
    }
    expect(problems).toEqual([]);
  });

  test('le bouton WhatsApp pointe vers un numéro valide', async ({ page }) => {
    await gotoHome(page);
    const whatsapp = page.getByRole('link', { name: /WhatsApp/i }).first();
    await expect(whatsapp).toHaveAttribute('href', /^https:\/\/wa\.me\/\d{6,}$/);
  });

  test('les boutons de téléchargement ouvrent le bon magasin dans un nouvel onglet', async ({ page, context }) => {
    // aucune requête réelle vers les magasins
    await context.route(/apps\.apple\.com|play\.google\.com/, (route) => route.fulfill({ status: 200, contentType: 'text/html', body: '<title>store</title>' }));
    await gotoHome(page);
    await page.locator('#apps').scrollIntoViewIfNeeded();

    for (const [name, host] of [[/App Store/, 'apps.apple.com'], [/Google Play/, 'play.google.com']]) {
      const button = page.locator('#apps').getByRole('button', { name }).first();
      await button.scrollIntoViewIfNeeded();
      const [popup] = await Promise.all([context.waitForEvent('page'), button.click()]);
      expect(popup.url()).toContain(host);
      expect(await popup.evaluate(() => window.opener), 'l’onglet ne doit pas pouvoir piloter le site').toBeNull();
      await popup.close();
    }
  });
});

test.describe('Boutons d’action', () => {
  test('chaque bouton d’action fait réellement quelque chose', async ({ page }) => {
    test.setTimeout(90_000);
    await gotoHome(page);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await scrollThroughPage(page);

    // Boutons de défilement du contenu : on exclut ce qui a un autre rôle (formulaire,
    // accordéon FAQ, onglets, pastilles de catégories, téléchargements, bouton « remonter »).
    const candidates = page.locator('main button:visible, main a[href^="#"]:visible').filter({
      hasNot: page.locator('[aria-controls]'),
    });
    const all = await candidates.evaluateAll((els) =>
      els
        .filter(
          (el) =>
            el.getAttribute('type') !== 'submit' &&
            !el.hasAttribute('aria-controls') &&
            !el.closest('form') &&
            !/category-pill|download-btn|tab-btn|dot/.test(el.className.toString()),
        )
        .map((el) => (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 50)),
    );
    expect(all.length, 'aucun bouton d’action détecté : le sélecteur du test est à revoir').toBeGreaterThan(2);

    const dead = [];
    for (const text of [...new Set(all)]) {
      try {
        await scrollToTop(page);
        await waitForScrollEnd(page);
        const target = page.locator('main').getByRole('button', { name: text, exact: true }).or(page.locator('main').getByRole('link', { name: text, exact: true })).first();
        await target.scrollIntoViewIfNeeded({ timeout: 8_000 });
        const before = await scrollY(page);
        await target.click({ timeout: 8_000 });
        // le bouton doit faire défiler la page ; on laisse le temps au défilement
        const moved = await expect
          .poll(async () => Math.abs((await scrollY(page)) - before), { timeout: 4_000 })
          .toBeGreaterThan(20)
          .then(() => true, () => false);
        if (!moved) dead.push(`« ${text} » : la page n'a pas défilé`);
        await waitForScrollEnd(page);
      } catch (error) {
        dead.push(`« ${text} » : ${error.message.split(String.fromCharCode(10))[0]}`);
      }
    }
    expect(dead, 'boutons sans effet visible').toEqual([]);
  });
});
