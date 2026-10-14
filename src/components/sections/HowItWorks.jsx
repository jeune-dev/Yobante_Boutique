// « Comment ça marche » — identique sur les deux sites ; le contenu vient de src/data/content.js.
import { howItWorks } from '../../data/content';

const HowItWorks = () => (
  <section id={howItWorks.id} className="hiw-section">
    <div className="container">
      <div className="sec-head sr">
        <span className="sec-eyebrow">{howItWorks.eyebrow}</span>
        <h2 className="sec-title">{howItWorks.title}</h2>
        <p className="sec-sub">{howItWorks.text}</p>
      </div>

      <ol className="hiw-grid" style={{ '--count': howItWorks.steps.length }}>
        {howItWorks.steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className={`hiw-card sr sr-d${i + 1}`}>
            <span className="hiw-num" aria-hidden="true">{i + 1}</span>
            <span className="hiw-icon"><Icon size={22} strokeWidth={1.9} aria-hidden="true" /></span>
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
        grid-template-columns: repeat(var(--count), minmax(0, 1fr));
        gap: 20px;
        list-style: none;
      }
      .hiw-card {
        position: relative;
        padding: 28px 22px 24px;
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
        width: 48px;
        height: 48px;
        margin-bottom: 18px;
        border-radius: 14px;
        background: var(--blue);
        color: #fff;
      }
      .hiw-card h3 { margin-bottom: 8px; color: var(--blue); font-size: 17px; font-weight: 700; }
      .hiw-card p { color: var(--text-light); font-size: 14px; line-height: 1.65; }

      @media (max-width: 1024px) { .hiw-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 560px) {
        .hiw-grid { grid-template-columns: 1fr; gap: 14px; }
        .hiw-card { padding: 26px 20px 22px; }
      }
    ` }} />
  </section>
);

export default HowItWorks;
