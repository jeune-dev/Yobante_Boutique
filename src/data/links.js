// Liens dérivés des coordonnées de src/data/site.js (fichier identique sur les deux sites).
import { site } from './site';

const digits = (value) => (value || '').replace(/\D/g, '');

export const phoneHref = digits(site.phone).length >= 6 ? `tel:${site.phone.replace(/[^\d+]/g, '')}` : '';
export const whatsappHref = digits(site.whatsapp).length >= 6 ? `https://wa.me/${digits(site.whatsapp)}` : '';
export const emailHref = site.email ? `mailto:${site.email}` : '';

// Les deux sites YOBANTÉ, listés dans le pied de page.
export const YOBANTE_SITES = [
  { name: 'YOBANTÉ Boutique', text: 'Achats en France, livrés au Sénégal', href: 'https://www.yobante-boutique.com' },
  { name: 'YOBANTÉ REK', text: 'Expédition de colis France ↔ Sénégal', href: 'https://www.yobanterek.com' },
];

// Pages légales : adresse directe de chacune (ex. /#confidentialite).
export const LEGAL_HASHES = { conditions: 'conditions-generales', confidentialite: 'confidentialite' };

// Ouverture d'une page légale depuis n'importe quel bloc (le pied de page l'affiche).
export const LEGAL_EVENT = 'yobante:legal';
export const openLegal = (doc) => window.dispatchEvent(new CustomEvent(LEGAL_EVENT, { detail: doc }));
