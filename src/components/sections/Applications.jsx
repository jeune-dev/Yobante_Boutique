// Section Applications — identique sur les deux sites ; le contenu vient de src/data/content.js.
// Bande jaune de la marque : le téléphone (image détourée) se loge dans l'arc du logo.
import { apps } from '../../data/content';

const ChipIcon = apps.chip.icon;

const openStore = (url) => window.open(url, '_blank', 'noopener,noreferrer');

/* Arc du logo, en grand : le téléphone se loge dans son creux, comme le carré jaune du logo */
const BrandArc = () => (
  <svg className="apps-stage" viewBox="0 0 218 240" aria-hidden="true">
    <path d="M0 0h108a110 120 0 0 0 110 120v120A228 240 0 0 1 0 0z" />
  </svg>
);

const Applications = () => (
  <section id="apps" className="apps-section">
    <div className="container">
      <div id={apps.anchorId} className="apps-grid">
        <div className="apps-visual">
          <BrandArc />
          <img
            src={apps.image.src}
            alt={apps.image.alt}
            width={apps.image.width}
            height={apps.image.height}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="apps-content">
          <p className="apps-chip">
            <ChipIcon size={15} strokeWidth={2} aria-hidden="true" />
            {apps.chip.label}
          </p>

          <h2 className="featured-title">
            {apps.title} <span>{apps.titleAccent}</span>
          </h2>

          <p className="apps-desc">{apps.text}</p>

          <ul className="featured-features">
            {apps.features.map(({ icon: Icon, title, text }) => (
              <li className="featured-feature" key={title}>
                <span className="featured-feature-icon"><Icon size={20} strokeWidth={2} aria-hidden="true" /></span>
                <strong>{title}</strong>
                <small>{text}</small>
              </li>
            ))}
          </ul>

          <div className="download-buttons">
            <button type="button" className="download-btn" onClick={() => openStore(apps.appStoreUrl)}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22c-1.31,0.05-1.73,-0.75-3.23,-0.75c-1.49,0-1.96,0.73,-3.22,0.78c-1.33,0.05-2.29,-1.32-3.13,-2.53C4.37,17.18 3.05,12.35 4.81,9.31c0.88,-1.52 2.45,-2.48 4.16,-2.51c1.3,-0.02 2.53,0.88 3.32,0.88c0.79,0 2.27,-1.07 3.82,-0.91c0.65,0.03 2.47,0.26 3.64,1.98c-0.09,0.06 -2.17,1.28 -2.15,3.81c0.03,3.02 2.65,4.03 2.68,4.04c-0.03,0.07 -0.42,1.44 -1.38,2.83M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1c-1.09,0.04 -2.41,0.72 -3.19,1.63c-0.67,0.77 -1.25,1.88 -1.09,3.14c1.21,0.09 2.47,-0.6 3.3,-1.6" />
              </svg>
              <span><small>Télécharger sur</small><strong>App Store</strong></span>
            </button>
            <button type="button" className="download-btn" onClick={() => openStore(apps.playStoreUrl)}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="21" height="21" aria-hidden="true">
                <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z" />
              </svg>
              <span><small>Disponible sur</small><strong>Google Play</strong></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .apps-section {
        /* Réglages propres à la section : police des titres (Outfit), tailles et marges. */
        --apps-display: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        --apps-h2: clamp(30px, 3.3vw, 44px);
        --apps-lead: clamp(16px, 1.25vw, 18px);
        --apps-y: clamp(64px, 8vw, 104px);

        position: relative;
        padding: var(--apps-y) 0;
        overflow: hidden;
        background: var(--gold);
        color: var(--blue-deep);
        scroll-margin-top: var(--nav-h);
      }

      .apps-grid {
        display: grid;
        grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
        align-items: center;
        gap: clamp(32px, 6vw, 88px);
      }

      .apps-visual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        min-height: clamp(440px, 44vw, 600px);
      }
      .apps-stage {
        position: absolute;
        left: 0;
        bottom: 4%;
        width: auto;
        height: 74%;
        max-width: none;
        fill: var(--blue);
      }
      .apps-visual img {
        position: relative;
        display: block;
        width: auto;
        max-width: 66%;
        max-height: clamp(420px, 42vw, 580px);
        height: auto;
        margin-right: 4%;
        transform: rotate(3deg);
      }

      .apps-chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        width: fit-content;
        margin-bottom: 22px;
        padding: 7px 14px;
        border: 1.5px solid var(--blue);
        border-radius: 999px;
        color: var(--blue);
        font-size: 13.5px;
        font-weight: 700;
      }

      .featured-title {
        margin-bottom: 20px;
        color: var(--blue);
        font-family: var(--apps-display);
        font-size: var(--apps-h2);
        font-weight: 800;
        line-height: 1.02;
        letter-spacing: -0.03em;
      }
      .featured-title span { display: block; }

      .apps-desc {
        max-width: 540px;
        margin-bottom: 32px;
        color: var(--blue-deep);
        font-size: var(--apps-lead);
        line-height: 1.6;
      }

      .featured-features {
        display: grid;
        gap: 14px;
        max-width: 520px;
        margin-bottom: 36px;
        list-style: none;
      }
      .featured-feature {
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr);
        align-items: center;
        column-gap: 16px;
        row-gap: 1px;
      }
      .featured-feature-icon {
        display: grid;
        grid-row: span 2;
        place-items: center;
        width: 44px;
        height: 44px;
        background: var(--blue);
        color: var(--gold);
      }
      .featured-feature strong { align-self: end; color: var(--blue); font-family: var(--apps-display); font-size: 18px; font-weight: 600; line-height: 1.2; }
      .featured-feature small { align-self: start; color: var(--blue-deep); font-size: 14.5px; line-height: 1.4; }

      .download-buttons { display: flex; flex-wrap: wrap; gap: 12px; }
      .download-btn {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        min-width: 190px;
        min-height: 58px;
        padding: 8px 22px 8px 18px;
        border: 0;
        border-radius: 14px;
        background: #000;
        color: #fff;
        text-align: left;
        cursor: pointer;
        transition: transform 0.2s var(--ease), background 0.2s ease;
      }
      .download-btn:hover { transform: translateY(-2px); background: #1c1c1c; }
      .download-btn span { display: flex; flex-direction: column; line-height: 1.1; }
      .download-btn small { font-size: 11px; opacity: 0.8; }
      .download-btn strong { font-size: 17px; font-weight: 700; }
      .apps-section :focus-visible { outline-color: var(--blue); }

      @media (max-width: 860px) {
        .apps-grid { grid-template-columns: 1fr; gap: 28px; }
        .apps-visual { justify-content: center; width: min(100%, 440px); min-height: 0; margin-inline: auto; padding: 8px 0; }
        .apps-stage { left: 2%; bottom: 2%; height: 72%; }
        .apps-visual img { max-width: 60%; max-height: 420px; margin-right: 0; transform: translateX(16%) rotate(3deg); }
      }

      @media (max-width: 480px) {
        .apps-visual img { max-height: 340px; }
        .download-buttons { flex-direction: column; }
        .download-btn { width: 100%; justify-content: center; }
        .featured-feature strong { font-size: 17px; }
      }
    ` }} />
  </section>
);

export default Applications;
