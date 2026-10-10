// P1 — SEO technique : métadonnées, partage social, données structurées, fichiers robots/sitemap.
import { test, expect } from './utils/test.js';
import { site } from './utils/site.js';
import { gotoHome } from './utils/helpers.js';

const meta = (page, selector) => page.locator(`head ${selector}`).first().getAttribute('content');

test.describe('SEO', () => {
  test('titre, langue et description', async ({ page }) => {
    await gotoHome(page);
    await expect(page).toHaveTitle(site.title);
    expect(await page.locator('html').getAttribute('lang')).toBe('fr');
    const description = await meta(page, 'meta[name="description"]');
    expect(description.length, 'description : 70 à 160 caractères pour ne pas être tronquée').toBeGreaterThanOrEqual(70);
    expect(description.length).toBeLessThanOrEqual(160);
  });

  test('URL canonique absolue et cohérente avec le domaine', async ({ page }) => {
    await gotoHome(page);
    expect(await page.locator('head link[rel="canonical"]').getAttribute('href')).toBe(`${site.domain}/`);
    expect(await meta(page, 'meta[property="og:url"]')).toBe(`${site.domain}/`);
  });

  test('Open Graph et Twitter complets', async ({ page }) => {
    await gotoHome(page);
    for (const property of ['og:type', 'og:locale', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt']) {
      expect(await meta(page, `meta[property="${property}"]`), property).toBeTruthy();
    }
    for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
      expect(await meta(page, `meta[name="${name}"]`), name).toBeTruthy();
    }
    const image = await meta(page, 'meta[property="og:image"]');
    expect(image.startsWith(`${site.domain}/`), 'og:image doit être une URL absolue du site').toBe(true);
  });

  test('l’image de partage existe et fait bien 1200 × 630', async ({ page, request, baseURL }) => {
    await gotoHome(page);
    const path = new URL(await meta(page, 'meta[property="og:image"]')).pathname;
    const response = await request.get(`${baseURL}${path}`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/image\/jpeg/);
    const dims = await page.evaluate(async (src) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      return [img.naturalWidth, img.naturalHeight];
    }, path);
    expect(dims).toEqual([1200, 630]);
  });

  test('les données structurées sont du JSON valide et décrivent le site', async ({ page }) => {
    await gotoHome(page);
    const raw = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(raw.length).toBeGreaterThan(0);
    const items = raw.map((text) => JSON.parse(text));
    for (const data of items) expect(data['@context']).toBe('https://schema.org');
    const org = items.find((data) => data['@type'] === 'Organization');
    expect(org, 'bloc Organization présent').toBeTruthy();
    expect(org.url).toBe(`${site.domain}/`);
    expect(org.name).toBeTruthy();
    const faq = items.find((data) => data['@type'] === 'FAQPage');
    expect(faq?.mainEntity?.length, 'FAQPage décrit les questions de la FAQ').toBeGreaterThan(0);
  });

  test('le contenu est présent dans le HTML, sans JavaScript (pré-rendu)', async ({ request, baseURL }) => {
    const html = await (await request.get(`${baseURL}/`)).text();
    expect(html).toMatch(/<h1[^>]*>/);
    expect(html).toContain('Questions fréquentes');
  });

  test('robots.txt autorise l’indexation et annonce le sitemap', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/robots.txt`);
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toMatch(/User-agent:\s*\*/);
    expect(body).not.toMatch(/Disallow:\s*\/\s*$/m);
    expect(body).toContain(`Sitemap: ${site.domain}/sitemap.xml`);
  });

  test('sitemap.xml ne liste que des URL réellement indexables', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/sitemap.xml`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/xml/);
    const locs = [...(await response.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    expect(locs).toEqual([`${site.domain}/`]);
  });

  test('le favicon est servi', async ({ request, baseURL }) => {
    expect((await request.get(`${baseURL}/favicon.png`)).status()).toBe(200);
  });

  test('aucune requête vers un tiers : polices et images viennent du site', async ({ page, baseURL }) => {
    const hosts = new Set();
    page.on('request', (r) => hosts.add(new URL(r.url()).host));
    await gotoHome(page);
    expect([...hosts]).toEqual([new URL(baseURL).host]);
  });
});
