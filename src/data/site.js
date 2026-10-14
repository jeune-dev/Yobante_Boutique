// Informations propres à ce site (YOBANTÉ Boutique).
// Les blocs Contact, Qui sommes-nous, pied de page et pages légales sont
// identiques sur YOBANTÉ Boutique et YOBANTÉ REK : seul ce fichier change
// d'un site à l'autre. Pour mettre à jour les coordonnées, modifier ici.

import footerLogo from '../assets/images/logo-footer.webp';

const env = import.meta.env;

// Numéros à saisir ici, entre les guillemets (ex. '+33 6 12 34 56 78').
// S'ils restent vides, les variables de déploiement VITE_CONTACT_PHONE et
// VITE_WHATSAPP_NUMBER sont utilisées quand elles existent.
const PHONE = '';
const WHATSAPP = '';

export const site = {
  name: 'YOBANTÉ Boutique',
  // Identifie le site d'origine des messages envoyés par le formulaire.
  source: 'boutique',

  // ── Coordonnées (à compléter) ─────────────────────────────────────────
  // Tant qu'un champ est vide, la carte correspondante affiche « — » dans
  // la section Contact et la ligne est masquée dans le pied de page.
  phone: PHONE || env.VITE_CONTACT_PHONE || '',
  whatsapp: WHATSAPP || env.VITE_WHATSAPP_NUMBER || '',
  email: 'contact@yobanteboutique.com',
  address: '', // ex. 'Paris, France · Dakar, Sénégal'
  hours: '', // ex. 'Lun – Sam : 9h – 19h' (retour à la ligne possible avec \n)

  // ── Section Contact ───────────────────────────────────────────────────
  contactIntro: 'Notre équipe vous accompagne pour vos achats et vos livraisons au Sénégal.',
  subjects: ['Commande boutique', 'Livraison au Sénégal', 'Produit indisponible', 'Autres'],

  // ── Section Qui sommes-nous ? ─────────────────────────────────────────
  about:
    'YOBANTÉ Boutique facilite vos achats en France et leur livraison au Sénégal grâce à une sélection de produits fiables, accessibles et authentiques.',

  // ── Pied de page ──────────────────────────────────────────────────────
  footerLogo,
  footerLogoSize: { width: 560, height: 163 },

  // ── Pages légales ─────────────────────────────────────────────────────
  // Activité décrite dans les conditions générales.
  activity:
    'la vente en ligne de produits achetés en France et leur livraison au Sénégal',
  // Règles de confidentialité de l'application mobile, si elles sont publiées
  // sur ce site (laisser vide sinon).
  appPrivacyUrl: '',
};
