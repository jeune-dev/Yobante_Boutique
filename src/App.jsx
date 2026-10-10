import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import ShopCategories from './components/sections/ShopCategories';
import Applications from './components/sections/Applications';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';
import AboutSection from './components/sections/AboutSection';

const scrollBehavior = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setShowScrollTop(currentY > 500);
      setHidden(currentY > lastY && currentY > 80);
      lastY = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    document.querySelectorAll('.sr, .sr-l, .sr-r').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Actualisation : on repart toujours du haut de la page.
  // Ouverture directe d'une ancre (/#contact) : on défile jusqu'à la section une fois rendue.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    const nav = performance.getEntriesByType?.('navigation')?.[0];
    if (nav?.type === 'reload') {
      if (window.location.hash) window.history.replaceState(null, '', window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.classList.remove('scroll-target');
    element.scrollIntoView({ behavior: scrollBehavior() });
    requestAnimationFrame(() => element.classList.add('scroll-target'));
    window.setTimeout(() => element.classList.remove('scroll-target'), 4000);
  };

  return (
    <div className="app">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Navbar scrolled={scrolled} hidden={hidden} scrollTo={scrollTo} />
      <main id="contenu" tabIndex={-1}>
        <Hero scrollTo={scrollTo} />
        <TrustBar />
        <Services scrollTo={scrollTo} />
        <HowItWorks />
        <ShopCategories />
        <Applications />
        <Faq />
        <Contact />
        <AboutSection />
      </main>
      <Footer />
      <aside aria-label="Contact rapide et retour en haut de page">
        <WhatsAppFloat />
        {showScrollTop && (
          <button
            className="scroll-top-button"
            type="button"
            aria-label="Remonter en haut de la page"
            title="Remonter en haut"
            onClick={() => window.scrollTo({ top: 0, behavior: scrollBehavior() })}
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </button>
        )}
      </aside>
    </div>
  );
}

export default App;
