import { expect } from './test.js';
import { site } from './site.js';

/** Ouvre une URL du site et attend que le Hero soit réellement affiché. */
export async function gotoHome(page, path = '/') {
  await page.goto(path);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
}

export const scrollToTop = (page) => page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));

export const scrollY = (page) => page.evaluate(() => Math.round(window.scrollY));

/** Attend (sans pause fixe) que la section #id soit affichée dans la fenêtre. */
export async function expectSectionInView(page, id) {
  await expect
    .poll(
      () =>
        page.evaluate((sectionId) => {
          const rect = document.getElementById(sectionId)?.getBoundingClientRect();
          if (!rect) return `#${sectionId} absente de la page`;
          return rect.top < window.innerHeight * 0.6 && rect.bottom > 0
            ? 'affichée'
            : `hors écran (top=${Math.round(rect.top)}px)`;
        }, id),
      { message: `la section #${id} doit être affichée`, timeout: 8_000 },
    )
    .toBe('affichée');
}

/**
 * Attend la fin réelle d'un défilement : position inchangée sur 5 relevés consécutifs (50 ms).
 * À appeler après un clic qui fait défiler : tant que la page bouge, l'en-tête se masque ou
 * réapparaît et les éléments ne sont pas « stables » pour Playwright.
 * (Relevés par minuterie et non par requestAnimationFrame : WebKit pour Windows peut suspendre
 * les images d'affichage d'une page pendant les tests parallèles.)
 */
export const waitForScrollEnd = (page) =>
  page.evaluate(
    () =>
      new Promise((resolve) => {
        let last = -1;
        let still = 0;
        const timer = setInterval(() => {
          const y = Math.round(window.scrollY);
          still = y === last ? still + 1 : 0;
          last = y;
          if (still >= 5) {
            clearInterval(timer);
            resolve();
          }
        }, 50);
      }),
  );

/** Débordement horizontal de la page : retourne l'écart en pixels (0 = aucun). */
export const horizontalOverflow = (page) =>
  page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - window.innerWidth));

/**
 * Attend la fin des transitions et animations CSS courtes en cours (révélations au défilement…).
 * Mesurer une position pendant qu'un bloc glisse donne un faux résultat (décalage de quelques px).
 * Les animations longues (surbrillance d'une carte pendant 60 s) sont volontairement ignorées.
 */
export const settleAnimations = (page) =>
  page.evaluate(() =>
    Promise.all(
      document
        .getAnimations()
        .filter((animation) => {
          const timing = animation.effect?.getComputedTiming?.();
          return timing && Number.isFinite(timing.endTime) && timing.endTime <= 3000;
        })
        .map((animation) => animation.finished.catch(() => {})),
    ),
  );

/**
 * Défile toute la page par paliers. Chaque palier attend deux images d'affichage : sans cela
 * le navigateur ne stabilise pas la position entre deux sauts, et les observateurs
 * d'intersection (révélations, images différées) ne voient jamais passer les blocs.
 */
export async function scrollThroughPage(page) {
  const { height, step } = await page.evaluate(() => ({ height: document.documentElement.scrollHeight, step: Math.round(window.innerHeight * 0.8) }));
  for (let y = 0; y < height; y += step) {
    await page.evaluate(
      (top) =>
        new Promise((resolve) => {
          window.scrollTo({ top, behavior: 'instant' });
          requestAnimationFrame(() => requestAnimationFrame(resolve));
        }),
      y,
    );
  }
  await settleAnimations(page);
}

/* ───────────── Formulaire de contact ───────────── */

export const contactForm = (page) => page.locator('form.contact-form');

export async function fillContact(page, values = {}) {
  const data = {
    prenom: 'Awa',
    nom: 'Diop',
    email: 'awa.diop@example.com',
    telephone: '+221 77 000 00 00',
    sujet: site.subject,
    message: 'Bonjour, je souhaite un renseignement.',
    ...values,
  };
  const form = contactForm(page);
  await form.getByRole('textbox', { name: 'Prénom' }).fill(data.prenom);
  await form.getByRole('textbox', { name: 'Nom', exact: true }).fill(data.nom);
  await form.getByRole('textbox', { name: 'Adresse email' }).fill(data.email);
  await form.getByRole('textbox', { name: 'Numéro de téléphone ou WhatsApp' }).fill(data.telephone);
  await form.getByRole('combobox', { name: 'Sujet de votre demande' }).selectOption(data.sujet);
  await form.getByRole('textbox', { name: 'Message' }).fill(data.message);
  return data;
}

export const submitButton = (page) => contactForm(page).getByRole('button', { name: /Envoyer le message|Envoi en cours/ });

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-headers': 'content-type',
  'access-control-allow-methods': 'POST, OPTIONS',
};

/** Réponse JSON simulée pour l'API de contact. */
export const reply = (status, body = {}) => (route) =>
  route.fulfill({ status, headers: CORS, contentType: 'application/json', body: JSON.stringify(body) });

/**
 * Intercepte l'API de contact : aucune requête réelle ne part vers le back.
 * Retourne la liste des corps reçus (un élément par demande envoyée).
 */
export async function mockContactApi(page, respond = reply(201, { success: true, message: 'ok', data: null })) {
  const calls = [];
  await page.route('**/public/demandes-contact', async (route) => {
    const request = route.request();
    if (request.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: CORS });
    calls.push(request.postDataJSON());
    return respond(route, calls.length);
  });
  return calls;
}
