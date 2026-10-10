import { Zap, Lock, Headphones, Smartphone } from 'lucide-react';
import footerLogo from '../../assets/images/logo-boutique-footer.webp';

const TRUST_ITEMS = [
  { icon: Zap, label: 'Livraison rapide' },
  { icon: Lock, label: 'Paiement sécurisé' },
  { icon: Headphones, label: 'Support en ligne' },
  { icon: Smartphone, label: 'iOS & Android' },
];

const LEGAL_LINKS = ['Mentions légales', 'CGV', 'Confidentialité'];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={footerLogo} alt="Yobanté Logo" className="footer-logo" width="570" height="170" loading="lazy" decoding="async" />
          <p className="footer-description">
            Votre spécialiste de l'expédition de colis et du e-commerce
            entre la France et le Sénégal.
          </p>
        </div>

        <div className="footer-right">
          <ul className="footer-trust">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={15} strokeWidth={2} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <div className="footer-links">
            {LEGAL_LINKS.map((label) => (
              <button type="button" key={label}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">© 2026 YOBANTÉ. Tous droits réservés.</span>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .footer {
        padding-top: clamp(40px, 5vw, 56px);
        padding-bottom: env(safe-area-inset-bottom, 0px);
        background: var(--blue-deep);
        color: #fff;
      }

      .footer-main {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        gap: 28px clamp(24px, 5vw, 56px);
        padding-bottom: 32px;
      }

      .footer-brand { flex: 1 1 240px; max-width: 320px; }
      .footer-logo { display: block; width: 190px; height: auto; margin-bottom: 18px; }
      .footer-description { color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.65; }

      .footer-right {
        display: flex;
        flex: 1 1 320px;
        flex-direction: column;
        align-items: flex-end;
        gap: 14px;
        min-width: 0;
      }

      .footer-trust {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 10px 24px;
        list-style: none;
      }
      .footer-trust li {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: rgba(255, 255, 255, 0.85);
        font-size: 13.5px;
        font-weight: 600;
      }
      .footer-trust svg { color: var(--gold); }

      .footer-links { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 0 24px; }
      .footer-links button {
        display: inline-flex;
        align-items: center;
        min-height: var(--tap);
        padding: 0;
        border: 0;
        background: transparent;
        color: rgba(255, 255, 255, 0.65);
        font-size: 13.5px;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      .footer-links button:hover { color: #fff; }

      .footer-bottom {
        padding: 18px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
      }
      .copyright { color: rgba(255, 255, 255, 0.55); font-size: 13px; }

      @media (max-width: 768px) {
        .footer-main { flex-direction: column; }
        .footer-main { gap: 24px; }
        .footer-brand { flex: none; max-width: 100%; }
        .footer-right { flex: none; align-items: flex-start; width: 100%; }
        .footer-trust, .footer-links { justify-content: flex-start; }
        .footer-trust { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
      }
    ` }} />
  </footer>
);

export default Footer;
