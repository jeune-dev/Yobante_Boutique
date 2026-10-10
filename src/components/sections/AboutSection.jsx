import { ArrowLeftRight } from 'lucide-react';

const FlagFR = () => (
  <svg className="about-flag" viewBox="0 0 3 2" aria-hidden="true">
    <rect width="1" height="2" fill="#002395" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#ED2939" />
  </svg>
);

const FlagSN = () => (
  <svg className="about-flag" viewBox="0 0 3 2" aria-hidden="true">
    <rect width="1" height="2" fill="#00853F" />
    <rect x="1" width="1" height="2" fill="#FDEF42" />
    <rect x="2" width="1" height="2" fill="#E31B23" />
    <path d="M1.5 0.62l0.11 0.34h0.36l-0.29 0.21 0.11 0.34-0.29-0.21-0.29 0.21 0.11-0.34-0.29-0.21h0.36z" fill="#00853F" />
  </svg>
);

/* Pictogramme de la marque, en filigrane */
const BrandMark = () => (
  <svg className="about-mark" viewBox="0 0 334 400" aria-hidden="true">
    <path d="M0 0h108a110 120 0 0 0 110 120v120A228 240 0 0 1 0 0z" fill="currentColor" />
    <rect className="about-mark-gold" x="228" y="0" width="106" height="116" />
    <rect x="228" y="284" width="106" height="116" fill="currentColor" />
  </svg>
);

const AboutSection = () => (
  <section id="about" className="about-section">
    <BrandMark />

    <div className="container">
      <div className="about-header sr">
        <p className="sec-eyebrow about-eyebrow">À propos</p>
        <h2 className="about-title">Qui sommes-nous ?</h2>

        <p className="about-description">
          YOBANTÉ Boutique facilite vos achats en France et leur livraison au Sénégal grâce à une
          sélection de produits fiables, accessibles et authentiques.
        </p>

        <div className="about-badges">
          <span className="about-badge"><FlagFR />France</span>
          <span className="about-badge-arrow"><ArrowLeftRight size={18} strokeWidth={2.2} aria-hidden="true" /></span>
          <span className="about-badge"><FlagSN />Sénégal</span>
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .about-section {
        position: relative;
        padding: var(--section-y) 0;
        overflow: hidden;
        background: var(--blue);
        color: #fff;
      }

      .about-mark {
        position: absolute;
        top: 50%;
        right: max(var(--gutter), calc((100vw - var(--container-max)) / 2 + var(--gutter)));
        width: clamp(140px, 17vw, 220px);
        height: auto;
        color: rgba(255, 255, 255, 0.16);
        transform: translateY(-50%);
        pointer-events: none;
      }
      .about-mark-gold { fill: var(--gold); }

      .about-header { position: relative; max-width: 720px; }

      .about-eyebrow { color: var(--gold); }

      .about-title {
        margin-bottom: 24px;
        color: #fff;
        font-size: var(--fs-h2);
        font-weight: 800;
        line-height: 1.1;
      }

      .about-description {
        margin-bottom: 32px;
        color: rgba(255, 255, 255, 0.82);
        font-size: 17px;
        line-height: 1.8;
      }

      .about-badges { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
      .about-badge {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 18px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        font-size: 15px;
        font-weight: 600;
      }
      .about-flag { width: 22px; height: 15px; border-radius: 3px; box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25); }
      .about-badge-arrow { display: grid; place-items: center; color: var(--gold); }

      @media (max-width: 860px) {
        .about-mark { display: none; }
      }

      @media (max-width: 520px) {
        .about-description { font-size: 15px; }
        .about-badge { padding: 8px 14px; font-size: 14px; }
      }
    ` }} />
  </section>
);

export default AboutSection;
