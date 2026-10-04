// Fixture commune : chaque test échoue s'il provoque une erreur JavaScript, une erreur de
// console, un avertissement ou une requête en échec — sans avoir à le vérifier à la main.
import { test as base, expect } from 'playwright/test';

// Requêtes annulées par le navigateur lui-même (navigation, image différée interrompue) :
// ce n'est pas une erreur du site.
const ANNULEES = /ERR_ABORTED|NS_BINDING_ABORTED|cancelled|canceled|aborted/i;

export const test = base.extend({
  issues: [
    async ({ page }, use) => {
      const found = [];
      const allowed = [];

      page.on('console', (message) => {
        const type = message.type();
        if (type === 'error' || type === 'warning') found.push(`console.${type}: ${message.text()}`);
      });
      page.on('pageerror', (error) => found.push(`pageerror: ${error.message}`));
      page.on('requestfailed', (request) => {
        const reason = request.failure()?.errorText ?? '';
        if (!ANNULEES.test(reason)) found.push(`requête en échec: ${request.method()} ${request.url()} (${reason})`);
      });
      page.on('response', (response) => {
        if (response.status() >= 400) found.push(`HTTP ${response.status()}: ${response.url()}`);
      });

      // Un test qui provoque volontairement une erreur (API simulée en 500…) la déclare ici.
      await use({ allow: (pattern) => allowed.push(pattern) });

      const real = found.filter((line) => !allowed.some((pattern) => pattern.test(line)));
      expect(real, 'erreurs console / réseau détectées pendant le test').toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
