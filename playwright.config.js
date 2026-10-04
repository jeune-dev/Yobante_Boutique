// Tests E2E — Playwright (déjà présent dans les devDependencies du projet).
//
//   npm run test:e2e                      tous les navigateurs
//   npm run test:e2e -- --project=chromium
//   npm run test:e2e -- tests/e2e/forms.spec.js
//
// Le site est construit puis servi par `vite preview` : les tests exercent le bundle
// de production, pas le serveur de développement.
import { defineConfig, devices } from 'playwright/test';

const PORT = 4274;
const baseURL = `http://localhost:${PORT}`;

// Specs qui ont un sens sur un vrai appareil mobile émulé (tactile, UA mobile).
const MOBILE_SPECS = /(home|mobile-menu|forms|links)\.spec\.js/;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // Aucun « retry » : un test qui n'aboutit qu'au second essai est un test instable à corriger.
  retries: 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  // Chaque test charge le site complet puis le parcourt : 60 s laissent de la marge aux postes lents
  // ou chargés (CI partagée) sans tolérer un vrai blocage.
  timeout: 60_000,
  expect: { timeout: 7_000 },
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // Le contenu est en français : même locale quel que soit le poste qui lance les tests.
    locale: 'fr-FR',
  },
  webServer: {
    command: `npm run build && npx vite preview --port ${PORT} --strictPort`,
    url: baseURL,
    // Toujours un serveur neuf : en réutiliser un qui tourne déjà servirait un ancien build (sans
    // reconstruction) et ferait tester du code périmé. Si le port est pris, Playwright le signale.
    reuseExistingServer: false,
    timeout: 240_000,
    // Variables figées au build : valeurs de test déterministes (les tests simulent l'API).
    env: {
      VITE_API_URL: 'http://localhost:5001/api/v1',
      VITE_CONTACT_PHONE: '+221 77 000 00 00',
      VITE_WHATSAPP_NUMBER: '+221 77 000 00 00',
    },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] }, testMatch: MOBILE_SPECS },
    { name: 'mobile-safari', use: { ...devices['iPhone 13'] }, testMatch: MOBILE_SPECS },
  ],
});
