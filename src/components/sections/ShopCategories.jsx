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
            <span className="shc-icon"><Icon size={26} strokeWidth={1.8} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="sec-cta sr">
        <a className="shc-btn" href="#apps">
          Découvrir l'application <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .shc-section { padding: var(--section-y) 0; background: var(--surface); }

      .shc-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; }
      .shc-card {
        padding: 30px 24px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--white);
        box-shadow: var(--shadow-sm);
        transition: transform 0.25s var(--ease), box-shadow 0.25s ease, border-color 0.25s ease;
      }
      .shc-card:hover { transform: translateY(-3px); border-color: var(--blue-100); box-shadow: var(--shadow-md); }
      .shc-icon {
        display: grid;
        place-items: center;
        width: 56px;
        height: 56px;
        margin-bottom: 20px;
        border-radius: 16px;
        background: var(--gold-50);
        color: var(--blue);
        box-shadow: inset 0 0 0 1px var(--gold-100);
      }
      .shc-card h3 { margin-bottom: 8px; color: var(--blue); font-size: 17.5px; font-weight: 700; line-height: 1.3; }
      .shc-card p { color: var(--text-light); font-size: 14.5px; line-height: 1.65; }

      .shc-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-height: 50px;
        padding: 0 28px;
        border-radius: 999px;
        background: var(--blue);
        color: #fff;
        font-size: 14.5px;
        font-weight: 700;
        text-decoration: none;
        transition: background 0.2s ease, transform 0.2s var(--ease);
      }
      .shc-btn:hover { background: var(--blue-dark); transform: translateY(-1px); }

      @media (max-width: 1024px) { .shc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 560px) {
        .shc-grid { grid-template-columns: 1fr; gap: 14px; }
        .shc-btn { width: 100%; }
      }
    ` }} />
  </section>
);

export default ShopCategories;
