// src/components/sections/Applications.jsx
import { Package, ShoppingBag, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import expeditionLogo from '../../assets/images/Logo Yobante Rek - fond blanc.webp';
import boutiqueLogo from '../../assets/images/Logo Yobante Boutique - Fond Blanc.webp';
import appli1 from '../../assets/images/Appli1.webp';
import appli2 from '../../assets/images/Appli2.png';
import appli3 from '../../assets/images/APPLI3.webp';

const appsData = [
  {
    id: "expedition",
    logo: expeditionLogo,
    alt: "Yobanté Expédition",
    chipIcon: <Package size={14} strokeWidth={1.8} />,
    chipText: "Expédition & Suivi",
    chipClass: "expedition",
    title: "YOBANTÉ Expédition",
    description: "Gérez vos envois entre la France et le Sénégal de manière rapide, sécurisée et transparente. Simulez votre envoi, payez en ligne et suivez chaque étape depuis une seule application.",
    features: [
      "Simulez votre envoi",
      "Payez en toute sécurité",
      "Suivez l'acheminement de votre envoi"
    ],
    iosUrl: "https://apps.apple.com",
    androidUrl: "https://play.google.com"
  },
  {
    id: "boutique",
    logo: boutiqueLogo,
    alt: "Yobanté Boutique",
    chipIcon: <ShoppingBag size={14} strokeWidth={1.8} />,
    chipText: "Boutique en ligne",
    chipClass: "boutique",
    title: "YOBANTÉ Boutique",
    description: "Achetez vos produits préférés à prix discount et faites-les livrer directement au Sénégal. Découvrez une sélection de produits authentiques et profitez d’une expérience d’achat simple et pratique.",
    features: [
      { icon: <ShieldCheck size={23} strokeWidth={2.2} />, title: "Produits authentiques", description: "Une sélection de produits de qualité." },
      { icon: <Package size={23} strokeWidth={2.2} />, title: "Achats en gros", description: "Des offres adaptées aux commandes en volume." },
      { icon: <Truck size={23} strokeWidth={2.2} />, title: "Livraison au Sénégal", description: "Suivez votre commande jusqu'à destination." }
    ],
    iosUrl: "https://apps.apple.com",
    androidUrl: "https://play.google.com"
  }
];

const Applications = ({ variant = 'rek' }) => {
  const visibleApps = appsData.filter((app) => variant === 'rek' ? app.id === 'expedition' : app.id === 'boutique');
  const appImages = variant === 'boutique' ? [appli3] : [appli1, appli2];
  return (
    <section id="apps" className={`apps-section ${variant === 'boutique' ? 'apps-boutique' : ''}`}>
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container">
        {/* HEADER */}
        <div className={`section-header sr ${variant === 'boutique' ? 'section-header-boutique' : ''}`}>
          <h2 className="section-badge">
            <span className="tag-line"></span>
            Notre Application mobile
          </h2>
          <p className="section-subtitle">
            {variant === 'rek'
              ? "Une application mobile pensée pour gérer vos expéditions en quelques gestes, du calcul du tarif au suivi de la livraison."
              : "Une application mobile pensée pour découvrir vos produits, commander simplement et suivre vos achats jusqu'à la livraison."}
          </p>
        </div>

        {/* CARDS */}
        <div className="apps-grid">
          {visibleApps.map((app, i) => (
            <div id={`app-${app.id}`} key={app.id} className={`app-card ${app.id === 'boutique' ? 'app-card-featured' : ''} sr sr-d${i + 1}`}>
              <div className="card-glow"></div>

              <div className="card-inner">
                <div className="app-logo-container">
                  <img src={app.logo} alt={app.alt} className="app-logo" />
                </div>

                <div className={`app-chip ${app.chipClass}`}>
                  {app.chipIcon}
                  {app.chipText}
                </div>

                {app.id === 'boutique' && (
                  <h2 className="featured-title">Téléchargez <span>Yobanté dès maintenant !</span></h2>
                )}

                <p>{app.description}</p>

                {app.id === 'boutique' ? (
                  <div className="featured-features">
                    {app.features.map((feature) => (
                      <div className="featured-feature" key={feature.title}>
                        <span className="featured-feature-icon">{feature.icon}</span>
                        <strong>{feature.title}</strong>
                        <small>{feature.description}</small>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="app-features">
                    {app.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="download-buttons" style={{ padding: '0 34px' }}>
                <button
                  className="download-btn ios"
                  onClick={() => window.open(app.iosUrl, '_blank')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ marginRight: '7px', verticalAlign: 'middle' }}>
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22c-1.31,0.05-1.73,-0.75-3.23,-0.75c-1.49,0-1.96,0.73,-3.22,0.78c-1.33,0.05-2.29,-1.32-3.13,-2.53C4.37,17.18 3.05,12.35 4.81,9.31c0.88,-1.52 2.45,-2.48 4.16,-2.51c1.3,-0.02 2.53,0.88 3.32,0.88c0.79,0 2.27,-1.07 3.82,-0.91c0.65,0.03 2.47,0.26 3.64,1.98c-0.09,0.06 -2.17,1.28 -2.15,3.81c0.03,3.02 2.65,4.03 2.68,4.04c-0.03,0.07 -0.42,1.44 -1.38,2.83M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1c-1.09,0.04 -2.41,0.72 -3.19,1.63c-0.67,0.77 -1.25,1.88 -1.09,3.14c1.21,0.09 2.47,-0.6 3.3,-1.6" />
                  </svg>
                  {app.id === 'boutique' ? <span><small>Télécharger sur</small><strong>App Store</strong></span> : 'App Store'}
                  {app.id === 'boutique' && <ArrowRight size={17} />}
                </button>
                <button
                  className="download-btn android"
                  onClick={() => window.open(app.androidUrl, '_blank')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ marginRight: '7px', verticalAlign: 'middle' }}>
                    <path d="M3,5.27V18.73c0,0.59,0.34,1.13,0.88,1.38L13.12,12l-9.24-8.11C3.34,4.14,3,4.68,3,5.27Z" opacity="0.15"/>
                    <path d="M17.85,9.5L4.76,3.12C4.42,2.95,4.03,3,3.88,3.14L13.12,12Z" />
                    <path d="M13.12,12l4.73-2.5L20.4,11c0.41,0.22,0.6,0.69,0.44,1.12c-0.11,0.31-0.4,0.53-0.74,0.53c-0.09,0-0.18-0.02-0.26-0.05l-2.13-1.1Z" />
                    <path d="M13.12,12l-9.24,8.86c0.15,0.14,0.54,0.19,0.88,0.02l13.09-6.38Z" />
                  </svg>
                  {app.id === 'boutique' ? <span><small>Disponible sur</small><strong>Google Play</strong></span> : 'Google Play'}
                  {app.id === 'boutique' && <ArrowRight size={17} />}
                </button>
              </div>

              <div className="app-visual">
                <img src={appImages[0]} alt={app.id === 'boutique' ? 'Application Yobante Boutique et catalogue de produits' : app.alt} width="1199" height="1312" loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-inner { padding: 34px 34px 0; display: flex; flex-direction: column; flex: 1; }

        .apps-section {
          position: relative;
          overflow: hidden;
          padding: var(--section-y) 0;
          background: #f8fbff;
        }

        .apps-section .section-header { text-align: center; margin-bottom: clamp(36px, 5vw, 56px); }

        .apps-section .bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: .3; pointer-events: none;
        }
        .apps-section .glow-1 { width: 450px; height: 450px; background: #1E3A8A; top: -130px; left: -80px; }
        .apps-section .glow-2 { width: 380px; height: 380px; background: #F5C518; bottom: -100px; right: -80px; }

        .section-badge {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 18px; color: #1E3A8A;
          font-size: clamp(13px, 3.6vw, 18px); font-weight: 800;
          letter-spacing: 2px; text-transform: uppercase;
          background: rgba(30,58,138,0.06);
          padding: 9px 18px; border-radius: 999px;
        }

        .tag-line { width: 20px; height: 2px; background: #F5C518; border-radius: 2px; }

        .section-title {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.12; font-weight: 900;
          color: #1E3A8A; margin-bottom: 18px;
        }

        .section-subtitle {
          max-width: 640px; margin: 0 auto;
          color: #64748b; font-size: 16px; line-height: 1.7;
        }

        /* GRID */
        .apps-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          justify-content: center;
          gap: 30px;
          width: 100%;
          max-width: none;
          margin: 0 auto;
        }

        /* CARD */
        .app-card {
          position: relative; overflow: hidden;
          width: 100%;
          background: rgba(255,255,255,.9);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 0 0 34px;
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 8px 40px rgba(30,58,138,.08);
          display: grid;
          grid-template-columns: minmax(230px, .8fr) minmax(0, 1.2fr);
          grid-template-rows: 1fr auto;
          transition: box-shadow 0.32s ease, transform 0.32s ease;
        }

        .app-card:hover {
          box-shadow: 0 20px 56px rgba(30,58,138,.15);
          transform: translateY(-6px);
        }

        .app-card.scroll-target {
          animation: app-card-focus 60s ease-out;
        }

        @keyframes app-card-focus {
          0%, 15% { box-shadow: 0 0 0 5px rgba(245,197,24,.75), 0 20px 56px rgba(30,58,138,.22); }
          100% { box-shadow: 0 8px 40px rgba(30,58,138,.08); }
        }

        .card-inner {
          padding: 34px 34px 0;
          display: flex; flex-direction: column;
          grid-column: 2; grid-row: 1;
        }

        .card-glow {
          position: absolute;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(30,58,138,.07);
          filter: blur(80px);
          top: -100px; right: -80px; pointer-events: none;
        }

        .app-logo-container {
          display: flex; justify-content: center; align-items: center;
          margin-bottom: 18px;
          padding: 12px 0 4px;
        }

        .app-logo {
          max-height: 70px;
          width: auto;
          max-width: 65%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        /* CHIPS */
        .app-chip {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 7px; padding: 8px 16px; border-radius: 999px;
          font-size: 11.5px; font-weight: 700;
          margin-bottom: 18px; align-self: center;
          letter-spacing: 0.2px;
        }

        .app-chip.expedition {
          background: rgba(30,58,138,.1); color: #1E3A8A;
          border: 1px solid rgba(30,58,138,.12);
        }
        .app-chip.boutique {
          background: rgba(245,197,24,.2); color: #8a6600;
          border: 1px solid rgba(245,197,24,.3);
        }

        .app-card h3 { font-size: 26px; color: #1E3A8A; margin-bottom: 14px; font-weight: 900; }
        .app-card p  { color: #64748b; line-height: 1.7; margin-bottom: 24px; font-size: 14px; }

        /* FEATURES */
        .app-features { list-style: none; padding: 0; margin: 0 0 28px; }

        .app-features li {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px; color: #334155; font-size: 14px;
          line-height: 1.5;
        }

        .app-features li::before {
          content: '✓'; width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #1E3A8A, #2a52c9);
          color: white;
          font-size: 11px; font-weight: 900; flex-shrink: 0;
          box-shadow: 0 3px 8px rgba(30,58,138,.25);
        }

        /* BUTTONS */
        .download-buttons { display: flex; gap: 12px; margin-top: auto; }

        .app-visual {
          grid-column: 1; grid-row: 1 / span 2;
          min-height: 520px;
          display: flex; align-items: flex-end; justify-content: center;
          padding: 34px 20px 0;
          overflow: hidden;
          background: linear-gradient(160deg, rgba(30,58,138,.08), rgba(245,197,24,.12));
        }

        .app-visual img {
          width: 100%;
          max-width: 410px;
          height: 560px;
          object-fit: cover;
          object-position: center center;
          filter: drop-shadow(0 22px 24px rgba(30,58,138,.2));
          transform: rotate(-6deg) translate(-50px, -10px);
          animation: app-photo-fade .7s ease both;
        }

        @keyframes app-photo-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .boutique-download-wrap {
          background: white;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 14px rgba(0,0,0,.04);
          margin-top: auto;
        }

        .download-btn {
          flex: 1; border: none; border-radius: 14px;
          min-height: var(--tap);
          padding: 14px 18px; font-size: 14px; font-weight: 800;
          cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.25s cubic-bezier(0.34,1.4,0.64,1);
          letter-spacing: 0.1px;
        }

        .download-btn:hover { transform: translateY(-3px); opacity: 0.92; }

        .ios     { background: #1E3A8A; color: white; box-shadow: none; }
        .android { background: #F5C518; color: #1E3A8A; box-shadow: none; }

        /* Boutique : App Store fond blanc (évite bleu sur blanc de carte) */
        .ios-boutique {
          background: white !important;
          color: #1E3A8A !important;
          border: 1.5px solid rgba(30,58,138,.2);
          box-shadow: 0 4px 12px rgba(30,58,138,.08) !important;
        }
        .ios-boutique:hover { background: #f0f4ff !important; opacity: 1; }

        /* RESPONSIVE */
        @media (max-width: 1024px) { .apps-grid { gap: 22px; } }

        @media (max-width: 930px) {
          .apps-grid { grid-template-columns: 1fr; max-width: 680px; margin: 0 auto; }
          .app-card { grid-template-columns: minmax(180px, .7fr) minmax(0, 1.3fr); }
          .section-header { margin-bottom: 48px; }
          .card-inner { padding: 26px 20px 0; }
          .download-buttons { padding: 0 20px !important; }
          .app-logo { max-width: 78%; }
        }

        @media (max-width: 520px) {
          .app-card { display: flex; flex-direction: column; padding: 0 0 28px; border-radius: 22px; }
          .app-visual { order: 0; min-height: 340px; max-height: 360px; padding-top: 18px; }
          .app-visual img { width: 290px; max-width: 290px; height: 340px; transform: rotate(-6deg) translate(-22px, -8px); }
          .card-inner { order: 1; padding: 26px 18px 0; }
          .download-buttons { order: 2; }
          .download-buttons { flex-direction: column; gap: 10px; }
          .download-btn { width: 100%; padding: 13px 18px; }
          .section-title { font-size: 28px; }
          .app-card h3 { font-size: 22px; }
        }

        .apps-section.apps-boutique { min-height: 100vh; padding: 0; background: #fff; }
        .apps-boutique .bg-glow,
        .apps-boutique .section-header-boutique { display: none; }
        .apps-boutique .container { width: 100%; max-width: none; margin: 0; padding: 0; }
        .apps-boutique .apps-grid { display: block; width: 100%; max-width: none; margin: 0; }
        .apps-boutique .app-card-featured {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          grid-template-rows: 1fr auto;
          width: 100%;
          min-height: min(920px, 100vh);
          min-height: min(920px, 100svh);
          margin: 0;
          padding: 0;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          background: #fff;
          box-shadow: none;
          backdrop-filter: none;
          transform: none;
          transition: none;
        }
        .apps-boutique .app-card-featured:hover { transform: none; box-shadow: none; }
        .apps-boutique .app-card-featured::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(90deg, transparent 47%, rgba(255,255,255,.9) 59%, #fff 70%);
        }
        .apps-boutique .app-card-featured .card-glow,
        .apps-boutique .app-card-featured .app-logo-container { display: none; }
        .apps-boutique .app-card-featured .card-inner {
          position: relative;
          z-index: 2;
          grid-column: 2;
          grid-row: 1;
          justify-content: center;
          padding: 60px clamp(34px, 5vw, 92px) 24px;
        }
        .apps-boutique .app-chip.boutique { align-self: flex-start; margin: 0 0 24px; padding: 9px 16px; background: #fff3ca; color: #6e5200; border: 0; font-size: 13px; }
        .featured-title {
          margin: 0 0 20px;
          color: #103b80;
          font-size: clamp(38px, 2.7vw, 50px);
          font-weight: 900;
          line-height: 1.03;
        }
        .featured-title span { display: block; color: #f5c518; }
        .apps-boutique .app-card-featured .card-inner > p {
          max-width: 610px;
          margin: 0 0 28px;
          color: #173b72;
          font-size: clamp(15px, 1.35vw, 19px);
          line-height: 1.5;
        }
        .featured-features {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 660px;
          margin-bottom: 30px;
        }
        .featured-feature { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; color: #123679; }
        .featured-feature-icon {
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          margin-bottom: 2px;
          border-radius: 50%;
          background: #ffdf45;
          color: #123679;
        }
        .featured-feature strong { font-size: 14px; font-weight: 800; line-height: 1.2; }
        .featured-feature small { max-width: 170px; color: #587096; font-size: 13px; line-height: 1.35; }
        .apps-boutique .app-card-featured .download-buttons {
          position: relative;
          z-index: 2;
          grid-column: 2;
          grid-row: 2;
          gap: 14px;
          padding: 0 clamp(34px, 5vw, 92px) 48px !important;
          margin: 0;
        }
        .apps-boutique .app-card-featured .download-btn {
          min-height: 66px;
          gap: 10px;
          padding: 9px 16px;
          border-radius: 11px;
          background: #050505;
          color: #fff;
          text-align: left;
        }
        .apps-boutique .app-card-featured .download-btn span { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.08; }
        .apps-boutique .app-card-featured .download-btn span small { font-size: 10px; font-weight: 500; opacity: .88; }
        .apps-boutique .app-card-featured .download-btn span strong { font-size: 18px; font-weight: 700; }
        .apps-boutique .app-card-featured .download-btn > svg:last-child { margin-left: auto; }
        .apps-boutique .app-card-featured .app-visual {
          position: absolute;
          inset: 0 auto 0 0;
          z-index: 0;
          display: block;
          grid-column: 1;
          grid-row: 1 / -1;
          width: 56%;
          min-height: 0;
          padding: 0;
          overflow: hidden;
          background: linear-gradient(90deg, #eaf5ff 0%, #f6fbff 78%, #fff 100%);
        }
        .apps-boutique .app-card-featured .app-visual img {
          display: block;
          width: 100%;
          max-width: none;
          height: 100%;
          object-fit: contain;
          object-position: left center;
          filter: none;
          transform: none;
          animation: none;
        }

        /* Tablette (761–1180px) : la colonne texte ne couvre que la moitié de l'écran.
           Les 3 avantages passent en liste (icône + texte) comme sur mobile, les boutons
           se rangent en colonne et la carte n'impose plus une hauteur d'écran entière. */
        @media (min-width: 761px) and (max-width: 1180px) {
          .apps-boutique .app-card-featured { min-height: 0; }
          .apps-boutique .app-card-featured .card-inner { padding-top: 56px; }
          .apps-boutique .app-card-featured .download-buttons { flex-direction: column; align-items: stretch; max-width: 420px; padding-bottom: 56px !important; }
          .featured-features { grid-template-columns: 1fr; gap: 16px; }
          .featured-feature { display: grid; grid-template-columns: 46px minmax(0, 1fr); column-gap: 12px; row-gap: 3px; align-items: center; }
          .featured-feature-icon { grid-row: span 2; width: 42px; height: 42px; margin: 0; }
          .featured-feature small { max-width: none; }
        }

        @media (max-width: 760px) {
          .apps-section.apps-boutique { min-height: 0; }
          .apps-boutique .app-card-featured { display: flex; flex-direction: column; min-height: 0; }
          .apps-boutique .app-card-featured::before { display: none; }
          .apps-boutique .app-card-featured .app-visual {
            position: relative;
            inset: auto;
            order: 0;
            width: 100%;
            height: auto;
            min-height: 0;
            aspect-ratio: .82;
          }
          .apps-boutique .app-card-featured .app-visual img { object-position: center center; }
          .apps-boutique .app-card-featured .card-inner { order: 1; padding: 30px 22px 0; }
          .apps-boutique .app-chip.boutique { margin-bottom: 18px; }
          .featured-title { max-width: 560px; font-size: clamp(36px, 8vw, 52px); }
          .apps-boutique .app-card-featured .card-inner > p { margin-bottom: 24px; font-size: 15px; }
          .featured-features { grid-template-columns: 1fr; gap: 16px; margin-bottom: 24px; }
          .featured-feature { display: grid; grid-template-columns: 46px minmax(0, 1fr); column-gap: 12px; row-gap: 3px; align-items: center; }
          .featured-feature-icon { grid-row: span 2; width: 42px; height: 42px; margin: 0; }
          .featured-feature strong { font-size: 14px; }
          .featured-feature small { max-width: none; }
          .apps-boutique .app-card-featured .download-buttons { order: 2; padding: 0 22px 32px !important; gap: 10px; }
          .apps-boutique .app-card-featured .download-btn { min-height: 60px; padding: 8px 10px; }
          .apps-boutique .app-card-featured .download-btn span strong { font-size: 15px; }
        }

        @media (max-width: 390px) {
          .apps-boutique .app-card-featured .download-buttons { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default Applications;

