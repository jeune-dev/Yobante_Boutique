// src/components/sections/Contact.jsx
import { useRef, useState } from 'react';
import { Mail, MessageCircle, Phone, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

// Délai maximal d'attente de l'API avant d'afficher une erreur.
const REQUEST_TIMEOUT_MS = 15000;
const MSG_GENERIC = 'Une erreur s\u2019est produite. Réessayez dans un instant.';

const Contact = ({ variant = 'rek' }) => {
  const isBoutique = variant === 'boutique';
  const phoneNumber = import.meta.env.VITE_CONTACT_PHONE;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '');
  const [formData, setFormData] = useState({ prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(MSG_GENERIC);
  // Verrou synchrone : l'état React ne se met à jour qu'au rendu suivant, un double clic ou
  // deux « Entrée » rapprochés enverraient sinon deux demandes.
  const sending = useRef(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const fail = (message) => {
    setErrorMsg(message);
    setStatus('error');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending.current) return;

    const payload = {
      source: isBoutique ? 'boutique' : 'rek',
      prenom: formData.prenom.trim(),
      nom: formData.nom.trim(),
      email: formData.email.trim(),
      telephone: formData.telephone.trim(),
      sujet: formData.sujet,
      message: formData.message.trim(),
    };
    // Mêmes règles que l'API : un champ rempli d'espaces passe la validation du navigateur.
    if (!payload.prenom || !payload.nom || payload.message.length < 5) {
      fail('Merci de renseigner votre prénom, votre nom et un message d\u2019au moins 5 caractères.');
      return;
    }

    // En production l'URL de l'API doit être fournie au build (VITE_API_URL) : on ne retombe
    // sur localhost qu'en développement, jamais dans le bundle déployé.
    const apiUrl = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5001/api/v1' : '')).replace(/\/$/, '');
    if (!apiUrl) { fail(MSG_GENERIC); return; }

    sending.current = true;
    setStatus('sending');
    // Sans délai maximal, une API qui ne répond pas laisserait « Envoi en cours… » indéfiniment.
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch(`${apiUrl}/public/demandes-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '' });
      } else if (res.status === 429) {
        fail(data.message || 'Trop de messages envoyés. Réessayez plus tard.');
      } else if (res.status === 400) {
        fail('Vérifiez les informations saisies (adresse email, message…) puis réessayez.');
      } else {
        fail(MSG_GENERIC);
      }
    } catch (err) {
      fail(err.name === 'AbortError'
        ? 'Le serveur met trop de temps à répondre. Réessayez dans un instant.'
        : 'Envoi impossible : vérifiez votre connexion puis réessayez.');
    } finally {
      clearTimeout(timer);
      sending.current = false;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-details sr-l">
            <div className="section-tag">
              <span className="tag-line"></span>
              Contact
            </div>
            <h2 className="contact-title">Contactez-nous</h2>
            <p className="contact-description">
              {isBoutique ? 'Notre équipe vous accompagne pour vos achats et vos livraisons au Sénégal.' : 'Notre service client est disponible pour répondre à toutes vos questions.'}
            </p>

            <div className="contact-info-list">
              {phoneNumber && <div className="contact-item">
                <div className="contact-icon"><Phone size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>Téléphone</strong>
                  <a href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`}>{phoneNumber}</a>
                </div>
              </div>}

              {whatsappNumber && <div className="contact-item">
                <div className="contact-icon"><MessageCircle size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>WhatsApp</strong>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    {import.meta.env.VITE_WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>}

              <div className="contact-item">
                <div className="contact-icon"><Mail size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>Email</strong>
                  <a href="mailto:contact@yobanteboutique.com">contact@yobanteboutique.com</a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="form-wrapper sr-r">
            <div className="form-glow"></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Avez-vous une question ?</h3>
                <p>Notre équipe vous répondra dans les plus brefs délais.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="prenom" maxLength={80} placeholder="Prénom" aria-label="Prénom" autoComplete="given-name"
                    value={formData.prenom} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="nom" maxLength={80} placeholder="Nom" aria-label="Nom" autoComplete="family-name"
                    value={formData.nom} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <input type="email" name="email" maxLength={150} pattern="[^@\s]+@[^@\s]+\.[^@\s]{2,}" title="Adresse email valide, par exemple nom@domaine.com" placeholder="Votre adresse email" aria-label="Adresse email" autoComplete="email" inputMode="email"
                  value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <div className="phone-input-wrapper">
                  <span className="phone-prefix">
                    <Phone size={14} strokeWidth={2} />
                  </span>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    name="telephone"
                    placeholder="Votre numéro de téléphone ou WhatsApp"
                    aria-label="Numéro de téléphone ou WhatsApp"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="phone-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <select name="sujet" aria-label="Sujet de votre demande" value={formData.sujet} onChange={handleChange} required>
                  <option value="" disabled hidden>Sélectionner un sujet</option>
                  {!isBoutique && <>
                    <option value="Demande de devis - Produit max 30kg">Demande de devis - Produit max 30kg</option>
                    <option value="Demande de devis - Gros colis">Demande de devis - Gros colis</option>
                    <option value="Envoi de documents">Envoi de documents</option>
                  </>}
                  {isBoutique && <>
                    <option value="Commande boutique">Commande boutique</option>
                    <option value="Livraison au Sénégal">Livraison au Sénégal</option>
                    <option value="Produit indisponible">Produit indisponible</option>
                  </>}
                  <option value="Autres">Autres</option>
                </select>
              </div>

              <div className="form-group">
                <textarea name="message" rows="4" maxLength={3000} placeholder="Décrivez votre demande..." aria-label="Message"
                  value={formData.message} onChange={handleChange} required></textarea>
              </div>

              {status === 'success' && (
                <div className="feedback success" role="status">
                  <CheckCircle size={15} strokeWidth={2} style={{ marginRight: '7px', verticalAlign: 'middle' }} />
                  Message envoyé avec succès.
                </div>
              )}

              {status === 'error' && (
                <div className="feedback error" role="alert">
                  <XCircle size={15} strokeWidth={2} style={{ marginRight: '7px', verticalAlign: 'middle' }} />
                  {errorMsg}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours...' : (
                  <>Envoyer le message<ArrowRight size={16} strokeWidth={2} style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative; overflow: hidden;
          padding: var(--section-y) 0; background: #f8fbff;
        }

        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.15fr;
          gap: clamp(40px, 6vw, 70px); align-items: center;
        }

        .contact-section .bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: 0.3; pointer-events: none;
        }

        .contact-section .glow-1 { width: 400px; height: 400px; background: #1e3a8a; top: -90px; left: -90px; }
        .contact-section .glow-2 { width: 320px; height: 320px; background: #F5C518; bottom: -90px; right: -70px; }

        .contact-section .section-tag {
          display: inline-flex; align-items: center; gap: 12px;
          color: #1e3a8a; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 20px; font-size: 12px;
        }

        .tag-line { width: 28px; height: 2px; background: #F5C518; }

        .contact-title {
          font-size: var(--fs-h2);
          line-height: 1.12; color: #1e3a8a; font-weight: 900; margin-bottom: 18px;
        }

        .contact-description {
          color: #64748b; font-size: 16px; line-height: 1.75;
          margin-bottom: 36px; max-width: 440px;
        }

        .contact-info-list { display: flex; flex-direction: column; gap: 16px; }

        .contact-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 18px;
          background: rgba(255,255,255,0.82);
          border-radius: 20px;
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.6);
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s ease;
        }

        .contact-item:hover {
          transform: translateX(8px);
          box-shadow: 0 12px 32px rgba(30,58,138,.09);
          border-color: rgba(30,58,138,.12);
        }

        .contact-icon {
          width: 54px; height: 54px; border-radius: 16px;
          background: linear-gradient(135deg, #EEF2FF, white);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 18px rgba(30,58,138,.08); flex-shrink: 0;
          border: 1px solid rgba(30,58,138,.08);
        }

        .contact-text { display: flex; flex-direction: column; }

        .contact-text strong { color: #1e3a8a; font-size: 14px; margin-bottom: 3px; }

        .contact-text a,
        .contact-text span {
          color: #475569; text-decoration: none; font-size: 15px;
        }

        .contact-text a:hover { color: #1e3a8a; }

        /* FORM */
        .form-wrapper {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(20px);
          border-radius: 30px; padding: 38px;
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 20px 56px rgba(30,58,138,.1);
        }

        .form-glow {
          position: absolute; width: 240px; height: 240px;
          background: rgba(30,58,138,.08); border-radius: 50%;
          filter: blur(70px); top: -90px; right: -70px;
        }

        .form-header { margin-bottom: 26px; }

        .form-header h3 { color: #1e3a8a; font-size: 24px; font-weight: 900; margin-bottom: 6px; }
        .form-header p  { color: #64748b; font-size: 14px; margin-bottom: 14px; }

        .form-contact-shortcuts {
          display: flex; gap: 10px; flex-wrap: wrap;
        }

        .shortcut-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 14px; border-radius: 50px;
          font-size: 13px; font-weight: 700;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .shortcut-btn:hover { opacity: 0.85; }

        .shortcut-phone { background: rgba(30,58,138,.1); color: #1e3a8a; }
        .shortcut-wa    { background: rgba(37,211,102,.15); color: #15803d; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        .form-row .form-group { margin-bottom: 0; }
        .form-group { margin-bottom: 14px; }

        input, select, textarea {
          width: 100%; min-height: 48px; padding: 14px 16px; border: none;
          border-radius: 14px; background: #f8fafc;
          font-size: 14px; outline: none; transition: 0.25s;
          text-overflow: ellipsis;
          font-family: inherit;
          border: 1px solid transparent;
        }

        input:focus, select:focus, textarea:focus {
          background: white;
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30,58,138,.08);
        }

        /* PHONE INPUT */
        .phone-input-wrapper {
          display: flex; align-items: center;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid transparent;
          transition: 0.25s;
          overflow: hidden;
        }

        .phone-input-wrapper:focus-within {
          background: white;
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30,58,138,.08);
        }

        .phone-prefix {
          display: flex; align-items: center; justify-content: center;
          padding: 0 14px;
          color: #25D366;
          flex-shrink: 0;
        }

        .phone-input {
          flex: 1; border: none !important;
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          padding: 14px 16px 14px 4px !important;
        }

        .phone-input:focus {
          background: transparent !important;
          border-color: transparent !important;
          box-shadow: none !important;
        }

        textarea { resize: none; min-height: 120px; text-overflow: clip; }

        /* Flèche du select dessinée en CSS : même rendu sur tous les navigateurs
           et place réservée pour qu'un long libellé ne passe pas dessous. */
        select {
          appearance: none; -webkit-appearance: none;
          padding-right: 44px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%231e3a8a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          cursor: pointer;
        }
        select:focus { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%231e3a8a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E"); }

        /* iOS zoome automatiquement sur tout champ < 16px : on évite ce saut. */
        @media (max-width: 900px), (pointer: coarse) {
          input, select, textarea { font-size: 16px; }
        }

        /* Liens de contact : zone tactile confortable au doigt, et sur toute fenêtre étroite
           (une cible de 21 px est trop petite même à la souris : WCAG 2.5.8). */
        @media (max-width: 900px), (pointer: coarse) {
          .contact-text a { display: inline-flex; align-items: center; min-height: var(--tap); }
        }

        .feedback {
          padding: 12px 14px; border-radius: 12px;
          margin-bottom: 14px; font-size: 13px; font-weight: 600;
        }

        .success { background: #ecfdf5; color: #166534; }
        .error   { background: #fef2f2; color: #991b1b; }

        .submit-btn {
          width: 100%; min-height: 52px; border: none; padding: 16px; border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a 0%, #2a52c9 100%);
          color: white;
          font-size: 15px; font-weight: 800; cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 28px rgba(30,58,138,.25);
          letter-spacing: 0.2px;
        }

        .submit-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(30,58,138,.28); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        @media (max-width: 980px) { .contact-grid { grid-template-columns: 1fr; gap: 52px; } }

        @media (max-width: 520px) {
          .form-wrapper { padding: 26px 18px; }
          .form-row { grid-template-columns: 1fr; }
          .contact-title { font-size: 38px; }
          .form-header h3 { font-size: 22px; }
          .contact-item { padding: 14px; gap: 12px; }
          .contact-icon { width: 46px; height: 46px; border-radius: 14px; }
          .contact-text a, .contact-text span { font-size: 14px; overflow-wrap: anywhere; }
        }

        @media (max-width: 360px) {
          .form-wrapper { padding: 22px 14px; border-radius: 22px; }
          .contact-title { font-size: 32px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;

