// src/components/layout/TrustBar.jsx
import { Truck, MessageCircle, Lock, Smartphone, Zap } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: <Truck size={18} strokeWidth={1.8} color="white" />,
    text: 'Livraison France ↔ Sénégal',
  },
  {
    icon: <MessageCircle size={18} strokeWidth={1.8} color="white" />,
    text: 'Support en ligne',
  },
  {
    icon: <Lock size={18} strokeWidth={1.8} color="white" />,
    text: 'Paiement 100% sécurisé',
  },
  {
    icon: <Smartphone size={18} strokeWidth={1.8} color="white" />,
    text: 'Application iOS & Android',
  },
  {
    icon: <Zap size={18} strokeWidth={1.8} color="white" />,
    text: 'Expédition rapide',
  },
];

const TrustBar = () => {
  return (
    <section className="trust-wrapper">
      <div className="top-gradient"></div>

      <div className="container">
        <div className="trust-bar">
          <div className="glow glow-left"></div>
          <div className="glow glow-right"></div>

          <div className="trust-track">
            {TRUST_ITEMS.map((item, index) => (
              <div
                className="trust-item"
                key={index}
              >
                <div className="icon-box">
                  {item.icon}
                </div>
                <span className="trust-text">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .trust-wrapper {
          position: relative;
          padding: 26px 0;
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            #f8fafc 100%
          );
          overflow: hidden;
        }

        .top-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #1E3A8A,
            #F5C518,
            #1E3A8A,
            transparent
          );
          opacity: 0.8;
        }

        .trust-bar {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          padding: 18px 0;
        }

        .glow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: 0;
        }

        .glow-left {
          left: -80px;
          background: #1E3A8A;
        }

        .glow-right {
          right: -80px;
          background: #F5C518;
        }

        /* Rangée statique : cinq repères courts n'ont pas besoin de défiler. */
        .trust-track {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px 8px;
          padding: 0 6px;
        }

        .trust-wrapper .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }

        .icon-box {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #1E3A8A,
            #152E70
          );
          color: white;
          font-size: 18px;
          box-shadow: 0 8px 18px rgba(30, 58, 138, 0.2);
          flex-shrink: 0;
        }

        .trust-text {
          font-size: 13px;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.2px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .trust-wrapper {
            padding: 18px 0;
          }

          .trust-bar {
            border-radius: 18px;
            padding: 14px 0;
          }

          .trust-track { gap: 10px; padding: 0 14px; }

          .trust-wrapper .trust-item {
            padding: 10px 14px;
          }

          .icon-box {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            font-size: 16px;
          }

          .trust-text {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
