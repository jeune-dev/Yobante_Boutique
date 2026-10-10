import { ArrowRight, ShoppingCart, Smartphone, ShieldCheck, Truck, Headphones, BadgeCheck } from 'lucide-react';
import heroBanner from '../../assets/images/banniere-hero-boutique.webp';

const APP_STORE_URL = 'https://apps.apple.com';
const PLAY_STORE_URL = 'https://play.google.com';

const AppStoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z" />
  </svg>
);

const FEATURES = [
  { icon: BadgeCheck, title: 'Produits de marque', text: 'Les meilleures marques au meilleur prix' },
  { icon: Truck, title: 'Livraison rapide', text: 'Partout au Sénégal' },
  { icon: ShieldCheck, title: 'Paiement sécurisé', text: 'En toute confiance' },
  { icon: Headphones, title: 'Service client', text: 'Toujours à votre écoute' },
];

const Hero = ({ scrollTo }) => (
  <section id="hero" className="hero">
    <div className="hero-banner-bg" style={{ backgroundImage: `url(${heroBanner})` }} aria-hidden="true" />

    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-badge">
            <ShoppingCart size={14} strokeWidth={2.2} aria-hidden="true" />
            Boutique officielle sur mobile
          </p>

          <h1 className="hero-title">
            <span>Vos grandes</span>
            <span>marques,</span>
            <span className="hero-accent">à prix réduits.</span>
          </h1>

          <p className="hero-sub">
            Retrouvez vos produits préférés, découvrez nos offres exclusives et
            commandez facilement depuis l'application YOBANTE.
          </p>

          <div className="hero-actions">
            <button type="button" className="hero-btn hero-btn-primary" onClick={() => scrollTo('app-boutique')}>
              <ShoppingCart size={16} strokeWidth={2.2} aria-hidden="true" />
              Découvrir notre boutique
              <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button type="button" className="hero-btn hero-btn-outline" onClick={() => scrollTo('apps')}>
              <Smartphone size={16} strokeWidth={2} aria-hidden="true" />
              Télécharger l'application
            </button>
          </div>

          <div className="store-buttons">
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">
              <AppStoreIcon />
              <span className="store-text"><small>Télécharger sur</small><strong>App Store</strong></span>
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">
              <PlayStoreIcon />
              <span className="store-text"><small>Disponible sur</small><strong>Google Play</strong></span>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroBanner}
            alt="Application YOBANTÉ Boutique et produits high-tech"
            width="1621"
            height="970"
            decoding="async"
          />
        </div>
      </div>

      <ul className="hero-features">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <li key={title} className="hero-feature">
            <span className="hero-feature-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
            <span><strong>{title}</strong><span>{text}</span></span>
          </li>
        ))}
      </ul>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .hero {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: calc(100vh - var(--nav-h));
        min-height: calc(100svh - var(--nav-h));
        margin-top: var(--nav-h);
        scroll-margin-top: var(--nav-h);
        overflow: hidden;
        background: linear-gradient(90deg, #063A91 0%, #0A45A1 60%, #0B49A6 100%);
      }

      /* La moitié gauche de la bannière est un aplat bleu : le texte s'y pose. */
      .hero-banner-bg {
        position: absolute;
        top: 50%;
        right: 0;
        height: 90%;
        aspect-ratio: 1621 / 970;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: translateY(-50%);
        -webkit-mask-image: linear-gradient(to right, transparent, #000 18%), linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent);
        -webkit-mask-composite: source-in;
        mask-image: linear-gradient(to right, transparent, #000 18%), linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent);
        mask-composite: intersect;
      }

      .hero-container {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 1400px;
        padding: clamp(32px, 4vw, 56px) clamp(var(--gutter), 3vw, 40px) clamp(36px, 4vw, 48px);
      }

      .hero-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }

      .hero-text {
        display: flex;
        flex: 0 0 46%;
        flex-direction: column;
        justify-content: center;
        max-width: 560px;
        min-height: 480px;
      }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        width: fit-content;
        margin-bottom: 24px;
        padding: 7px 14px;
        border-radius: 999px;
        background: var(--gold);
        color: var(--blue);
        font-size: 12.5px;
        font-weight: 700;
      }

      .hero-title {
        margin-bottom: 24px;
        color: #fff;
        font-size: clamp(48px, 5.4vw, 84px);
        font-weight: 800;
        line-height: 1;
        letter-spacing: -0.04em;
      }
      .hero-title span { display: block; }
      .hero-title .hero-accent { color: var(--gold); }

      .hero-sub {
        max-width: 440px;
        margin-bottom: 28px;
        color: rgba(255, 255, 255, 0.86);
        font-size: 16.5px;
        line-height: 1.6;
      }

      .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }

      .hero-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        min-height: 50px;
        padding: 0 24px;
        border-radius: 999px;
        font-size: 14.5px;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s var(--ease);
      }
      .hero-btn-primary { border: 0; background: var(--gold); color: var(--blue); }
      .hero-btn-primary:hover { background: #F8D255; transform: translateY(-1px); }
      .hero-btn-outline { border: 1.5px solid rgba(255, 255, 255, 0.6); background: transparent; color: #fff; }
      .hero-btn-outline:hover { border-color: #fff; background: rgba(255, 255, 255, 0.08); }

      .store-buttons { display: flex; flex-wrap: wrap; gap: 10px; }

      .store-btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-width: 150px;
        min-height: 48px;
        padding: 0 16px;
        border: 1px solid rgba(255, 255, 255, 0.28);
        border-radius: 12px;
        background: #000;
        color: #fff;
        text-decoration: none;
        transition: transform 0.2s var(--ease), border-color 0.2s ease;
      }
      .store-btn:hover { transform: translateY(-1px); border-color: rgba(255, 255, 255, 0.55); }
      .store-text { display: flex; flex-direction: column; line-height: 1.1; }
      .store-text small { font-size: 10px; opacity: 0.75; }
      .store-text strong { font-size: 15px; font-weight: 700; }

      .hero-image { display: none; }
      .hero-image img {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: 100% center;
        -webkit-mask-image: radial-gradient(ellipse 60% 58% at 55% 52%, #000 55%, transparent 100%);
        mask-image: radial-gradient(ellipse 60% 58% at 55% 52%, #000 55%, transparent 100%);
      }

      .hero-features {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 40px;
        padding-top: 28px;
        border-top: 1px solid rgba(255, 255, 255, 0.14);
        list-style: none;
      }
      .hero-feature {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 20px;
        border-left: 1px solid rgba(255, 255, 255, 0.14);
        color: #fff;
      }
      .hero-feature:first-child { padding-left: 0; border-left: 0; }
      .hero-feature-icon {
        display: grid;
        flex-shrink: 0;
        place-items: center;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background: rgba(246, 197, 55, 0.14);
        color: var(--gold);
      }
      .hero-feature strong { display: block; font-size: 14px; font-weight: 700; }
      .hero-feature strong + span { display: block; margin-top: 2px; font-size: 12.5px; opacity: 0.75; }

      @media (max-width: 1180px) {
        .hero { min-height: auto; }
        .hero-banner-bg { display: none; }
        .hero-content { flex-direction: column; gap: 36px; text-align: center; }
        .hero-text { align-items: center; max-width: 600px; min-height: 0; }
        .hero-title { font-size: clamp(36px, 3vw + 24px, 56px); }
        .hero-sub { margin-inline: auto; }
        .hero-actions, .store-buttons { justify-content: center; }
        .hero { background: #0A429D; }
        .hero-image { display: block; width: 100%; max-width: 600px; margin-inline: auto; }
        .hero-features { grid-template-columns: repeat(2, 1fr); gap: 20px 0; text-align: left; }
        .hero-feature:nth-child(3) { padding-left: 0; border-left: 0; }
      }

      @media (max-width: 520px) {
        .hero-title { line-height: 1.05; }
        .hero-actions, .store-buttons { flex-direction: column; width: 100%; max-width: 340px; }
        .hero-btn, .store-btn { width: 100%; }
        .store-btn { justify-content: center; min-height: 54px; }
        .hero-feature { gap: 10px; padding: 0 10px; }
        .hero-feature-icon { width: 36px; height: 36px; border-radius: 10px; }
        .hero-feature strong { font-size: 12.5px; }
        .hero-feature strong + span { display: none; }
      }

      @media (max-width: 380px) {
        .hero-badge { font-size: 11px; }
      }
    ` }} />
  </section>
);

export default Hero;
