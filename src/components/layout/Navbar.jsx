import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/Logo Yobante Boutique - Fond Blanc.webp';

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Applications', id: 'apps' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
  { label: 'Qui sommes-nous ?', id: 'about' },
];

const Navbar = ({ scrolled, hidden, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

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
        className={`navbar ${scrolled ? 'scrolled' : ''} ${isHidden ? 'nav-hidden' : ''}`}
      >
        <div className="nav-container">

          <button className="logo" onClick={() => handleScroll('hero')}>
            <img
              src={logo}
              alt="YOBANTÉ Logo"
              className="logo-img"
              width="600"
              height="262"
              decoding="async"
            />
          </button>

          <div className="nav-links desktop-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={activeId === item.id ? 'active' : undefined}
                aria-current={activeId === item.id ? 'true' : undefined}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="nav-cta"
            onClick={() => handleScroll('contact')}
          >
            Nous contacter
          </button>

          <button
            ref={burgerRef}
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
              className={`mobile-link${activeId === item.id ? ' active' : ''}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}

          <button
            className="mobile-cta"
            onClick={() => handleScroll('contact')}
          >
            Nous contacter
          </button>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-h);
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: transform 0.35s ease, box-shadow 0.3s ease;
          background: #ffffff;
          border-bottom: 1px solid var(--border);
        }

        .navbar.nav-hidden {
          transform: translateY(-100%);
        }

        .navbar.scrolled {
          box-shadow: var(--shadow-sm);
        }

        .nav-container {
          width: 100%;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--gutter);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 2vw, 20px);
        }

        .logo {
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .navbar .logo-img {
          height: calc(var(--nav-h) - 12px);
          width: auto;
          object-fit: contain;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: clamp(14px, 2.4vw, 30px);
        }

        .desktop-links button {
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
          white-space: nowrap;
          transition: color 0.3s ease;
          position: relative;
        }

        .desktop-links button::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: var(--blue);
          transition: width 0.3s ease;
        }

        .desktop-links button:hover {
          color: var(--blue);
        }

        .desktop-links button:hover::after,
        .desktop-links button.active::after {
          width: 100%;
        }

        .desktop-links button.active {
          color: var(--blue);
        }

        .nav-cta {
          border: none;
          background: var(--blue);
          color: white;
          min-height: 42px;
          padding: 0 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          flex-shrink: 0;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .nav-cta:hover { background: var(--blue-dark); }

        @media (pointer: coarse) {
          .nav-cta { min-height: var(--tap); padding-inline: 20px; }
          .desktop-links button { min-height: var(--tap); }
        }

        .burger {
          width: var(--tap);
          height: var(--tap);
          flex-shrink: 0;
          border-radius: 12px;
          border: none;
          background: var(--surface);
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .burger span {
          width: 22px;
          height: 2px;
          background: #0f172a;
          border-radius: 10px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .burger.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .burger.active span:nth-child(2) {
          opacity: 0;
        }

        .burger.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          max-height: calc(100vh - var(--nav-h));
          max-height: calc(100dvh - var(--nav-h));
          overflow-y: auto;
          overscroll-behavior: contain;
          background: white;
          padding: 20px var(--gutter) calc(30px + env(safe-area-inset-bottom, 0px));
          display: flex;
          flex-direction: column;
          gap: 12px;
          transform: translateY(-20px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: transform 0.3s ease, opacity 0.3s ease, visibility 0s linear 0.3s;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transition-delay: 0s;
        }

        .mobile-link {
          border: none;
          background: var(--surface);
          min-height: var(--tap);
          padding: 14px 18px;
          border-radius: 14px;
          text-align: left;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .mobile-link:hover,
        .mobile-link.active {
          background: var(--blue-50);
          color: var(--blue);
        }

        .mobile-cta {
          margin-top: 8px;
          border: none;
          background: var(--blue);
          color: white;
          min-height: var(--tap);
          padding: 16px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .desktop-links,
          .nav-cta {
            display: none;
          }

          .burger {
            display: flex;
          }
        }

        @media (min-width: 901px) {
          .mobile-menu {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .navbar .logo-img {
            height: calc(var(--nav-h) - 14px);
          }
        }
      ` }} />
    </>
  );
};

export default Navbar;
