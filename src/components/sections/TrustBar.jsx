// Bandeau d'engagements — identique sur les deux sites ; les textes viennent de src/data/content.js.
// Section à part entière : une bande bleu nuit entre le Hero (blanc) et « Nos services » (gris clair).
import { trust } from '../../data/content';

const TrustBar = () => (
  <section className="trust-wrapper" aria-label="Nos engagements">
    <div className="container">
      <ul className="trust-track">
        {trust.map(({ icon: Icon, text }) => (
          <li className="trust-item" key={text}>
            <span className="trust-icon"><Icon size={18} strokeWidth={1.9} aria-hidden="true" /></span>
            <span className="trust-text">{text}</span>
          </li>
        ))}
      </ul>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .trust-wrapper {
        position: relative;
        overflow: hidden;
        padding: 30px 0;
        background:
          radial-gradient(120% 160% at 100% 0%, rgba(246, 197, 55, 0.12) 0%, transparent 45%),
          linear-gradient(120deg, var(--blue-deep) 0%, var(--blue) 100%);
      }

      .trust-track {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px 0;
        list-style: none;
      }

      .trust-item {
        display: flex;
        flex: 1 1 0;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 4px 16px;
        border-left: 1px solid rgba(255, 255, 255, 0.16);
      }
      .trust-item:first-child { border-left: 0; }

      .trust-icon {
        display: grid;
        flex-shrink: 0;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: rgba(246, 197, 55, 0.14);
        color: var(--gold);
        box-shadow: inset 0 0 0 1px rgba(246, 197, 55, 0.28);
      }

      .trust-text {
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
      }

      @media (max-width: 1100px) {
        .trust-item { padding: 4px 10px; }
        .trust-text { font-size: 12.5px; }
      }

      @media (max-width: 900px) {
        .trust-wrapper { padding: 26px 0; }
        .trust-track { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 16px; }
        .trust-item { justify-content: flex-start; padding: 0; border-left: 0; }
        .trust-item:last-child { grid-column: 1 / -1; justify-content: center; }
        .trust-text { white-space: normal; }
      }
    ` }} />
  </section>
);

export default TrustBar;
