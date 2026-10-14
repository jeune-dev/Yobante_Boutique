// Section de cartes (rayons / modes d'expédition) — identique sur les deux sites ;
// le contenu vient de src/data/content.js.
import { highlights } from '../../data/content';

const CtaIcon = highlights.cta.icon;

const Highlights = () => (
  <section id={highlights.id} className="shc-section">
    <div className="container">
      <div className="sec-head sr">
        <span className="sec-eyebrow">{highlights.eyebrow}</span>
        <h2 className="sec-title">{highlights.title}</h2>
        <p className="sec-sub">{highlights.text}</p>
      </div>

      <div className="shc-grid" style={{ '--count': highlights.cards.length }}>
        {highlights.cards.map(({ icon: Icon, title, text, points }, i) => (
          <article key={title} className={`shc-card sr sr-d${i + 1}`}>
            <span className="shc-icon"><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{text}</p>
            {points && (
              <ul className="shc-points">
                {points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className="sec-cta sr">
        <a className="shc-btn" href={highlights.cta.href}>
          {highlights.cta.label} <CtaIcon size={17} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .shc-section { padding: var(--section-y) 0; background: var(--surface); }

      .shc-grid { display: grid; grid-template-columns: repeat(var(--count), minmax(0, 1fr)); gap: 20px; }
      .shc-card {
        padding: 28px 22px;
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
        width: 52px;
        height: 52px;
        margin-bottom: 18px;
        border-radius: 15px;
        background: var(--gold-50);
        color: var(--blue);
        box-shadow: inset 0 0 0 1px var(--gold-100);
      }
      .shc-card h3 { margin-bottom: 8px; color: var(--blue); font-size: 17px; font-weight: 700; line-height: 1.3; }
      .shc-card p { color: var(--text-light); font-size: 14px; line-height: 1.65; }
      .shc-points { display: grid; gap: 6px; margin-top: 14px; list-style: none; }
      .shc-points li {
        position: relative;
        padding-left: 24px;
        color: var(--text-dark);
        font-size: 13.5px;
        font-weight: 600;
      }
      .shc-points li::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--blue) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E") center / 10px no-repeat;
      }

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

export default Highlights;
