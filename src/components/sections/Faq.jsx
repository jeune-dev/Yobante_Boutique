import { useState } from 'react';
import { Plus } from 'lucide-react';

// Questions et réponses : src/data/content.js. Composant identique sur les deux sites.
import { faq } from '../../data/content';

const Faq = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="sec-head sr">
          <h2 className="sec-title">Questions fréquentes</h2>
        </div>

        <div className="faq-list">
          {faq.map((faq, i) => {
            const open = active === i;
            return (
              <div key={faq.q} className={`faq-item${open ? ' open' : ''}`}>
                <button
                  type="button"
                  className="faq-btn"
                  id={`faq-btn-${i}`}
                  onClick={() => setActive(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="faq-number" aria-hidden="true">0{i + 1}</span>
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true"><Plus size={18} strokeWidth={2.2} /></span>
                </button>
                {open && (
                  <div className="faq-answer" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-section { padding: var(--section-y) 0; background: var(--surface); }

        .faq-container { max-width: 860px; margin: 0 auto; padding: 0 var(--gutter); }

        .faq-list { display: flex; flex-direction: column; gap: 12px; }

        .faq-item {
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--white);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-item:hover { border-color: var(--blue-100); }
        .faq-item.open { border-color: var(--blue-100); box-shadow: var(--shadow-md); }

        .faq-btn {
          display: flex;
          align-items: center;
          gap: 18px;
          width: 100%;
          min-height: var(--tap);
          padding: 18px 22px;
          border: 0;
          background: transparent;
          text-align: left;
          cursor: pointer;
        }

        .faq-number {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--blue-50);
          color: var(--blue);
          font-size: 13px;
          font-weight: 700;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .faq-item.open .faq-number { background: var(--blue); color: #fff; }

        .faq-question { flex: 1; color: var(--text-dark); font-size: 15.5px; font-weight: 600; line-height: 1.45; }

        .faq-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--blue-50);
          color: var(--blue);
          transition: transform 0.25s var(--ease), background 0.2s ease, color 0.2s ease;
        }
        .faq-item.open .faq-icon { transform: rotate(45deg); background: var(--gold); color: var(--blue); }

        .faq-answer {
          padding: 0 22px 20px 80px;
          color: var(--text-mid);
          font-size: 14.5px;
          line-height: 1.75;
        }

        @media (max-width: 768px) {
          .faq-btn { gap: 14px; padding: 18px; }
          .faq-question { font-size: 15px; }
          .faq-answer { padding: 0 18px 18px 72px; }
        }

        @media (max-width: 520px) {
          .faq-number { width: 34px; height: 34px; border-radius: 10px; font-size: 12px; }
          .faq-question { font-size: 14.5px; overflow-wrap: anywhere; }
          .faq-answer { padding: 0 18px 18px; }
        }
      ` }} />
    </section>
  );
};

export default Faq;
