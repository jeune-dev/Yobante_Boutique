import { Search, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: 'Parcourez le catalogue',
    text: 'Une sélection de produits authentiques, proposés à prix discount.',
  },
  {
    icon: ShoppingCart,
    title: 'Ajoutez au panier',
    text: "Commandez à l'unité ou en gros, selon vos besoins.",
  },
  {
    icon: ShieldCheck,
    title: 'Payez en toute sécurité',
    text: 'Votre paiement est protégé, en toute confiance.',
  },
  {
    icon: Truck,
    title: 'Livraison au Sénégal',
    text: "Suivez votre commande jusqu'à sa destination.",
  },
];

const HowItWorks = () => (
  <section id="comment-commander" className="hiw-section">
    <div className="container">
      <div className="sec-head sr">
        <span className="sec-eyebrow">Comment commander</span>
        <h2 className="sec-title">Commander en 4 étapes</h2>
        <p className="sec-sub">
          Faites vos achats en France et recevez vos produits au Sénégal, simplement.
        </p>
      </div>

      <ol className="hiw-grid">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className={`hiw-card sr sr-d${i + 1}`}>
            <span className="hiw-num" aria-hidden="true">{i + 1}</span>
            <span className="hiw-icon"><Icon size={24} strokeWidth={1.9} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .hiw-section { padding: var(--section-y) 0; background: var(--white); }

      .hiw-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
        list-style: none;
      }
      .hiw-card {
        position: relative;
        padding: 32px 24px 28px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--white);
        box-shadow: var(--shadow-sm);
        transition: transform 0.25s var(--ease), box-shadow 0.25s ease, border-color 0.25s ease;
      }
      .hiw-card:hover { transform: translateY(-3px); border-color: var(--blue-100); box-shadow: var(--shadow-md); }
      .hiw-num {
        position: absolute;
        top: 22px;
        right: 22px;
        color: var(--gold-dark);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.08em;
      }
      .hiw-num::before { content: "0"; }
      .hiw-icon {
        display: grid;
        place-items: center;
        width: 52px;
        height: 52px;
        margin-bottom: 20px;
        border-radius: 14px;
        background: var(--blue);
        color: #fff;
      }
      .hiw-card h3 { margin-bottom: 8px; color: var(--blue); font-size: 17.5px; font-weight: 700; }
      .hiw-card p { color: var(--text-light); font-size: 14.5px; line-height: 1.65; }

      @media (max-width: 1024px) { .hiw-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 560px) {
        .hiw-grid { grid-template-columns: 1fr; gap: 14px; }
        .hiw-card { padding: 26px 20px 22px; }
      }
    ` }} />
  </section>
);

export default HowItWorks;
