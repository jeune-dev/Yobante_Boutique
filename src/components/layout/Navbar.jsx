// Barre de navigation — capsule flottante blanche (style SaamBiz) : tuile du logo (sans fond) qui dépasse,
// liens centrés avec repère doré, raccourcis de contact ronds et bouton « Nous contacter ».
// Sur mobile : la même capsule, un bouton rond pour le menu, et le menu s'ouvre en carte.
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { navbar } from '../../data/content';
import { phoneHref, whatsappHref } from '../../data/links';

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Applications', id: 'apps' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
  { label: 'Qui sommes-nous ?', id: 'about' },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
  </svg>
);

// Raccourcis WhatsApp et téléphone, toujours affichés. Tant qu'un numéro n'est pas
// renseigné (site.js ou variables de déploiement), l'icône mène au formulaire de contact.
const QuickContacts = ({ tabIndex }) => (
  <ul className="nav-reseaux">
    <li>
      {whatsappHref ? (
        <a className="nav-rond" href={whatsappHref} target="_blank" rel="noopener noreferrer"
          aria-label="Écrire à YOBANTÉ sur WhatsApp" title="WhatsApp" tabIndex={tabIndex}>
          <WhatsAppIcon />
        </a>
      ) : (
        <a className="nav-rond" href="#contact" aria-label="WhatsApp : nous contacter" title="WhatsApp" tabIndex={tabIndex}>
          <WhatsAppIcon />
        </a>
      )}
    </li>
    <li>
      <a className="nav-rond" href={phoneHref || '#contact'} aria-label={phoneHref ? 'Appeler YOBANTÉ' : 'Téléphone : nous contacter'}
        title="Téléphone" tabIndex={tabIndex}>
        <Phone strokeWidth={2.2} aria-hidden="true" />
      </a>
    </li>
  </ul>
);

const Navbar = ({ scrolled, hidden, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const hasQuickContacts = true;

  const handleScroll = (id) => {
    scrollTo(id);
    setMobileMenuOpen(false);
  };

  // Met en valeur la rubrique de la section affichée.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let best = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) { best = id; bestRatio = ratio; }
        });
        setActiveId(best);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Fermeture du menu mobile : clic extérieur, Échap ou passage en desktop.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMobileMenuOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 901px)');
    const onBreakpoint = (e) => { if (e.matches) setMobileMenuOpen(false); };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [mobileMenuOpen]);

  const isHidden = hidden && !mobileMenuOpen;

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Navigation principale"
        className={`navbar${scrolled ? ' scrolled' : ''}${isHidden ? ' nav-hidden' : ''}${mobileMenuOpen ? ' menu-open' : ''}`}
      >
        {/* Voile derrière le menu mobile : un tap dessus referme le menu. */}
        <div className="nav-scrim" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />

        <div className="nav-capsule">
          <button type="button" className="logo nav-tuile" onClick={() => handleScroll('hero')}>
            <img
              src={navbar.logo}
              alt="YOBANTÉ Logo"
              className="logo-img"
              width={navbar.logoSize.width}
              height={navbar.logoSize.height}
              decoding="async"
            />
          </button>

          <ul className="nav-links desktop-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link${activeId === item.id ? ' active' : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  onClick={() => handleScroll(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {hasQuickContacts && (
              <>
                <QuickContacts />
                <span className="nav-sep" aria-hidden="true" />
              </>
            )}
            <button type="button" className="nav-cta" onClick={() => handleScroll('contact')}>
              <Mail size={17} strokeWidth={2.2} aria-hidden="true" />
              <span>Nous contacter</span>
            </button>
          </div>

          <button
            ref={burgerRef}
            type="button"
            className={`burger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-link${activeId === item.id ? ' active' : ''}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            className="mobile-cta"
            onClick={() => handleScroll('contact')}
          >
            <Mail size={18} strokeWidth={2.2} aria-hidden="true" />
            Nous contacter
          </button>

          {hasQuickContacts && (
            <div className="mobile-pied">
              <span>Nous joindre</span>
              <QuickContacts tabIndex={mobileMenuOpen ? undefined : -1} />
            </div>
          )}
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Conteneur fixe et transparent : seuls la capsule et le menu captent les clics. */
        .navbar {
          --cap-h: 64px;
          --cap-text: #12306B;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          padding: var(--nav-top) var(--nav-side) 0;
          pointer-events: none;
          transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .navbar.nav-hidden { transform: translateY(calc(-100% - 32px)); }
        .navbar > .nav-capsule,
        .navbar > .mobile-menu { pointer-events: auto; }

        .nav-capsule {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: calc(var(--container-max) + 40px);
          height: var(--cap-h);
          margin: 0 auto;
          padding: 0 10px 0 0;
          border: 1px solid rgba(3, 30, 70, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.97);
          -webkit-backdrop-filter: blur(18px) saturate(170%);
          backdrop-filter: blur(18px) saturate(170%);
          box-shadow:
            0 14px 34px -14px rgba(3, 30, 70, 0.35),
            0 2px 6px rgba(3, 30, 70, 0.06),
            inset 0 1px 0 #fff;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .navbar.scrolled .nav-capsule {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 16px 36px -14px rgba(3, 30, 70, 0.4), 0 2px 6px rgba(3, 30, 70, 0.07);
        }
        .nav-capsule :focus-visible { outline-color: var(--blue); }

        /* Tuile du logo : carte blanche qui dépasse de la capsule */
        .nav-tuile {
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 84px;
          margin-left: 18px;
          padding: 0 18px;
          border: 1px solid rgba(3, 30, 70, 0.08);
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 14px 30px -10px rgba(3, 30, 70, 0.4), 0 2px 6px rgba(3, 30, 70, 0.06);
          cursor: pointer;
          transition: scale 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), translate 0.3s ease, rotate 0.3s ease;
        }
        .nav-tuile:hover { translate: 0 -2px; rotate: -2deg; }
        .navbar.scrolled .nav-tuile { scale: 0.9; }
        .navbar .logo-img { display: block; width: auto; height: 38px; }
        .navbar .nav-tuile:focus-visible { outline: 3px solid var(--gold); outline-offset: 3px; }

        /* Liens */
        .nav-links {
          display: flex;
          flex: 1;
          justify-content: center;
          gap: 2px;
          list-style: none;
        }
        .nav-link {
          position: relative;
          padding: 10px 15px;
          border: 0;
          border-radius: 999px;
          background: none;
          color: var(--cap-text);
          font-size: 14.5px;
          font-weight: 600;
          letter-spacing: -0.1px;
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-link:hover { background: rgba(5, 61, 143, 0.07); color: var(--blue); }
        .nav-link.active { color: var(--blue); }
        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 50%;
          width: 18px;
          height: 3px;
          margin-left: -9px;
          border-radius: 3px;
          background: var(--gold);
        }

        /* Actions */
        .nav-actions { display: flex; flex-shrink: 0; align-items: center; gap: 12px; }
        .nav-reseaux { display: flex; align-items: center; gap: 8px; list-style: none; }
        .nav-rond {
          display: inline-grid;
          flex-shrink: 0;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--blue);
          color: #fff;
          transition: background 0.25s ease, color 0.25s ease, translate 0.25s ease;
        }
        .nav-rond svg { width: 17px; height: 17px; }
        .nav-rond:hover { background: var(--blue-dark); translate: 0 -2px; }
        .nav-sep { width: 1px; height: 26px; background: rgba(3, 30, 70, 0.14); }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 20px;
          border: 0;
          border-radius: 999px;
          background: var(--gold);
          color: var(--blue-deep);
          font-size: 14.5px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 8px 18px -8px rgba(246, 197, 55, 0.7);
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, translate 0.25s ease;
        }
        .nav-cta:hover { background: var(--blue); color: #fff; translate: 0 -1px; }

        /* Bouton du menu (mobile) */
        .burger {
          display: none;
          flex-shrink: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: var(--tap);
          height: var(--tap);
          margin-left: auto;
          border: 0;
          border-radius: 50%;
          background: rgba(5, 61, 143, 0.08);
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .burger:hover { background: rgba(5, 61, 143, 0.14); }
        .burger span {
          width: 20px;
          height: 2px;
          border-radius: 10px;
          background: var(--blue-deep);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .burger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .burger.active span:nth-child(2) { opacity: 0; }
        .burger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Menu mobile : carte sous la capsule */
        .mobile-menu {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 2px;
          max-width: calc(var(--container-max) + 40px);
          max-height: 0;
          margin: 10px auto 0;
          padding: 0 12px;
          overflow: hidden;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 22px 44px -16px rgba(3, 30, 70, 0.4);
          opacity: 0;
          visibility: hidden;
          overscroll-behavior: contain;
          transition: max-height 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), padding 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.25s ease, visibility 0s linear 0.4s;
        }
        .mobile-menu.open {
          max-height: min(560px, calc(100vh - var(--nav-h) - 16px));
          max-height: min(560px, calc(100dvh - var(--nav-h) - 16px));
          padding: 12px;
          overflow-y: auto;
          opacity: 1;
          visibility: visible;
          transition-delay: 0s;
        }
        .mobile-link {
          min-height: var(--tap);
          padding: 13px 16px;
          border: 0;
          border-radius: 14px;
          background: none;
          color: var(--blue-dark);
          font-size: 15.5px;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .mobile-link:hover { background: var(--blue-50); color: var(--blue); }
        .mobile-link.active { background: var(--blue-50); color: var(--blue); box-shadow: inset 3px 0 0 var(--gold); }
        .mobile-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 50px;
          margin-top: 8px;
          padding: 0 16px;
          border: 0;
          border-radius: 14px;
          background: var(--gold);
          color: var(--blue-deep);
          font-size: 15.5px;
          font-weight: 700;
          cursor: pointer;
        }
        .mobile-pied {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
          padding: 12px 4px 2px 16px;
          border-top: 1px solid rgba(3, 30, 70, 0.08);
          color: var(--text-light);
          font-size: 13.5px;
          font-weight: 600;
        }
        .mobile-pied .nav-rond { width: var(--tap); height: var(--tap); background: var(--blue); }
        .mobile-pied .nav-rond:hover { background: var(--blue-dark); color: #fff; }

        .nav-scrim {
          position: fixed;
          inset: 0;
          z-index: 1;
          background: rgba(2, 31, 77, 0.35);
          -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .navbar.menu-open .nav-scrim { opacity: 1; visibility: visible; pointer-events: auto; }

        @media (pointer: coarse) {
          .nav-link { min-height: var(--tap); }
        }

        @media (max-width: 1240px) {
          .nav-capsule { gap: 10px; }
          .nav-link { padding: 10px 11px; font-size: 14px; }
        }
        @media (max-width: 1100px) {
          .nav-tuile { margin-left: 14px; padding: 0 14px; }
          .navbar .logo-img { height: 34px; }
          .nav-link { padding: 10px 8px; font-size: 13.5px; }
          .nav-reseaux { gap: 6px; }
          .nav-rond { width: 34px; height: 34px; }
          .nav-rond svg { width: 15px; height: 15px; }
          .nav-actions { gap: 9px; }
          .nav-cta { padding: 0 16px; font-size: 14px; }
        }
        /* Jusqu'à 1000 px : le bouton de contact garde seulement son icône (rond doré, comme SaamBiz) */
        @media (max-width: 1000px) {
          .nav-cta { width: 44px; padding: 0; justify-content: center; }
          .nav-cta span {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
          }
        }

        @media (max-width: 900px) {
          .navbar { --cap-h: 58px; }
          .nav-capsule { gap: 8px; padding-right: 8px; }
          /* Mobile : WhatsApp et téléphone restent visibles ; « Nous contacter » est dans le menu */
          .desktop-links, .nav-sep, .nav-cta { display: none; }
          .nav-actions { margin-left: auto; }
          .nav-reseaux { gap: 6px; }
          .nav-rond { width: var(--tap); height: var(--tap); }
          .nav-rond svg { width: 18px; height: 18px; }
          .burger { display: flex; margin-left: 0; }
          .nav-tuile { height: 72px; margin-left: 12px; padding: 0 12px; border-radius: 16px; }
          .navbar .logo-img { height: 30px; }
        }
        @media (min-width: 901px) {
          .mobile-menu, .nav-scrim { display: none; }
        }
        @media (max-width: 380px) {
          .nav-tuile { margin-left: 8px; padding: 0 10px; }
          .navbar .logo-img { height: 27px; }
        }
      ` }} />
    </>
  );
};

export default Navbar;
