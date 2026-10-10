import { useState } from 'react';
import boutiqueLogo from '../../assets/images/Logo Yobante Boutique.webp';
import {
  ShoppingBag, ArrowRight,
  Tag, MapPin, Coffee, Shirt, UtensilsCrossed, Home,
  Apple, Fish, Egg, Snowflake, Baby, Cookie, FlaskConical,
  GlassWater, Wheat, SprayCan, Droplets, PawPrint,
  Gamepad2, Smartphone, Laptop, Tv, Dumbbell,
} from 'lucide-react';

const STEPS = [
  { title: 'Parcourez nos rayons et sélectionnez vos produits', desc: '' },
  { title: 'Validez votre panier', desc: 'Règlement possible par Orange Money, Wave ou carte bancaire.' },
  { title: 'Programmez vos livraisons', desc: "Recevez directement votre commande à l'adresse de votre choix." },
];

const CATEGORIES = [
  { icon: Tag, label: 'Promotions', description: 'Offres du moment et produits à prix réduits.' },
  { icon: MapPin, label: 'Produits Locaux', description: 'Produits fabriqués ou cultivés au Sénégal et dans la région.' },
  { icon: Coffee, label: 'Cafés', description: 'Cafés, grains, boissons chaudes et accessoires associés.' },
  { icon: Shirt, label: 'Mode Locale', description: 'Vêtements et créations inspirés des styles locaux.' },
  { icon: UtensilsCrossed, label: 'Traiteur', description: 'Plats préparés, spécialités et produits traiteur.' },
  { icon: Home, label: 'Mobilier & Déco', description: 'Meubles et objets pour aménager et décorer votre intérieur.' },
  { icon: Apple, label: 'Fruits & Légumes', description: 'Fruits et légumes frais pour vos repas du quotidien.' },
  { icon: Fish, label: 'Viande & Poissons', description: 'Viandes, poissons et produits de la mer.' },
  { icon: Egg, label: 'Crèmerie & Laitiers', description: 'Lait, fromages, yaourts et autres produits laitiers.' },
  { icon: UtensilsCrossed, label: 'Charcuterie', description: 'Sélection de charcuteries et produits salés à partager.' },
  { icon: Snowflake, label: 'Surgelés', description: 'Produits surgelés à conserver et préparer facilement.' },
  { icon: Baby, label: 'Bébé', description: 'Essentiels, soins et accessoires pour les tout-petits.' },
  { icon: Cookie, label: 'Épicerie Sucrée', description: 'Biscuits, confiseries, chocolat et douceurs.' },
  { icon: FlaskConical, label: 'Épicerie Salée', description: 'Ingrédients, conserves et produits salés pour cuisiner.' },
  { icon: GlassWater, label: 'Boissons', description: 'Eaux, jus et boissons pour toutes les occasions.' },
  { icon: Wheat, label: 'Pains & Pâtisserie', description: 'Pains, viennoiseries et pâtisseries à déguster.' },
  { icon: SprayCan, label: 'Entretien & Nettoyage', description: 'Produits et accessoires pour entretenir votre maison.' },
  { icon: Droplets, label: 'Hygiène & Beauté', description: 'Soins, hygiène personnelle et produits de beauté.' },
  { icon: PawPrint, label: 'Animalerie', description: 'Alimentation et accessoires pour vos animaux.' },
  { icon: Gamepad2, label: 'Jeux Vidéo', description: 'Jeux, consoles et accessoires de divertissement.' },
  { icon: Smartphone, label: 'Smartphones & Connectés', description: 'Téléphones, objets connectés et accessoires mobiles.' },
  { icon: Laptop, label: 'Informatique & Bureau', description: 'Ordinateurs, périphériques et fournitures de bureau.' },
  { icon: Tv, label: 'Image & Son', description: 'Téléviseurs, équipements audio et accessoires multimédias.' },
  { icon: Dumbbell, label: 'Sport', description: 'Équipements et accessoires pour bouger et s’entraîner.' },
  { icon: ShoppingBag, label: 'Mode & Textile', description: 'Vêtements, chaussures et accessoires pour toute la famille.' },
];

const Services = ({ scrollTo }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="sec-head sr">
          <h2 className="sec-title">Nos services</h2>
        </div>

        <div id="app-boutique" className="boutique-service sr">
          <aside className="promo-side">
            <div className="promo-box">
              <img src={boutiqueLogo} alt="Yobanté Boutique" className="promo-logo" width="150" height="150" loading="lazy" decoding="async" />
              <p className="promo-desc">Achetez vos produits préférés à prix discount</p>
              <button type="button" className="promo-btn" onClick={() => scrollTo('app-boutique')}>
                Explorer nos rayons
              </button>
            </div>
          </aside>

          <div className="service-body">
            <div className="service-title-row">
              <span className="service-icon"><ShoppingBag size={26} strokeWidth={1.7} aria-hidden="true" /></span>
              <h3 className="service-title">Yobanté Boutique</h3>
            </div>

            <div className="service-block">
              <p className="service-label">Nos rayons</p>
              {selected && (
                <div className="category-info" role="status" aria-live="polite">
                  <strong>{selected.label}</strong>
                  <p>{selected.description}</p>
                </div>
              )}
              <div className="categories-grid">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selected?.label === cat.label;
                  return (
                    <button
                      key={cat.label}
                      type="button"
                      className={`category-pill${isSelected ? ' selected' : ''}`}
                      aria-pressed={isSelected}
                      onClick={() => setSelected(cat)}
                    >
                      <span className="cat-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                      <span className="cat-label">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="service-block">
              <p className="service-label">Parcours client</p>
              <ol className="steps-row">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="step-wrapper">
                    <div className="boutique-step-card">
                      <span className="step-num">Étape {i + 1}</span>
                      <p className="step-title">{step.title}</p>
                      {step.desc && <p className="step-desc">{step.desc}</p>}
                    </div>
                    {i < STEPS.length - 1 && (
                      <span className="step-arrow" aria-hidden="true"><ArrowRight size={16} strokeWidth={2.4} /></span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .services-section {
          position: relative;
          padding: var(--section-y) 0;
          overflow: clip;
          background: var(--surface);
        }

        .boutique-service {
          display: grid;
          grid-template-columns: minmax(260px, 1fr) 2fr;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 30px;
          background: var(--white);
          box-shadow: var(--shadow-lg);
          scroll-margin-top: calc(var(--nav-h) + 16px);
        }

        /* Bloc promo */
        .promo-side { display: flex; align-items: center; justify-content: center; padding: 22px; }
        .promo-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          width: 100%;
          max-width: 300px;
          padding: 36px 26px;
          border-radius: 24px;
          background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
          box-shadow: 0 16px 36px rgba(5, 61, 143, 0.22);
          text-align: center;
        }
        .promo-logo {
          width: 140px;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
        }
        .promo-desc {
          color: #fff;
          font-size: clamp(18px, 1.7vw, 21px);
          font-weight: 700;
          line-height: 1.4;
        }
        .promo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 260px;
          min-height: 50px;
          padding: 0 24px;
          border: 0;
          border-radius: 999px;
          background: var(--gold);
          color: var(--blue);
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s var(--ease);
        }
        .promo-btn:hover { background: #F8D255; transform: translateY(-1px); }

        /* Contenu */
        .service-body {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 38px;
          background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
        }

        .service-title-row { display: flex; align-items: center; gap: 16px; }
        .service-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--gold);
          color: var(--blue);
        }
        .service-title {
          color: #fff;
          font-size: clamp(24px, 2.4vw, 30px);
          font-weight: 800;
          line-height: 1.1;
        }

        .service-block { display: flex; flex-direction: column; gap: 16px; }
        .service-label {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .service-label::before {
          content: "";
          width: 22px;
          height: 3px;
          border-radius: 3px;
          background: var(--gold);
        }
        .service-label::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* Rayons */
        .categories-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
        .category-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-height: 108px;
          padding: 16px 8px 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          font: inherit;
          text-align: center;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s var(--ease);
        }
        .category-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(246, 197, 55, 0.45);
          background: rgba(255, 255, 255, 0.09);
        }
        .cat-icon {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(246, 197, 55, 0.14);
          color: var(--gold);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .cat-label { color: rgba(255, 255, 255, 0.92); font-size: 12px; font-weight: 600; line-height: 1.3; }
        .category-pill.selected { border-color: var(--gold); background: rgba(246, 197, 55, 0.16); }
        .category-pill.selected .cat-icon { background: var(--gold); color: var(--blue); }

        .category-info {
          position: relative;
          padding: 16px 20px 16px 24px;
          overflow: hidden;
          border-radius: 14px;
          background: #fff;
          animation: category-info-in 0.2s ease-out;
        }
        .category-info::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 4px;
          background: var(--gold);
        }
        .category-info strong { display: block; margin-bottom: 4px; color: var(--blue); font-size: 15px; }
        .category-info p { color: var(--text-mid); font-size: 13.5px; line-height: 1.5; }
        @keyframes category-info-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: none; }
        }

        /* Parcours client */
        .steps-row { display: flex; gap: 10px; list-style: none; }
        .step-wrapper { display: flex; flex: 1 1 0; align-items: stretch; min-width: 0; }
        .step-wrapper:last-child { flex: 0 0 calc((100% - 104px) / 3); }
        .boutique-step-card {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          min-height: 176px;
          padding: 24px 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          text-align: center;
        }
        .step-num {
          display: inline-flex;
          align-items: center;
          height: 28px;
          margin-bottom: 16px;
          padding: 0 12px;
          border-radius: 999px;
          background: var(--gold);
          color: var(--blue);
          font-size: 11.5px;
          font-weight: 700;
        }
        .step-title { color: #fff; font-size: 14.5px; font-weight: 700; line-height: 1.4; }
        .step-desc { margin-top: 8px; color: rgba(255, 255, 255, 0.72); font-size: 13px; line-height: 1.6; }
        .step-arrow {
          display: grid;
          flex-shrink: 0;
          align-self: center;
          place-items: center;
          width: 32px;
          height: 32px;
          margin: 0 5px;
          border: 1px solid rgba(246, 197, 55, 0.35);
          border-radius: 50%;
          color: var(--gold);
        }

        @media (max-width: 1024px) {
          .boutique-service { grid-template-columns: 1fr; }
          .promo-box { padding: 36px 24px; }
        }

        @media (max-width: 768px) {
          .boutique-service { border-radius: 22px; }
          .service-body { gap: 28px; padding: 26px 18px; }
          .promo-side { padding: 16px; }
          .promo-box { max-width: 100%; }
          .categories-grid { grid-template-columns: repeat(2, 1fr); }
          .category-pill:last-child:nth-child(odd) { grid-column: 1 / -1; min-height: 96px; }
          .steps-row { flex-direction: column; }
          .step-wrapper, .step-wrapper:last-child { flex: none; flex-direction: column; align-items: center; }
          .boutique-step-card { width: 100%; min-height: 0; }
          .step-arrow { margin: 8px 0; transform: rotate(90deg); }
        }

        @media (max-width: 480px) {
          .service-body { padding: 20px 14px; }
          .service-icon { width: 48px; height: 48px; border-radius: 14px; }
          .category-pill { padding: 14px 6px 12px; }
          .cat-icon { width: 40px; height: 40px; }
          .cat-label { font-size: 11.5px; hyphens: auto; }
          .promo-desc { font-size: 16px; }
        }
      ` }} />
    </section>
  );
};

export default Services;
