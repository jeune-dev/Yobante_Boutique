// Pied de page — identique sur YOBANTÉ Boutique et YOBANTÉ REK.
// Logo et coordonnées viennent de src/data/site.js. Les lignes de contact
// vides ne sont pas affichées.
import { useCallback, useEffect, useState } from 'react';
import { Zap, Lock, Headphones, Smartphone } from 'lucide-react';
import { site } from '../../data/site';
import { phoneHref, whatsappHref, emailHref, YOBANTE_SITES, LEGAL_EVENT, LEGAL_HASHES } from '../../data/links';
import LegalModal from './LegalModal';

const TRUST_ITEMS = [
  { icon: Zap, label: 'Livraison rapide' },
  { icon: Lock, label: 'Paiement sécurisé' },
  { icon: Headphones, label: 'Support en ligne' },
  { icon: Smartphone, label: 'iOS & Android' },
];

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Applications', href: '#apps' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Qui sommes-nous ?', href: '#about' },
];

const docFromHash = () =>
  Object.keys(LEGAL_HASHES).find((doc) => window.location.hash === `#${LEGAL_HASHES[doc]}`) || null;

const Footer = () => {
  // Page légale ouverte : 'conditions', 'confidentialite' ou null.
  const [legalDoc, setLegalDoc] = useState(null);

  // Ouverture depuis un autre bloc (lien du formulaire) ou par une adresse
  // directe : /#conditions-generales, /#confidentialite.
  useEffect(() => {
    const onEvent = (event) => setLegalDoc(event.detail);
    const onHash = () => { const doc = docFromHash(); if (doc) setLegalDoc(doc); };
    onHash();
    window.addEventListener(LEGAL_EVENT, onEvent);
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener(LEGAL_EVENT, onEvent);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  const closeLegal = useCallback(() => {
    setLegalDoc(null);
    if (docFromHash()) window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }, []);

  return (
    <footer className="footer yb-block">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src={site.footerLogo}
              alt={site.name}
              className="footer-logo"
              width={site.footerLogoSize.width}
              height={site.footerLogoSize.height}
              loading="lazy"
              decoding="async"
            />
            <p className="footer-description">
              Votre spécialiste de l'expédition de colis et du e-commerce
              entre la France et le Sénégal.
            </p>
            <ul className="footer-trust">
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={15} strokeWidth={2} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer-col" aria-label="Plan du site">
            <h2>Le site</h2>
            <ul>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2>L'univers YOBANTÉ</h2>
            <ul>
              {YOBANTE_SITES.map(({ name, text, href }) => (
                <li key={href} className="footer-site">
                  {name === site.name ? (
                    <span aria-current="page">{name}</span>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
                  )}
                  <small>{text}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2>Nous joindre</h2>
            <ul>
              {phoneHref && <li><a href={phoneHref}>{site.phone}</a></li>}
              {whatsappHref && (
                <li><a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              )}
              {emailHref && <li><a href={emailHref}>{site.email}</a></li>}
              {site.address && <li className="footer-muted">{site.address}</li>}
              {site.hours && <li className="footer-muted footer-hours">{site.hours}</li>}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">© 2026 YOBANTÉ. Tous droits réservés.</span>
          <ul className="footer-legal">
            <li>
              <button type="button" aria-haspopup="dialog" onClick={() => setLegalDoc('conditions')}>
                Conditions générales
              </button>
            </li>
            <li>
              <button type="button" aria-haspopup="dialog" onClick={() => setLegalDoc('confidentialite')}>
                Confidentialité
              </button>
            </li>
          </ul>
        </div>
      </div>

      <LegalModal doc={legalDoc} onClose={closeLegal} onSwitch={setLegalDoc} />
    </footer>
  );
};

export default Footer;
