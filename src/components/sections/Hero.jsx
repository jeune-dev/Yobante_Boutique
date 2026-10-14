// Hero — identique sur YOBANTÉ Boutique et YOBANTÉ REK.
// Textes, icônes et thème (fond du visuel) viennent de src/data/content.js.
// Le visuel est servi depuis public/images/hero-visuel.webp (préchargé dans index.html).
import { ArrowRight } from 'lucide-react';
import { hero } from '../../data/content';

const HERO_IMAGE = '/images/hero-visuel.webp';
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

const Hero = ({ scrollTo }) => {
  const { badge, primary, secondary } = hero;
  const BadgeIcon = badge.icon;
  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary.icon;

  return (
    <section id="hero" className={`hero hero--${hero.theme}`} style={{ '--hero-bg': hero.background }}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-badge">
              <BadgeIcon size={14} strokeWidth={2.2} aria-hidden="true" />
              {badge.label}
            </p>

            <h1 className="hero-title">
              {hero.title.map(({ text, accent }) => (
                <span key={text} className={accent ? 'hero-accent' : undefined}>{text}</span>
              ))}
            </h1>

            <p className="hero-sub">{hero.text}</p>

            <div className="hero-actions">
              <button type="button" className="hero-btn hero-btn-primary" onClick={() => scrollTo(primary.target)}>
                <PrimaryIcon size={16} strokeWidth={2.2} aria-hidden="true" />
                {primary.label}
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </button>
              <button type="button" className="hero-btn hero-btn-outline" onClick={() => scrollTo(secondary.target)}>
                <SecondaryIcon size={16} strokeWidth={2} aria-hidden="true" />
                {secondary.label}
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
              src={HERO_IMAGE}
              alt={hero.image.alt}
              width="1400"
              height="955"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>

        <ul className="hero-features" style={{ '--count': hero.features.length }}>
          {hero.features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="hero-feature">
              <span className="hero-feature-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
              <span><strong>{title}</strong><span>{text}</span></span>
            </li>
          ))}
        </ul>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          /* Thème « dark » : visuel sur fond bleu. */
          --hero-text: #fff;
          --hero-text-soft: rgba(255, 255, 255, 0.86);
          --hero-line: rgba(255, 255, 255, 0.16);
          --hero-outline: rgba(255, 255, 255, 0.6);
          --hero-outline-hover: rgba(255, 255, 255, 0.08);
          --hero-feature-bg: rgba(246, 197, 55, 0.14);
          --hero-feature-icon: var(--gold);

          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: min(calc(100vh - var(--nav-h)), 820px);
          min-height: min(calc(100svh - var(--nav-h)), 820px);
          margin-top: var(--nav-h);
          scroll-margin-top: var(--nav-h);
          overflow: hidden;
          background: var(--hero-bg);
          color: var(--hero-text);
        }
        /* Thème « light » : visuel sur fond blanc. */
        .hero--light {
          --hero-text: var(--blue);
          --hero-text-soft: var(--text-mid);
          --hero-line: var(--border);
          --hero-outline: var(--blue);
          --hero-outline-hover: var(--blue-50);
          --hero-feature-bg: var(--gold-50);
          --hero-feature-icon: var(--blue);
        }

        .hero-container {
          width: 100%;
          max-width: var(--container-max);
          margin-inline: auto;
          padding: clamp(28px, 3.5vw, 48px) var(--gutter) clamp(28px, 3vw, 40px);
        }

        .hero-content {
          display: flex;
          align-items: center;
          min-height: clamp(400px, 38vw, 520px);
        }

        .hero-text {
          position: relative;
          z-index: 2;
          display: flex;
          flex: 0 0 50%;
          flex-direction: column;
          justify-content: center;
          max-width: 540px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-bottom: 20px;
          padding: 6px 13px;
          border-radius: 999px;
          background: var(--gold);
          color: var(--blue);
          font-size: 12.5px;
          font-weight: 700;
        }

        .hero-title {
          margin-bottom: 20px;
          color: var(--hero-text);
          font-size: clamp(38px, 4.2vw, 60px);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.035em;
        }
        .hero-title span { display: block; }
        .hero-title .hero-accent { color: var(--gold); }
        .hero--light .hero-title .hero-accent { color: var(--gold-dark); }

        .hero-sub {
          max-width: 440px;
          margin-bottom: 26px;
          color: var(--hero-text-soft);
          font-size: 16px;
          line-height: 1.6;
        }

        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 18px; }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s var(--ease);
        }
        .hero-btn-primary { border: 0; background: var(--gold); color: var(--blue); }
        .hero-btn-primary:hover { background: #F8D255; transform: translateY(-1px); }
        .hero-btn-outline { border: 1.5px solid var(--hero-outline); background: transparent; color: var(--hero-text); }
        .hero-btn-outline:hover { background: var(--hero-outline-hover); }

        .store-buttons { display: flex; flex-wrap: wrap; gap: 10px; }
        .store-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-width: 144px;
          min-height: 46px;
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

        /* Visuel : à droite du texte, jusqu'au bord de l'écran, bords fondus dans le fond. */
        .hero-image img {
          display: block;
          width: 100%;
          height: auto;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%), linear-gradient(to right, transparent 0%, #000 10%);
          -webkit-mask-composite: source-in;
          mask-image: linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%), linear-gradient(to right, transparent 0%, #000 10%);
          mask-composite: intersect;
        }
        @media (min-width: 1025px) {
          .hero-image {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 46%;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            pointer-events: none;
          }
          .hero-image img { width: auto; max-width: 100%; max-height: min(100%, 720px); }
        }

        .hero-features {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(var(--count), minmax(0, 1fr));
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--hero-line);
          list-style: none;
        }
        .hero-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 20px;
          border-left: 1px solid var(--hero-line);
          color: var(--hero-text);
        }
        .hero-feature:first-child { padding-left: 0; border-left: 0; }
        .hero-feature-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--hero-feature-bg);
          color: var(--hero-feature-icon);
        }
        .hero-feature strong { display: block; font-size: 14px; font-weight: 700; }
        .hero-feature strong + span { display: block; margin-top: 2px; font-size: 12.5px; opacity: 0.75; }

        @media (max-width: 1024px) {
          .hero { min-height: auto; }
          .hero-content { flex-direction: column; gap: 28px; min-height: 0; text-align: center; }
          .hero-text { flex: none; align-items: center; max-width: 600px; }
          .hero-sub { margin-inline: auto; }
          .hero-actions, .store-buttons { justify-content: center; }
          .hero-image { width: 100%; max-width: 640px; margin-inline: auto; }
          .hero-image img {
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%), linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
            mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%), linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
          }
          .hero-features { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 0; text-align: left; }
          .hero-feature:nth-child(odd) { padding-left: 0; border-left: 0; }
          .hero-feature:last-child:nth-child(odd) { grid-column: 1 / -1; justify-content: center; }
        }

        @media (max-width: 520px) {
          .hero-title { font-size: 36px; line-height: 1.06; }
          .hero-actions, .store-buttons { flex-direction: column; width: 100%; max-width: 340px; }
          .hero-btn, .store-btn { width: 100%; }
          .store-btn { justify-content: center; min-height: 52px; }
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
};

export default Hero;
