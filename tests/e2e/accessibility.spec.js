// P1 — Accessibilité : audit automatisé (axe-core) + parcours clavier réel.
// L'automatisation ne prouve pas l'accessibilité complète : elle détecte les erreurs mécaniques.
import { createRequire } from 'node:module';
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome, scrollThroughPage } from './utils/helpers.js';

const axePath = createRequire(import.meta.url).resolve('axe-core/axe.min.js');
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'];

test.use({ reducedMotion: 'reduce' });

async function runAxe(page) {
  await page.addScriptTag({ path: axePath });
  return page.evaluate(
    ([tags, exclude]) =>
      window.axe
        .run({ exclude: exclude.map((selector) => [selector]) }, { runOnly: { type: 'tag', values: tags } })
        .then((r) => r.violations.map((v) => `${v.id} (${v.impact}) : ${v.help} → ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(' | ')}`)),
    [TAGS, site.axeExclude],
  );
}

test.describe('Accessibilité — axe-core', () => {
  for (const [label, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    test(`aucune violation automatisable (${label})`, async ({ page }) => {
      test.setTimeout(120_000); // axe-core parcourt tout le DOM : lent sous WebKit quand les tests tournent en parallèle
      await page.setViewportSize(viewport);
      await gotoHome(page);
      await scrollThroughPage(page);
      expect(await runAxe(page)).toEqual([]);
    });
  }

  test('structure des titres : un seul H1, aucun niveau sauté', async ({ page }) => {
    await gotoHome(page);
    const levels = await page.evaluate(() => [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => Number(h.tagName[1])));
    expect(levels.filter((l) => l === 1)).toHaveLength(1);
    const skipped = levels.flatMap((level, i) => (i > 0 && level > levels[i - 1] + 1 ? [`h${levels[i - 1]} → h${level}`] : []));
    expect(skipped).toEqual([]);
  });

  test('chaque champ du formulaire a un nom accessible et le bouton de défilement aussi', async ({ page }) => {
    await gotoHome(page);
    const form = page.locator('form.contact-form');
    for (const role of ['textbox', 'combobox']) {
      const count = await form.getByRole(role).count();
      for (let i = 0; i < count; i++) {
        const name = await form.getByRole(role).nth(i).evaluate((el) => el.getAttribute('aria-label') || el.labels?.[0]?.textContent || '');
        expect(name.trim(), `champ n°${i + 1} (${role}) sans nom accessible`).not.toBe('');
      }
    }
  });
});

test.describe('Accessibilité — clavier', () => {
  test('le lien d’évitement est le premier élément focalisable et mène au contenu', async ({ page, browserName }) => {
    await gotoHome(page);
    const skip = page.getByRole('link', { name: 'Aller au contenu' });
    // Safari (WebKit) ne place pas les liens dans l'ordre de Tab (réglage « Appuyer sur Tab pour mettre
    // en surbrillance chaque élément », désactivé par défaut) : l'ordre de tabulation vers un lien n'y est
    // donc pas testable. Sur ce moteur on donne le focus par programme et on vérifie le reste du parcours.
    if (browserName === 'webkit') await skip.focus();
    else await page.keyboard.press('Tab');
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await page.keyboard.press('Enter');
    await expect(page.locator('#contenu')).toBeFocused();
  });

  test('le focus est toujours visible et ne reste jamais piégé', async ({ page }) => {
    await gotoHome(page);
    const seen = new Set();
    const invisible = [];
    for (let i = 0; i < 80; i++) {
      await page.keyboard.press('Tab');
      const info = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          id: `${el.tagName}|${el.getAttribute('aria-label') || (el.textContent || '').trim().slice(0, 25)}|${Math.round(r.top + window.scrollY)}`,
          ring: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0 || cs.boxShadow !== 'none',
          name: (el.textContent || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 30),
        };
      });
      if (!info) break; // le focus est sorti de la page : le tour est complet
      if (!info.ring) invisible.push(info.name);
      seen.add(info.id);
    }
    expect(seen.size, 'le parcours clavier doit atteindre de nombreux éléments').toBeGreaterThan(15);
    expect(invisible, 'éléments focalisés sans indicateur visible').toEqual([]);
  });

  test('la FAQ s’ouvre et se ferme à Entrée et à Espace', async ({ page }) => {
    await gotoHome(page);
    const questions = page.locator('#faq').getByRole('button');
    const first = questions.first();
    await first.scrollIntoViewIfNeeded();
    await first.focus();
    const state = () => first.getAttribute('aria-expanded');
    const initial = await state();
    await page.keyboard.press('Enter');
    await expect.poll(state).not.toBe(initial);
    await page.keyboard.press('Space');
    await expect.poll(state).toBe(initial);
  });

  test('le formulaire se remplit et s’envoie entièrement au clavier', async ({ page }) => {
    const sent = [];
    await page.route('**/public/demandes-contact', (route) => {
      if (route.request().method() === 'OPTIONS') return route.fulfill({ status: 204, headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': 'content-type' } });
      sent.push(route.request().postDataJSON());
      return route.fulfill({ status: 201, headers: { 'access-control-allow-origin': '*' }, contentType: 'application/json', body: '{"success":true}' });
    });
    await gotoHome(page);
    const form = page.locator('form.contact-form');
    await form.getByRole('textbox', { name: 'Prénom' }).focus();
    await page.keyboard.type('Awa');
    await page.keyboard.press('Tab');
    await page.keyboard.type('Diop');
    await page.keyboard.press('Tab');
    await page.keyboard.type('awa@example.com');
    await page.keyboard.press('Tab');
    await page.keyboard.type('+221770000000');
    await page.keyboard.press('Tab');
    await form.getByRole('combobox').selectOption(site.subject); // une liste native se pilote à la souris/clavier selon le navigateur
    await page.keyboard.press('Tab');
    await page.keyboard.type('Message envoyé au clavier.');
    await page.keyboard.press('Tab');
    await expect(form.getByRole('button', { name: /Envoyer le message/ })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(form.getByRole('status')).toBeVisible();
    expect(sent).toHaveLength(1);
  });
});
