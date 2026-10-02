// src/App.js
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import Services from './components/sections/Services';
import Applications from './components/sections/Applications';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';
import AboutSection from './components/sections/AboutSection';

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
      if (currentY > lastY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    const els = document.querySelectorAll('.sr, .sr-l, .sr-r');
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove('scroll-target');
      element.scrollIntoView({ behavior: 'smooth' });
      requestAnimationFrame(() => element.classList.add('scroll-target'));
      window.setTimeout(() => element.classList.remove('scroll-target'), 60000);
    }
  };

  return (
    <div className="app">
      <Navbar scrolled={scrolled} hidden={hidden} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} variant="boutique" />
      <TrustBar variant="boutique" />
      <Services scrollTo={scrollTo} variant="boutique" />
      <Applications variant="boutique" />
      <Faq variant="boutique" />
      <Contact scrollTo={scrollTo} variant="boutique" />
      <AboutSection variant="boutique" />
      <Footer />
      <WhatsAppFloat />
      {showScrollTop && (
        <button
          className="scroll-top-button"
          type="button"
          aria-label="Remonter en haut de la page"
          title="Remonter en haut"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}

export default App;