// Contenu des sections de YOBANTÉ Boutique.
// Les composants sont identiques sur YOBANTÉ Boutique et YOBANTÉ REK :
// seul ce fichier (avec site.js) change d'un site à l'autre.

import {
  Apple, ArrowRight, Baby, BadgeCheck, Coffee, Cookie, Droplets, Dumbbell, Egg, Fish, FlaskConical,
  Gamepad2, GlassWater, Headphones, Home, Laptop, Lock, MapPin, MessageCircle, Package, PawPrint, Search,
  ShieldCheck, Shirt, ShoppingBag, ShoppingBasket, ShoppingCart, Smartphone, Snowflake, SprayCan, Tag, Truck,
  Tv, UtensilsCrossed, WashingMachine, Wheat, Zap,
} from 'lucide-react';
import navLogo from '../assets/images/logo-nav.webp';
import promoLogo from '../assets/images/Logo Yobante Boutique.webp';
import appPreview from '../assets/images/maquette-app-store-boutique.webp';

export const navbar = {
  logo: navLogo,
  logoSize: { width: 560, height: 163 },
};

export const hero = {
  // 'dark' : visuel sur fond bleu (texte blanc) ; 'light' : visuel sur fond blanc.
  theme: 'dark',
  background: '#0148C7', // couleur du fond du visuel, pour un raccord invisible
  badge: { icon: ShoppingCart, label: 'Boutique officielle sur mobile' },
  title: [
    { text: 'Vos grandes' },
    { text: 'marques,' },
    { text: 'à prix réduits.', accent: true },
  ],
  text: "Retrouvez vos produits préférés, découvrez nos offres exclusives et commandez facilement depuis l'application YOBANTÉ.",
  primary: { icon: ShoppingCart, label: 'Découvrir notre boutique', target: 'app-boutique' },
  secondary: { icon: Smartphone, label: "Télécharger l'application", target: 'apps' },
  image: { alt: 'Application YOBANTÉ Boutique et produits high-tech' },
  features: [
    { icon: BadgeCheck, title: 'Produits de marque', text: 'Les meilleures marques au meilleur prix' },
    { icon: Truck, title: 'Livraison rapide', text: 'Partout au Sénégal' },
    { icon: ShieldCheck, title: 'Paiement sécurisé', text: 'En toute confiance' },
    { icon: Headphones, title: 'Service client', text: 'Toujours à votre écoute' },
  ],
};

export const trust = [
  { icon: Truck, text: 'Livraison France ↔ Sénégal' },
  { icon: MessageCircle, text: 'Support en ligne' },
  { icon: Lock, text: 'Paiement 100% sécurisé' },
  { icon: Smartphone, text: 'Application iOS & Android' },
  { icon: Zap, text: 'Expédition rapide' },
];

export const services = {
  cardId: 'app-boutique',
  promo: {
    logo: promoLogo,
    alt: 'Yobanté Boutique',
    text: 'Achetez vos produits préférés à prix discount',
    button: { label: 'Explorer nos rayons', target: 'rayons' },
  },
  icon: ShoppingBag,
  title: 'Yobanté Boutique',
  blocks: [
    {
      type: 'tiles',
      label: 'Nos rayons',
      items: [
        { icon: Tag, label: 'Promotions', text: 'Offres du moment et produits à prix réduits.' },
        { icon: MapPin, label: 'Produits Locaux', text: 'Produits fabriqués ou cultivés au Sénégal et dans la région.' },
        { icon: Coffee, label: 'Cafés', text: 'Cafés, grains, boissons chaudes et accessoires associés.' },
        { icon: Shirt, label: 'Mode Locale', text: 'Vêtements et créations inspirés des styles locaux.' },
        { icon: UtensilsCrossed, label: 'Traiteur', text: 'Plats préparés, spécialités et produits traiteur.' },
        { icon: Home, label: 'Mobilier & Déco', text: 'Meubles et objets pour aménager et décorer votre intérieur.' },
        { icon: Apple, label: 'Fruits & Légumes', text: 'Fruits et légumes frais pour vos repas du quotidien.' },
        { icon: Fish, label: 'Viande & Poissons', text: 'Viandes, poissons et produits de la mer.' },
        { icon: Egg, label: 'Crèmerie & Laitiers', text: 'Lait, fromages, yaourts et autres produits laitiers.' },
        { icon: UtensilsCrossed, label: 'Charcuterie', text: 'Sélection de charcuteries et produits salés à partager.' },
        { icon: Snowflake, label: 'Surgelés', text: 'Produits surgelés à conserver et préparer facilement.' },
        { icon: Baby, label: 'Bébé', text: 'Essentiels, soins et accessoires pour les tout-petits.' },
        { icon: Cookie, label: 'Épicerie Sucrée', text: 'Biscuits, confiseries, chocolat et douceurs.' },
        { icon: FlaskConical, label: 'Épicerie Salée', text: 'Ingrédients, conserves et produits salés pour cuisiner.' },
        { icon: GlassWater, label: 'Boissons', text: 'Eaux, jus et boissons pour toutes les occasions.' },
        { icon: Wheat, label: 'Pains & Pâtisserie', text: 'Pains, viennoiseries et pâtisseries à déguster.' },
        { icon: SprayCan, label: 'Entretien & Nettoyage', text: 'Produits et accessoires pour entretenir votre maison.' },
        { icon: Droplets, label: 'Hygiène & Beauté', text: 'Soins, hygiène personnelle et produits de beauté.' },
        { icon: PawPrint, label: 'Animalerie', text: 'Alimentation et accessoires pour vos animaux.' },
        { icon: Gamepad2, label: 'Jeux Vidéo', text: 'Jeux, consoles et accessoires de divertissement.' },
        { icon: Smartphone, label: 'Smartphones & Connectés', text: 'Téléphones, objets connectés et accessoires mobiles.' },
        { icon: Laptop, label: 'Informatique & Bureau', text: 'Ordinateurs, périphériques et fournitures de bureau.' },
        { icon: Tv, label: 'Image & Son', text: 'Téléviseurs, équipements audio et accessoires multimédias.' },
        { icon: Dumbbell, label: 'Sport', text: 'Équipements et accessoires pour bouger et s’entraîner.' },
        { icon: ShoppingBag, label: 'Mode & Textile', text: 'Vêtements, chaussures et accessoires pour toute la famille.' },
      ],
    },
    {
      type: 'steps',
      label: 'Parcours client',
      items: [
        { title: 'Parcourez nos rayons et sélectionnez vos produits', text: '' },
        { title: 'Validez votre panier', text: 'Règlement possible par Orange Money, Wave ou carte bancaire.' },
        { title: 'Programmez vos livraisons', text: "Recevez directement votre commande à l'adresse de votre choix." },
      ],
    },
  ],
};

export const howItWorks = {
  id: 'comment-commander',
  eyebrow: 'Comment commander',
  title: 'Commander en 4 étapes',
  text: 'Faites vos achats en France et recevez vos produits au Sénégal, simplement.',
  steps: [
    { icon: Search, title: 'Parcourez le catalogue', text: 'Une sélection de produits authentiques, proposés à prix discount.' },
    { icon: ShoppingCart, title: 'Ajoutez au panier', text: "Commandez à l'unité ou en gros, selon vos besoins." },
    { icon: ShieldCheck, title: 'Payez en toute sécurité', text: 'Votre paiement est protégé, en toute confiance.' },
    { icon: Truck, title: 'Livraison au Sénégal', text: "Suivez votre commande jusqu'à sa destination." },
  ],
};

export const highlights = {
  id: 'rayons',
  eyebrow: 'Nos rayons',
  title: "Tout ce qu'il vous faut, au meilleur prix",
  text: 'Des grandes marques à prix réduits, livrées directement au Sénégal.',
  cards: [
    { icon: WashingMachine, title: 'Électroménager', text: 'Réfrigérateurs, micro-ondes, machines à laver et appareils du quotidien.' },
    { icon: Laptop, title: 'Informatique', text: 'Ordinateurs portables et accessoires pour le travail et les études.' },
    { icon: Headphones, title: 'High-Tech & audio', text: 'Écouteurs, téléphones et équipements connectés des grandes marques.' },
    { icon: ShoppingBasket, title: 'Lessives & grande consommation', text: "Lessives, produits d'entretien et produits du quotidien, y compris en gros." },
  ],
  cta: { label: "Découvrir l'application", href: '#apps', icon: ArrowRight },
};

export const apps = {
  image: { src: appPreview, width: 1230, height: 1278, alt: 'Application Yobante Boutique et catalogue de produits' },
  chip: { icon: ShoppingBag, label: 'Boutique en ligne' },
  title: 'Téléchargez',
  titleAccent: 'Yobanté dès maintenant !',
  text: 'Achetez vos produits préférés à prix discount et faites-les livrer directement au Sénégal. Découvrez une sélection de produits authentiques et profitez d’une expérience d’achat simple et pratique.',
  features: [
    { icon: ShieldCheck, title: 'Produits authentiques', text: 'Une sélection de produits de qualité.' },
    { icon: Package, title: 'Achats en gros', text: 'Des offres adaptées aux commandes en volume.' },
    { icon: Truck, title: 'Livraison au Sénégal', text: "Suivez votre commande jusqu'à destination." },
  ],
  appStoreUrl: 'https://apps.apple.com',
  playStoreUrl: 'https://play.google.com',
};

export const faq = [
  { q: 'Quels produits puis-je commander ?', a: "YOBANTÉ Boutique propose des produits alimentaires, de mode, de maison, d'électronique, d'hygiène et de sport selon les disponibilités du catalogue." },
  { q: 'Comment passer une commande ?', a: 'Sélectionnez vos produits, validez votre panier puis choisissez votre mode de paiement et votre adresse de livraison.' },
  { q: 'Quels sont les moyens de paiement acceptés ?', a: 'Le paiement peut être effectué avec Orange Money, Wave ou carte bancaire.' },
];
