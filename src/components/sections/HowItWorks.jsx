// src/components/sections/HowItWorks.jsx
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
            <span className="hiw-num">{i + 1}</span>
            <span className="hiw-icon"><Icon size={26} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </div>

    <style>{`
      .hiw-section { padding: var(--section-y) 0; background: #fff; }

      .hiw-grid {
        list-style: none; margin: 0; padding: 0;
        display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px;
      }
      .hiw-card {
        position: relative; padding: 34px 24px 28px; border-radius: 24px;
        background: #f8fbff; border: 1px solid rgba(30,58,138,.08);
        box-shadow: 0 8px 30px rgba(30,58,138,.06);
        transition: transform .3s ease, box-shadow .3s ease;
      }
      .hiw-card:hover { transform: translateY(-6px); box-shadow: 0 18px 44px rgba(30,58,138,.12); }
      .hiw-num {
        position: absolute; top: 16px; right: 18px;
        font-size: 44px; font-weight: 900; line-height: 1; color: rgba(245,197,24,.55);
      }
      .hiw-icon {
        display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 18px;
        border-radius: 18px; color: #fff;
        background: linear-gradient(135deg, #1E3A8A, #152E70);
        box-shadow: 0 10px 22px rgba(30,58,138,.22);
      }
      .hiw-card h3 { margin: 0 0 8px; color: #1E3A8A; font-size: 18px; font-weight: 800; }
      .hiw-card p { margin: 0; color: #64748b; font-size: 14.5px; line-height: 1.65; }

      @media (max-width: 1024px) { .hiw-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 560px) {
        .hiw-grid { grid-template-columns: 1fr; gap: 16px; }
        .hiw-card { padding: 28px 20px 24px; }
      }
    `}</style>
  </section>
);

export default HowItWorks;
