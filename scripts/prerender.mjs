// Génère le HTML de la page au build pour que les moteurs de recherche
// lisent le contenu sans exécuter le JavaScript.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrDir = path.join(root, 'dist-ssr');
const indexPath = path.join(root, 'dist', 'index.html');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(indexPath, 'utf8');
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) throw new Error('Balise <div id="root"></div> introuvable dans dist/index.html');

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log('Pré-rendu : dist/index.html généré.');
