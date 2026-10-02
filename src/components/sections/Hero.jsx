// src/components/sections/Hero.jsx

import { useState } from 'react';
import {
  Package, ShoppingBag, Plane, Ship, ArrowRight,
  ShoppingCart, Smartphone, ShieldCheck, Truck, Headphones,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import deliveryPhone from '../../assets/images/mockeup.png';
import deliveryPhone2 from '../../assets/images/mockeup2.png';
import airpodsProduct from '../../assets/images/Airpods.png';
import fridgeProduct from '../../assets/images/frigo.png';
import microwaveProduct from '../../assets/images/micro-onde.png';

const AppStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z"/>
  </svg>
);

const Hero = ({ scrollTo, variant = 'rek' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Expédiez vos colis depuis chez vous !",
      buttonText: "En savoir plus",
      buttonLink: "services",
      image: deliveryPhone2,
      bgColor: "#F5C518",
      textColor: "#1E3A8A",
      statColor: "#1E3A8A",
      labelColor: "rgba(30,58,138,0.65)",
      badgeBg: "#ffffff",
      badgeTextColor: "#1E3A8A",
      dotColor: "rgba(0,0,0,.15)",
      dotActiveColor: "#1E3A8A",
    },
    {
      id: 2,
      title: "Vos grandes marques, à prix réduits.",
      buttonText: "Découvrir notre boutique",
      buttonLink: "app-boutique",
      image: deliveryPhone,
      bgColor: "linear-gradient(135deg, #0B2F9A 0%, #1E3A8A 60%, #12308A 100%)",
      textColor: "#ffffff",
      statColor: "#ffffff",
      labelColor: "rgba(255,255,255,0.65)",
      badgeBg: "#F5C518",
      badgeTextColor: "#1E3A8A",
      dotColor: "rgba(255,255,255,.3)",
      dotActiveColor: "#F5C518",
    },
  ];

  const visibleSlides = slides.filter((slide) => variant === 'rek' ? slide.id === 1 : slide.id === 2);
  const current = visibleSlides[currentSlide] || visibleSlides[0];

  return (
    <section id="hero" className="hero">

      {/* BACKGROUND */}
      <motion.div
        className="hero-bg"
        animate={{ background: current.bgColor }}
        transition={{ duration: 0.6 }}
      />
      <div className="hero-glow"></div>
      {current.id === 2 && <div className="bt-corner" aria-hidden="true" />}

      {/* CONTENT */}
      <div className="hero-container">

        {/* TABS */}
        <div className="hero-tabs" style={{ display: visibleSlides.length > 1 ? undefined : 'none' }}>
          <div className="tabs-wrapper">
            <button className={`tab-btn ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}>
              <Package size={14} strokeWidth={1.8} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
               Yobanté Rek
            </button>
            <button className={`tab-btn ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}>
              <ShoppingBag size={14} strokeWidth={1.8} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
               Yobanté Boutique
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55 }}
          >
            {/* TEXT */}
            <div className="hero-text">

              {/* BADGE */}
              {current.id === 2 ? (
                <div className="hero-badge bt-badge">
                  <ShoppingCart size={14} strokeWidth={2.2} />
                  <span>Boutique officielle sur mobile</span>
                </div>
              ) : (
                <div className="hero-badge" style={{ background: current.badgeBg }}>
                  <span className="badge-dot"></span>
                  <span style={{ color: current.badgeTextColor }}>
                    Expédition de colis - Boutique en ligne
                  </span>
                </div>
              )}

              {/* TITLE */}
              <h1 className={`hero-title ${current.id === 2 ? 'bt-title' : ''}`} style={{ color: current.textColor }}>
                {current.id === 2 ? (
                  <>
                    <span className="bt-line">Vos grandes</span>
                    <span className="bt-line">marques,</span>
                    <span className="bt-line bt-accent">à prix réduits.</span>
                  </>
                ) : (
                  <>
                    <span className="title-main">Expédiez vos</span>
                    <span className="title-line-rek"><span className="title-colis">colis</span><span className="title-brand rek-title-brand">depuis chez vous !</span></span>
                    <span className="title-footer rek-title-footer"><span className="title-footer-ak">AK</span><span className="title-footer-name">YOBANTE REK</span></span>
                  </>
                )}
              </h1>

              {current.id === 2 && (
                <p className="bt-sub">
                  Retrouvez vos produits préférés, découvrez nos offres exclusives et
                  commandez facilement depuis l'application YOBANTE.
                </p>
              )}

              {current.id === 1 && (
                <div className="shipping-methods">
                  <div className="method-card">
                    <span className="method-icon"><Plane size={22} strokeWidth={1.5} color="#1E3A8A" /></span>
                    <span className="method-name">Fret Aérien</span>
                  </div>
                  <div className="method-card">
                    <span className="method-icon"><Ship size={22} strokeWidth={1.5} color="#1E3A8A" /></span>
                    <span className="method-name">Fret Maritime</span>
                  </div>
                  <div className="method-card">
                    <span className="method-icon"><Package size={22} strokeWidth={1.5} color="#1E3A8A" /></span>
                    <span className="method-name">Colis GP</span>
                  </div>
                </div>
              )}

              {/* BUTTONS */}
              {current.id === 2 ? (
                <div className="bt-actions">
                  <button className="hero-btn bt-btn-main" onClick={() => scrollTo(current.buttonLink)}>
                    <ShoppingCart size={15} strokeWidth={2.2} style={{ marginRight: 8 }} />
                    {current.buttonText}
                    <ArrowRight size={15} strokeWidth={2} style={{ marginLeft: 8 }} />
                  </button>
                  <button className="hero-btn bt-btn-outline" onClick={() => scrollTo('applications')}>
                    <Smartphone size={15} strokeWidth={2} style={{ marginRight: 8 }} />
                    Télécharger l'application
                  </button>
                </div>
              ) : (
                <button
                  className={`hero-btn ${current.id === 1 ? 'expedition' : ''}`}
                  onClick={() => scrollTo(current.buttonLink)}
                >
                  {current.buttonText}
                  <ArrowRight size={15} strokeWidth={2} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </button>
              )}

              {/* STORES */}
              <div className="store-buttons">
                <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`store-btn ${current.id === 1 ? 'appstore' : 'store-black'}`}>
                  <AppStoreIcon />
                  <div className="store-text">
                    <small>Télécharger sur</small>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`store-btn ${current.id === 1 ? 'play-gold' : 'store-black'}`}
                >
                  <PlayStoreIcon />
                  <div className="store-text">
                    <small>Disponible sur</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>

            </div>

            {/* IMAGE */}
            <motion.div className="hero-image">
              {current.id === 2 && (
                <div className="boutique-scene" aria-hidden="true">
                  <div className="bt-blob" />
                  <div className="phone-frame">
                    <img src={current.image} alt="Application mobile" />
                  </div>

                  <div className="boutique-product-scene">
                    <img className="boutique-product product-airpods" src={airpodsProduct} alt="" />
                    <img className="boutique-product product-microwave" src={microwaveProduct} alt="" />
                    <img className="boutique-product product-fridge" src={fridgeProduct} alt="" />
                    <span className="product-discount discount-airpods">-20%</span>
                    <span className="product-discount discount-microwave">-10%</span>
                    <span className="product-discount discount-fridge">-25%</span>
                  </div>
                </div>
              )}

              {current.id !== 2 && <img src={current.image} alt="Application mobile" />}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* FEATURES BAR */}
        {current.id === 2 && (
          <div className="bt-features">
            <div className="bt-feature">
              <ShieldCheck size={30} color="#F5C518" strokeWidth={1.8} />
              <div><strong>Produits de marque</strong><span>Les meilleures marques au meilleur prix</span></div>
            </div>
            <div className="bt-feature">
              <Truck size={30} color="#F5C518" strokeWidth={1.8} />
              <div><strong>Livraison rapide</strong><span>Partout au Sénégal</span></div>
            </div>
            <div className="bt-feature">
              <ShieldCheck size={30} color="#F5C518" strokeWidth={1.8} />
              <div><strong>Paiement sécurisé</strong><span>En toute confiance</span></div>
            </div>
            <div className="bt-feature">
              <Headphones size={30} color="#F5C518" strokeWidth={1.8} />
              <div><strong>Service client</strong><span>Toujours à votre écoute</span></div>
            </div>
          </div>
        )}
      </div>

      {/* DOTS */}
      <div className="slide-dots">
        {visibleSlides.length > 1 && visibleSlides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            style={{
              background: currentSlide === index ? current.dotActiveColor : current.dotColor,
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <style>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: rgba(255,255,255,0.12);
          filter: blur(110px);
          border-radius: 50%;
          top: -130px;
          right: -80px;
          animation: floatGlow 8s ease-in-out infinite;
        }

        @keyframes floatGlow {
          0% { transform: translate(0,0); }
          50% { transform: translate(-50px,35px); }
          100% { transform: translate(0,0); }
        }

        .hero-tabs {
          position: absolute;
          top: 108px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        .tabs-wrapper {
          display: flex;
          gap: 6px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          padding: 5px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .tab-btn {
          border: none;
          padding: 10px 20px;
          border-radius: 14px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          background: transparent;
          color: rgba(255,255,255,0.85);
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          letter-spacing: 0.1px;
        }

        .tab-btn:hover:not(.active) { color: white; background: rgba(255,255,255,0.12); }

        .tab-btn.active {
          background: white;
          color: #1E3A8A;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
        }

        .hero-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1400px;
          padding: 140px 40px 52px;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .hero-text {
          flex: 0 0 46%;
          max-width: 560px;
          min-height: 490px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 16px;
          border-radius: 999px;
          margin-bottom: 22px;
          backdrop-filter: blur(10px);
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.5);
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.55); }
          60%  { box-shadow: 0 0 0 7px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        .hero-title {
          font-size: clamp(52px, 4.9vw, 112px);
          line-height: 0.9;
          font-weight: 900;
          margin-bottom: 26px;
          letter-spacing: -0.06em;
        }

        .title-main,
        .title-context,
        .title-brand {
          display: block;
          width: fit-content;
        }

        .title-main { color: #ffffff; }
        .title-context {
          margin: 0 0 -2px 18%;
          padding: 2px 8px 3px;
          background: #111111;
          color: #ffffff;
          font-size: .42em;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0;
        }
        .title-line-rek .rek-title-brand {
          margin-left: 18px;
          padding: 0;
          background: transparent;
          color: #ffffff;
        }
        .title-footer {
          display: block;
          width: fit-content;
          margin: 10px 0 0 16%;
          padding: 0;
          background: transparent;
          color: #F5C518;
          font-size: .42em;
          font-weight: 800;
          letter-spacing: .12em;
        }
        .title-footer { display: flex; align-items: center; gap: 8px; }
        .title-footer-ak {
          padding: 6px 16px 7px;
          background: #F5C518;
          color: #1E3A8A;
          border: 3px solid #1E3A8A;
          font-size: 1.65em;
          font-weight: 900;
          letter-spacing: .04em;
        }
        .title-footer-name { padding: 7px 16px 8px; background: #1E3A8A; }
        .rek-title-brand {
          display: inline;
          margin-left: 18px;
          padding: 0;
          background: transparent;
          color: #ffffff;
        }
        .title-line-rek { display: flex; align-items: baseline; width: max-content; max-width: 100%; white-space: nowrap; font-size: .78em; transform: translateX(-24px); }
        .title-colis { color: #ffffff; }
        .rek-title-footer { flex-direction: column; align-items: center; gap: 0; margin-left: 16%; }
        .rek-title-footer .title-footer-ak { font-size: 1.35em; }
        .title-brand {
          margin-left: 24%;
          padding: 0 12px 5px;
          background: #F5C518;
          color: #1E3A8A;
          line-height: .88;
          font-weight: 900;
        }

        /* ───────── BOUTIQUE : fond ───────── */
        .bt-corner {
          position: absolute;
          top: -260px;
          right: -180px;
          width: 620px;
          height: 620px;
          border-radius: 50%;
          background: #F5C518;
          z-index: 1;
        }

        /* ───────── BOUTIQUE : texte ───────── */
        .bt-badge {
          background: #F5C518;
          color: #1E3A8A;
          gap: 10px;
          font-weight: 700;
          font-size: 12px;
        }
        .hero-title.bt-title {
          letter-spacing: -0.04em;
          line-height: 1;
          font-size: clamp(48px, 5.4vw, 84px);
        }
        .bt-line { display: block; color: #ffffff; }
        .bt-accent { color: #F5C518; }
        .bt-sub {
          color: rgba(255,255,255,0.88);
          font-size: 16px;
          line-height: 1.55;
          max-width: 440px;
          margin: 0 0 26px;
        }

        /* ───────── BOUTIQUE : boutons ───────── */
        .bt-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 22px; }
        .bt-actions .hero-btn { margin-bottom: 0; display: inline-flex; align-items: center; padding: 14px 22px; font-size: 14px; }
        .bt-btn-main { background: #F5C518; color: #1E3A8A; }
        .bt-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.7);
          box-shadow: none;
        }
        .bt-btn-outline:hover { background: rgba(255,255,255,0.1); box-shadow: none; }

        .shipping-methods {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .method-card {
          background: white;
          padding: 16px 12px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(30,58,138,0.12);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1px solid rgba(30,58,138,0.06);
        }

        .method-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 16px 36px rgba(30,58,138,0.18);
          border-color: rgba(30,58,138,0.14);
        }

        .method-icon {
          display: block;
          margin-bottom: 8px;
        }

        .method-name {
          display: block;
          font-weight: 800;
          color: #1E3A8A;
          font-size: 12px;
          letter-spacing: 0.2px;
        }

        .hero-btn {
          border: none;
          padding: 15px 34px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          margin-bottom: 24px;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          background: #F5C518;
          color: #1E3A8A;
          width: fit-content;
          box-shadow: 0 10px 28px rgba(245,197,24,0.38);
          letter-spacing: 0.2px;
        }

        .hero-btn:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 16px 36px rgba(245,197,24,0.45); }

        .hero-btn.expedition {
          background: #1E3A8A;
          color: #F5C518;
          box-shadow: 0 10px 28px rgba(30,58,138,0.28);
        }

        .hero-btn.expedition:hover { box-shadow: 0 16px 36px rgba(30,58,138,0.38); }

        .store-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 15px;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          min-width: 165px;
        }

        .store-btn:hover { transform: translateY(-4px) scale(1.03); }

        .store-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .appstore   { background: #1E3A8A; color: white;   box-shadow: 0 6px 18px rgba(30,58,138,0.28); }
        .play-gold  { background: #ffffff; color: #1E3A8A; box-shadow: 0 6px 18px rgba(0,0,0,0.14); }
        .store-black {
          background: #000000;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.35);
          min-width: 140px;
          padding: 9px 14px;
          border-radius: 10px;
        }

        .store-btn small { font-size: 10px; opacity: 0.65; }
        .store-btn strong { font-size: 14px; font-weight: 800; letter-spacing: 0.1px; }

        .hero-stats { display: flex; gap: 36px; }

        .stat-number {
          font-size: 26px;
          font-weight: 900;
          display: block;
        }

        .stat-label { font-size: 12px; }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
          min-height: 610px;
          margin-left: 12px;
          overflow: visible;
        }

        .hero-image::before {
          content: '';
          position: absolute;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          filter: blur(70px);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        .hero-image > img {
          width: 100%;
          max-width: 460px;
          filter: drop-shadow(0 30px 55px rgba(0,0,0,0.28));
          transform: rotate(-8deg);
          transform-origin: center center;
          position: relative;
          z-index: 1;
        }

        /* ───────── BOUTIQUE : scène produits ───────── */
        .boutique-scene {
          position: relative;
          width: min(620px, 100%);
          height: 610px;
        }

        .bt-blob {
          position: absolute;
          right: -40px;
          top: 90px;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: #F5C518;
          z-index: 1;
        }

        .phone-frame {
          position: absolute;
          left: 50px;
          top: 10px;
          width: 330px;
          z-index: 3;
        }

        .phone-frame img {
          width: 100%;
          display: block;
          filter: drop-shadow(0 28px 54px rgba(0,0,0,0.4));
          transform: rotate(5deg);
          transform-origin: center center;
        }

        .boutique-product-scene {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
        }

        .boutique-product {
          position: absolute;
          display: block;
          filter: drop-shadow(0 14px 18px rgba(7,27,69,0.28));
          object-fit: contain;
        }

        .product-airpods   { width: 132px; left: -58px; top: 42px;     transform: rotate(-14deg); }
        .product-microwave { width: 215px; right: -14px; top: -4px;    transform: rotate(5deg); }
        .product-fridge    { width: 250px; right: -42px; bottom: -28px; transform: rotate(-2deg); }

        .product-discount {
          position: absolute;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: 8px;
          background: #F5C518;
          color: #1E3A8A;
          font-weight: 900;
          font-size: 20px;
          box-shadow: 0 6px 16px rgba(7,27,69,0.22);
        }

        .discount-airpods   { left: -12px;  top: 140px;    transform: rotate(-8deg); }
        .discount-microwave { right: 120px; top: -12px;   transform: rotate(7deg); }
        .discount-fridge    { right: 176px; bottom: 264px; transform: rotate(-5deg); }

        /* ───────── BOUTIQUE : barre d'avantages ───────── */
        .bt-features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 36px;
          padding-top: 8px;
        }

        .bt-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 20px;
          border-left: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
        }

        .bt-feature:first-child { border-left: none; padding-left: 0; }
        .bt-feature strong { display: block; font-size: 13px; font-weight: 700; }
        .bt-feature span { display: block; font-size: 11px; opacity: 0.7; margin-top: 2px; }

        .slide-dots {
          position: absolute;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .dot {
          width: 9px;
          height: 9px;
          border: none;
          border-radius: 999px;
          transition: 0.3s;
          cursor: pointer;
        }

        .dot.active { width: 30px; }

        /* ───────── RESPONSIVE ───────── */
        @media (max-width: 1024px) {
          .hero-container { padding: 190px 24px 74px; }
          .hero-content { gap: 28px; }
          .hero-image > img { max-width: 320px; }
        }

        @media (max-width: 980px) {
          .hero { min-height: auto; }

          .hero-tabs {
            position: relative;
            top: 0; left: 0; transform: none;
            margin: 0 auto 26px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-container { padding: 120px 24px 72px; }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 36px;
          }

          .hero-text {
            max-width: 600px;
            min-height: auto;
            align-items: center;
          }

          .hero-title { font-size: 48px; }
          .hero-title.bt-title { font-size: 44px; }

          .title-context { margin-left: 12%; }
          .title-brand { margin-left: 17%; }
          .title-footer { margin-left: 8%; }
          .rek-title-brand { margin-left: 12px; }
          .title-line-rek { font-size: .68em; transform: translateX(-10px); }
          .rek-title-footer { margin-left: 8%; }

          .bt-sub { margin-left: auto; margin-right: auto; }
          .bt-actions { justify-content: center; }
          .bt-features { grid-template-columns: repeat(2, 1fr); gap: 18px 0; }
          .bt-feature:nth-child(3) { border-left: none; padding-left: 0; }
          .boutique-scene { height: 520px; }
          .bt-corner { width: 420px; height: 420px; top: -200px; right: -160px; }

          .shipping-methods {
            grid-template-columns: repeat(2,1fr);
            width: 100%;
            max-width: 480px;
          }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 6px);
            max-width: calc(50% - 6px);
            margin: 0 auto;
          }

          .store-buttons { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-image > img { max-width: 280px; }
        }

        @media (max-width: 520px) {
          .hero-container { padding: 115px 16px 56px; }
          .hero-title { font-size: 30px; line-height: 1.17; margin-bottom: 20px; }
          .hero-title.bt-title { font-size: 34px; line-height: 1.05; }

          .shipping-methods {
            width: 100%; max-width: 320px;
            grid-template-columns: repeat(2,1fr);
            gap: 9px; margin-bottom: 20px;
          }

          .method-card { padding: 12px 8px; border-radius: 14px; }
          .method-name { font-size: 12px; }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 4.5px);
            max-width: calc(50% - 4.5px);
            margin: 0 auto;
          }

          .hero-btn { width: 100%; max-width: 320px; padding: 13px 18px; font-size: 15px; margin-bottom: 18px; }
          .bt-actions .hero-btn { justify-content: center; }

          .store-buttons {
            width: 100%; max-width: 320px;
            flex-direction: column; gap: 10px; margin-bottom: 26px;
          }

          .store-btn { width: 100%; min-height: 56px; }

          .hero-stats { width: 100%; max-width: 320px; justify-content: center; gap: 36px; }
          .stat-number { font-size: 26px; }
          .hero-image > img { max-width: 200px; }

          .boutique-scene { height: 420px; }
          .product-airpods   { width: 76px; left: -24px; top: 36px; }
          .product-microwave { width: 115px; right: -8px; top: 0; }
          .phone-frame { width: 200px; left: 30px; }
          .product-fridge    { width: 140px; right: -20px; bottom: -14px; }
          .product-discount { font-size: 14px; padding: 5px 8px; }
          .discount-airpods   { left: -12px; top: 96px; }
          .discount-microwave { right: 58px; top: -10px; }
          .discount-fridge    { right: 102px; bottom: 146px; }
          .bt-blob { width: 300px; height: 300px; top: 80px; }
          .bt-feature { padding: 0 10px; }
          .bt-feature strong { font-size: 12px; }
          .bt-feature span { display: none; }
        }

        @media (max-width: 380px) {
          .hero-container { padding-left: 12px; padding-right: 12px; }
          .hero-badge { max-width: 100%; text-align: left; font-size: 11px; padding: 7px 12px; }
          .hero-title { font-size: 27px; }
          .hero-title.bt-title { font-size: 30px; }
          .shipping-methods { max-width: 290px; }
          .hero-stats { gap: 20px; }
          .stat-number { font-size: 22px; }
          .stat-label { font-size: 11px; }
        }

      `}</style>
    </section>
  );
};

export default Hero;