// Données propres à ce site : tout ce qui change d'un site à l'autre est ici,
// les specs restent identiques.
export const site = {
  name: 'YOBANTÉ Boutique',
  title: 'YOBANTÉ Boutique | Vos achats livrés au Sénégal',
  h1: /Vos grandes/,
  domain: 'https://yobante-boutique.com',
  source: 'boutique',
  subject: 'Autres',
  // Visuel du Hero préchargé dans index.html (élément LCP) ; null si aucun.
  heroPreload: null,
  // Sections de la page, dans l'ordre d'affichage.
  sections: ['hero', 'services', 'comment-commander', 'rayons', 'apps', 'faq', 'contact', 'about'],
  // Entrées du menu principal.
  nav: [
    { label: 'Services', id: 'services' },
    { label: 'Applications', id: 'apps' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
    { label: 'Qui sommes-nous ?', id: 'about' },
  ],
  // Boutons d'appel à l'action du Hero et section qu'ils doivent afficher.
  heroCtas: [
    { name: /Découvrir notre boutique/, target: 'app-boutique' },
    { name: /Télécharger l.application/, target: 'apps' },
  ],
  // Exclusions axe documentées : problèmes connus et assumés, JAMAIS des erreurs masquées.
  // Le jaune de la marque sur fond blanc (« Yobanté dès maintenant ! », version mobile) est sous
  // les 3:1 requis pour un grand texte : décision de design en attente du propriétaire du site.
  axeExclude: ['.featured-title > span'],
};
