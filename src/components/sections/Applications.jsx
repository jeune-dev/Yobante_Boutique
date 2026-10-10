import { Package, ShoppingBag, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import appPreview from '../../assets/images/maquette-app-store-boutique.webp';

const APP_STORE_URL = 'https://apps.apple.com';
const PLAY_STORE_URL = 'https://play.google.com';

const FEATURES = [
  { icon: ShieldCheck, title: 'Produits authentiques', description: 'Une sélection de produits de qualité.' },
  { icon: Package, title: 'Achats en gros', description: 'Des offres adaptées aux commandes en volume.' },
  { icon: Truck, title: 'Livraison au Sénégal', description: "Suivez votre commande jusqu'à destination." },
];

const openStore = (url) => window.open(url, '_blank', 'noopener,noreferrer');

const Applications = () => (
  <section id="apps" className="apps-section">
    <div className="container">
      <div className="apps-grid">
        <div className="apps-visual sr-l">
          <img
            src={appPreview}
            alt="Application Yobante Boutique et catalogue de produits"
            width="1230"
            height="1278"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="apps-content sr-r">
          <p className="apps-chip">
            <ShoppingBag size={14} strokeWidth={2} aria-hidden="true" />
            Boutique en ligne
          </p>

          <h2 className="featured-title">
            Téléchargez <span>Yobanté dès maintenant !</span>
          </h2>

          <p className="apps-desc">
            Achetez vos produits préférés à prix discount et faites-les livrer directement au Sénégal.
            Découvrez une sélection de produits authentiques et profitez d’une expérience d’achat simple et pratique.
          </p>

          <ul className="featured-features">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li className="featured-feature" key={title}>
                <span className="featured-feature-icon"><Icon size={21} strokeWidth={2} aria-hidden="true" /></span>
                <strong>{title}</strong>
                <small>{description}</small>
              </li>
            ))}
          </ul>

          <div className="download-buttons">
            <button type="button" className="download-btn" onClick={() => openStore(APP_STORE_URL)}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22c-1.31,0.05-1.73,-0.75-3.23,-0.75c-1.49,0-1.96,0.73,-3.22,0.78c-1.33,0.05-2.29,-1.32-3.13,-2.53C4.37,17.18 3.05,12.35 4.81,9.31c0.88,-1.52 2.45,-2.48 4.16,-2.51c1.3,-0.02 2.53,0.88 3.32,0.88c0.79,0 2.27,-1.07 3.82,-0.91c0.65,0.03 2.47,0.26 3.64,1.98c-0.09,0.06 -2.17,1.28 -2.15,3.81c0.03,3.02 2.65,4.03 2.68,4.04c-0.03,0.07 -0.42,1.44 -1.38,2.83M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1c-1.09,0.04 -2.41,0.72 -3.19,1.63c-0.67,0.77 -1.25,1.88 -1.09,3.14c1.21,0.09 2.47,-0.6 3.3,-1.6" />
              </svg>
              <span><small>Télécharger sur</small><strong>App Store</strong></span>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            <button type="button" className="download-btn" onClick={() => openStore(PLAY_STORE_URL)}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z" />
              </svg>
              <span><small>Disponible sur</small><strong>Google Play</strong></span>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .apps-section {
        position: relative;
        padding: var(--section-y) 0;
        overflow: hidden;
        background: var(--white);
        scroll-margin-top: var(--nav-h);
      }

      .apps-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
        align-items: center;
        gap: clamp(32px, 5vw, 72px);
      }

      .apps-visual { display: flex; justify-content: center; }
      .apps-visual img { display: block; width: 100%; max-width: 520px; height: auto; }

      .apps-chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        width: fit-content;
        margin-bottom: 20px;
        padding: 7px 14px;
        border-radius: 999px;
        background: var(--gold-50);
        box-shadow: inset 0 0 0 1px var(--gold-100);
        color: #7A5A00;
        font-size: 13px;
        font-weight: 700;
      }

      .featured-title {
        margin-bottom: 20px;
        color: var(--blue);
        font-size: clamp(34px, 2.7vw, 46px);
        font-weight: 800;
        line-height: 1.08;
      }
      .featured-title span { display: block; color: var(--gold); }

      .apps-desc {
        max-width: 580px;
        margin-bottom: 32px;
        color: #0B3270;
        font-size: clamp(15px, 1.35vw, 19px);
        line-height: 1.5;
      }

      .featured-features {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
        margin-bottom: 36px;
        list-style: none;
      }
      .featured-feature { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; }
      .featured-feature-icon {
        display: grid;
        place-items: center;
        width: 52px;
        height: 52px;
        margin-bottom: 2px;
        border-radius: 50%;
        background: #F8D255;
        color: var(--blue);
      }
      .featured-feature strong { color: var(--blue); font-size: 14px; font-weight: 800; line-height: 1.2; }
      .featured-feature small { max-width: 170px; color: #5A6B85; font-size: 13px; line-height: 1.35; }

      .download-buttons { display: flex; gap: 12px; max-width: 560px; }
      .download-btn {
        display: inline-flex;
        flex: 1;
        align-items: center;
        gap: 12px;
        min-height: 62px;
        padding: 8px 18px;
        border: 0;
        border-radius: 14px;
        background: #000;
        color: #fff;
        text-align: left;
        cursor: pointer;
        transition: transform 0.2s var(--ease), background 0.2s ease;
      }
      .download-btn:hover { transform: translateY(-2px); background: #1a1a1a; }
      .download-btn span { display: flex; flex-direction: column; line-height: 1.1; }
      .download-btn small { font-size: 10.5px; opacity: 0.8; }
      .download-btn strong { font-size: 17px; font-weight: 700; }
      .download-btn > svg:last-child { margin-left: auto; opacity: 0.7; }

      @media (max-width: 1024px) {
        .featured-features { grid-template-columns: 1fr; gap: 14px; }
        .featured-feature { display: grid; grid-template-columns: 46px minmax(0, 1fr); align-items: center; column-gap: 14px; row-gap: 2px; }
        .featured-feature-icon { grid-row: span 2; width: 42px; height: 42px; margin: 0; }
        .featured-feature small { max-width: none; }
      }

      @media (max-width: 860px) {
        .apps-grid { grid-template-columns: 1fr; }
        .apps-visual img { max-width: 420px; }
      }

      @media (max-width: 420px) {
        .download-buttons { flex-direction: column; }
        .download-btn { min-height: 58px; }
      }
    ` }} />
  </section>
);

export default Applications;
