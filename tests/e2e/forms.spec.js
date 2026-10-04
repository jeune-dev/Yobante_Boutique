// P0 — Formulaire de contact : cas nominal, validation, valeurs limites, double envoi,
// et tous les états de l'API (l'API est toujours simulée : aucune requête réelle ne part).
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome, fillContact, contactForm, submitButton, mockContactApi, reply } from './utils/helpers.js';

const success = (page) => contactForm(page).getByRole('status');
const failure = (page) => contactForm(page).getByRole('alert');

// Promesse que le test résout lui-même : permet de garder une réponse d'API « en vol » aussi
// longtemps que nécessaire, sans dépendre d'un délai fixe.
function deferred() {
  let release;
  const gate = new Promise((resolve) => { release = resolve; });
  return { gate, release };
}

async function openForm(page) {
  await gotoHome(page);
  await contactForm(page).scrollIntoViewIfNeeded();
}

test.describe('Formulaire de contact — cas nominal', () => {
  test('envoie la demande à l’API avec le bon contenu puis confirme et réinitialise', async ({ page }) => {
    const calls = await mockContactApi(page);
    await openForm(page);
    const data = await fillContact(page);
    await submitButton(page).click();

    await expect(success(page)).toHaveText(/Message envoyé avec succès/);
    expect(calls).toHaveLength(1);
    expect(calls[0]).toEqual({ source: site.source, prenom: data.prenom, nom: data.nom, email: data.email, telephone: data.telephone, sujet: data.sujet, message: data.message });
    // formulaire vidé et bouton de nouveau utilisable
    await expect(contactForm(page).getByRole('textbox', { name: 'Message' })).toHaveValue('');
    await expect(submitButton(page)).toBeEnabled();
  });

  test('le téléphone est facultatif', async ({ page }) => {
    const calls = await mockContactApi(page);
    await openForm(page);
    await fillContact(page, { telephone: '' });
    await submitButton(page).click();
    await expect(success(page)).toBeVisible();
    expect(calls[0].telephone).toBe('');
  });
});

test.describe('Formulaire de contact — validation côté navigateur', () => {
  test('un envoi à vide est bloqué : aucune requête, le premier champ manquant est signalé', async ({ page }) => {
    const calls = await mockContactApi(page);
    await openForm(page);
    await submitButton(page).click();
    expect(calls).toHaveLength(0);
    await expect(contactForm(page).getByRole('textbox', { name: 'Prénom' })).toBeFocused();
    expect(await contactForm(page).evaluate((f) => f.querySelectorAll(':invalid').length)).toBeGreaterThan(0);
  });

  for (const email of ['abc', 'a@', '@b.com', 'a b@c.com', 'a@b', 'a@b.', 'a@@b.com']) {
    test(`l’email « ${email} » est refusé sans appeler l’API`, async ({ page }) => {
      const calls = await mockContactApi(page);
      await openForm(page);
      await fillContact(page, { email });
      await submitButton(page).click();
      expect(calls).toHaveLength(0);
      await expect(contactForm(page).getByRole('textbox', { name: 'Adresse email' })).toBeFocused();
    });
  }

  test('un message ou un nom fait uniquement d’espaces est refusé avec une explication', async ({ page }) => {
    const calls = await mockContactApi(page);
    await openForm(page);
    await fillContact(page, { message: '          ' });
    await submitButton(page).click();
    await expect(failure(page)).toContainText(/message/i);
    expect(calls).toHaveLength(0);
  });
});

test.describe('Formulaire de contact — valeurs limites', () => {
  test('la saisie plafonne à la longueur acceptée par l’API', async ({ page }) => {
    const calls = await mockContactApi(page);
    await openForm(page);
    await fillContact(page);
    // fill() contourne maxlength : on insère le texte comme le ferait un copier-coller du visiteur,
    // ce qui applique la limite du navigateur (taper 3 000 touches une à une serait inutilement lent).
    const form = contactForm(page);
    for (const [name, size] of [['Prénom', 95], ['Nom', 95], ['Message', 3050]]) {
      const field = form.getByRole('textbox', { name, exact: name === 'Nom' });
      await field.clear();
      await field.focus();
      await page.keyboard.insertText((name[0]).repeat(size));
    }
    await submitButton(page).click();
    await expect(success(page)).toBeVisible();
    expect(calls).toHaveLength(1);
    expect(calls[0].prenom).toHaveLength(80);
    expect(calls[0].nom).toHaveLength(80);
    expect(calls[0].message).toHaveLength(3000);
  });

  test('accents, apostrophes, emoji et balises sont transmis tels quels, sans exécution', async ({ page }) => {
    const calls = await mockContactApi(page);
    let dialog = false;
    page.on('dialog', (d) => { dialog = true; d.dismiss(); });
    await openForm(page);
    const message = 'Bonjour, c’est l\'été ! « Ça va » ? 日本語 — 💙 <script>alert(1)</script> & "guillemets" <img src=x onerror=alert(2)>';
    await fillContact(page, { prenom: 'Éloïse', nom: 'N\'Diaye-Ndiaye', message });
    await submitButton(page).click();
    await expect(success(page)).toBeVisible();
    expect(calls[0].prenom).toBe('Éloïse');
    expect(calls[0].nom).toBe('N\'Diaye-Ndiaye');
    expect(calls[0].message).toBe(message);
    expect(dialog, 'aucune boîte alert() ne doit s’ouvrir').toBe(false);
    expect(await page.locator('script', { hasText: 'alert(1)' }).count()).toBe(0);
  });
});

test.describe('Formulaire de contact — envoi', () => {
  test('un double clic n’envoie qu’une seule demande et le bouton est bloqué pendant l’envoi', async ({ page }) => {
    const { gate, release } = deferred();
    const calls = await mockContactApi(page, async (route) => {
      await gate; // la réponse n'arrive que lorsque le test la libère : aucun délai fixe
      return reply(201, { success: true })(route);
    });
    await openForm(page);
    await fillContact(page);
    await submitButton(page).dblclick();
    await expect(submitButton(page)).toBeDisabled();
    await expect(submitButton(page)).toHaveText(/Envoi en cours/);
    release();
    await expect(success(page)).toBeVisible();
    expect(calls).toHaveLength(1);
  });

  test('deux validations clavier rapprochées n’envoient qu’une seule demande', async ({ page }) => {
    const { gate, release } = deferred();
    const calls = await mockContactApi(page, async (route) => {
      await gate;
      return reply(201, { success: true })(route);
    });
    await openForm(page);
    await fillContact(page);
    await contactForm(page).getByRole('textbox', { name: 'Adresse email' }).focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    await expect(submitButton(page)).toHaveText(/Envoi en cours/);
    release();
    await expect(success(page)).toBeVisible();
    expect(calls).toHaveLength(1);
  });

  test('après une erreur, un nouvel essai fonctionne', async ({ page, issues }) => {
    issues.allow(/status of 500|HTTP 500/);
    const calls = await mockContactApi(page, (route, n) => (n === 1 ? reply(500, { success: false })(route) : reply(201, { success: true })(route)));
    await openForm(page);
    await fillContact(page);
    await submitButton(page).click();
    await expect(failure(page)).toBeVisible();
    await submitButton(page).click();
    await expect(success(page)).toBeVisible();
    await expect(failure(page)).toBeHidden();
    expect(calls).toHaveLength(2);
  });
});

test.describe('Formulaire de contact — réponses de l’API', () => {
  const cases = [
    [400, { success: false, message: 'Données invalides' }, /Vérifiez les informations/],
    [401, { success: false, message: 'Non authentifié' }, /erreur/i],
    [403, { success: false, message: 'Interdit' }, /erreur/i],
    [404, { success: false, message: 'Route introuvable' }, /erreur/i],
    [429, { success: false, message: 'Trop de messages envoyés. Réessayez dans une heure.' }, /Trop de messages envoyés/],
    [500, { success: false, message: 'Erreur interne' }, /erreur/i],
    [503, { success: false, message: 'Indisponible' }, /erreur/i],
  ];

  for (const [status, body, expected] of cases) {
    test(`HTTP ${status} : message compréhensible, formulaire conservé`, async ({ page, issues }) => {
      issues.allow(new RegExp(`status of ${status}|HTTP ${status}`));
      await mockContactApi(page, reply(status, body));
      await openForm(page);
      await fillContact(page);
      await submitButton(page).click();
      await expect(failure(page)).toContainText(expected);
      // la saisie n'est pas perdue
      await expect(contactForm(page).getByRole('textbox', { name: 'Message' })).not.toHaveValue('');
      await expect(submitButton(page)).toBeEnabled();
    });
  }

  test('réponse 200 sans contenu valide : traitée comme une erreur, jamais comme un succès', async ({ page }) => {
    await mockContactApi(page, (route) => route.fulfill({ status: 200, contentType: 'text/plain', headers: { 'access-control-allow-origin': '*' }, body: '' }));
    await openForm(page);
    await fillContact(page);
    await submitButton(page).click();
    await expect(failure(page)).toBeVisible();
    await expect(success(page)).toBeHidden();
  });

  test('API injoignable : message de connexion, formulaire conservé', async ({ page, issues }) => {
    issues.allow(/requête en échec|Failed to load resource|ERR_|NetworkError|Load failed/i);
    await mockContactApi(page, (route) => route.abort('connectionrefused'));
    await openForm(page);
    await fillContact(page);
    await submitButton(page).click();
    await expect(failure(page)).toContainText(/connexion/i);
    await expect(submitButton(page)).toBeEnabled();
  });

  test('API qui ne répond jamais : le site ne reste pas bloqué, une erreur s’affiche', async ({ page }) => {
    await page.clock.install();
    await mockContactApi(page, () => new Promise(() => {}));
    await openForm(page);
    await fillContact(page);
    await submitButton(page).click();
    await expect(submitButton(page)).toBeDisabled();
    await page.clock.fastForward(16_000);
    await expect(failure(page)).toContainText(/trop de temps/i);
    await expect(submitButton(page)).toBeEnabled();
  });

  test('API lente : l’état « envoi en cours » est visible puis disparaît', async ({ page }) => {
    const { gate, release } = deferred();
    await mockContactApi(page, async (route) => {
      await gate;
      return reply(201, { success: true })(route);
    });
    await openForm(page);
    await fillContact(page);
    await submitButton(page).click();
    await expect(submitButton(page)).toHaveText(/Envoi en cours/);
    await expect(submitButton(page)).toBeDisabled();
    release();
    await expect(success(page)).toBeVisible();
    await expect(submitButton(page)).toHaveText(/Envoyer le message/);
  });
});
