// src/components/sections/ShopCategories.jsx
import { Laptop, Headphones, WashingMachine, ShoppingBasket, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    icon: WashingMachine,
    title: 'Électroménager',
    text: 'Réfrigérateurs, micro-ondes, machines à laver et appareils du quotidien.',
  },
  {
    icon: Laptop,
    title: 'Informatique',
    text: 'Ordinateurs portables et accessoires pour le travail et les études.',
  },
  {
    icon: Headphones,
    title: 'High-Tech & audio',
    text: 'Écouteurs, téléphones et équipements connectés des grandes marques.',
  },
  {
    icon: ShoppingBasket,
    title: 'Lessives & grande consommation',
    text: "Lessives, produits d'entretien et produits du quotidien, y compris en gros.",
  },
];

const ShopCategories = () => (
  <section id="rayons" className="shc-section">
    <div className="container">
      <div className="sec-head sr">
        <span className="sec-eyebrow">Nos rayons</span>
        <h2 className="sec-title">Tout ce qu'il vous faut, au meilleur prix</h2>
        <p className="sec-sub">
          Des grandes marques à prix réduits, livrées directement au Sénégal.
        </p>
      </div>

      <div className="shc-grid">
        {CATEGORIES.map(({ icon: Icon, title, text }, i) => (
          <article key={title} className={`shc-card sr sr-d${i + 1}`}>
            <span className="shc-icon"><Icon size={30} strokeWidth={1.8} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="sec-cta sr">
        <a className="shc-btn" href="#apps">
          Découvrir l'application <ArrowRight size={17} strokeWidth={2.2} />
        </a>
      </div>
    </div>

    <style>{`
      .shc-section { padding: var(--section-y) 0; background: linear-gradient(180deg, #f8fbff, #eef4ff); }

      .shc-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px; }
      .shc-card {
        padding: 32px 24px; border-radius: 24px; background: #fff;
        border: 1px solid rgba(30,58,138,.08); box-shadow: 0 8px 34px rgba(30,58,138,.07);
        transition: transform .3s ease, box-shadow .3s ease;
      }
      .shc-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(30,58,138,.14); }
      .shc-icon {
        display: grid; place-items: center; width: 62px; height: 62px; margin-bottom: 18px;
        border-radius: 20px; background: #fff3ca; color: #1E3A8A;
      }
      .shc-card h3 { margin: 0 0 8px; color: #1E3A8A; font-size: 18px; font-weight: 900; line-height: 1.25; }
      .shc-card p { margin: 0; color: #64748b; font-size: 14.5px; line-height: 1.65; }

      .shc-btn {
        display: inline-flex; align-items: center; justify-content: center; gap: 10px;
        min-height: var(--tap, 44px); padding: 14px 28px; border-radius: 999px;
        background: #F5C518; color: #1E3A8A; font-weight: 800; font-size: 15px; text-decoration: none;
        box-shadow: 0 10px 26px rgba(245,197,24,.4); transition: transform .25s ease, box-shadow .25s ease;
      }
      .shc-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 34px rgba(245,197,24,.5); }

      @media (max-width: 1024px) { .shc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 560px) {
        .shc-grid { grid-template-columns: 1fr; gap: 16px; }
        .shc-btn { width: 100%; }
      }
    `}</style>
  </section>
);

export default ShopCategories;
