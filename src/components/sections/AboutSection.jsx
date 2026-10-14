// Section « Qui sommes-nous ? » — identique sur YOBANTÉ Boutique et YOBANTÉ REK.
// Le texte vient de src/data/site.js.
import { ArrowLeftRight } from 'lucide-react';
import { site } from '../../data/site';

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
  <section id="about" className="about-section yb-block">
    <BrandMark />

    <div className="container">
      <div className="about-header sr">
        <p className="yb-eyebrow about-eyebrow">À propos</p>
        <h2 className="about-title">Qui sommes-nous ?</h2>

        <p className="about-description">{site.about}</p>

        <div className="about-badges">
          <span className="about-badge"><FlagFR />France</span>
          <span className="about-badge-arrow"><ArrowLeftRight size={18} strokeWidth={2.2} aria-hidden="true" /></span>
          <span className="about-badge"><FlagSN />Sénégal</span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
