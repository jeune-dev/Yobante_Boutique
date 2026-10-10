import { useRef, useState } from 'react';
import { Mail, MessageCircle, Phone, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const REQUEST_TIMEOUT_MS = 15000;
const MSG_GENERIC = 'Une erreur s’est produite. Réessayez dans un instant.';
const EMPTY_FORM = { prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '' };

const Contact = () => {
  const phoneNumber = import.meta.env.VITE_CONTACT_PHONE;
  const whatsappDisplay = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappNumber = whatsappDisplay?.replace(/\D/g, '');
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState(MSG_GENERIC);
  // Verrou synchrone contre le double envoi (double clic, Entrée répétée).
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
      source: 'boutique',
      prenom: formData.prenom.trim(),
      nom: formData.nom.trim(),
      email: formData.email.trim(),
      telephone: formData.telephone.trim(),
      sujet: formData.sujet,
      message: formData.message.trim(),
    };
    if (!payload.prenom || !payload.nom || payload.message.length < 5) {
      fail('Merci de renseigner votre prénom, votre nom et un message d’au moins 5 caractères.');
      return;
    }

    const apiUrl = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5001/api/v1' : '')).replace(/\/$/, '');
    if (!apiUrl) { fail(MSG_GENERIC); return; }

    sending.current = true;
    setStatus('sending');
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
        setFormData(EMPTY_FORM);
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
      <div className="container">
        <div className="contact-grid">
          <div className="contact-details sr-l">
            <p className="sec-eyebrow">Contact</p>
            <h2 className="sec-title contact-title">Contactez-nous</h2>
            <p className="contact-description">
              Notre équipe vous accompagne pour vos achats et vos livraisons au Sénégal.
            </p>

            <div className="contact-info-list">
              {phoneNumber && (
                <div className="contact-item">
                  <span className="contact-icon"><Phone size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <div className="contact-text">
                    <strong>Téléphone</strong>
                    <a href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`}>{phoneNumber}</a>
                  </div>
                </div>
              )}

              {whatsappNumber && (
                <div className="contact-item">
                  <span className="contact-icon"><MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <div className="contact-text">
                    <strong>WhatsApp</strong>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">{whatsappDisplay}</a>
                  </div>
                </div>
              )}

              <div className="contact-item">
                <span className="contact-icon"><Mail size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                <div className="contact-text">
                  <strong>Email</strong>
                  <a href="mailto:contact@yobanteboutique.com">contact@yobanteboutique.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="form-wrapper sr-r">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Avez-vous une question ?</h3>
                <p>Notre équipe vous répondra dans les plus brefs délais.</p>
              </div>

              <div className="form-row">
                <input type="text" name="prenom" maxLength={80} placeholder="Prénom" aria-label="Prénom" autoComplete="given-name"
                  value={formData.prenom} onChange={handleChange} required />
                <input type="text" name="nom" maxLength={80} placeholder="Nom" aria-label="Nom" autoComplete="family-name"
                  value={formData.nom} onChange={handleChange} required />
              </div>

              <input type="email" name="email" maxLength={150} pattern="[^@\s]+@[^@\s]+\.[^@\s]{2,}" title="Adresse email valide, par exemple nom@domaine.com"
                placeholder="Votre adresse email" aria-label="Adresse email" autoComplete="email" inputMode="email"
                value={formData.email} onChange={handleChange} required />

              <div className="phone-field">
                <Phone size={15} strokeWidth={2} aria-hidden="true" />
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  name="telephone"
                  placeholder="Votre numéro de téléphone ou WhatsApp"
                  aria-label="Numéro de téléphone ou WhatsApp"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>

              <select name="sujet" aria-label="Sujet de votre demande" value={formData.sujet} onChange={handleChange} required>
                <option value="" disabled hidden>Sélectionner un sujet</option>
                <option value="Commande boutique">Commande boutique</option>
                <option value="Livraison au Sénégal">Livraison au Sénégal</option>
                <option value="Produit indisponible">Produit indisponible</option>
                <option value="Autres">Autres</option>
              </select>

              <textarea name="message" rows="4" maxLength={3000} placeholder="Décrivez votre demande..." aria-label="Message"
                value={formData.message} onChange={handleChange} required></textarea>

              {status === 'success' && (
                <div className="feedback success" role="status">
                  <CheckCircle size={16} strokeWidth={2} aria-hidden="true" />
                  Message envoyé avec succès.
                </div>
              )}

              {status === 'error' && (
                <div className="feedback error" role="alert">
                  <XCircle size={16} strokeWidth={2} aria-hidden="true" />
                  {errorMsg}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours...' : (
                  <>Envoyer le message<ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-section { padding: var(--section-y) 0; background: var(--white); }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          align-items: center;
          gap: clamp(40px, 6vw, 80px);
        }

        .contact-title { margin-bottom: 16px; }
        .contact-description {
          max-width: 440px;
          margin-bottom: 32px;
          color: var(--text-light);
          font-size: 16px;
          line-height: 1.7;
        }

        .contact-info-list { display: flex; flex-direction: column; gap: 12px; max-width: 460px; }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 18px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--white);
          transition: border-color 0.2s ease;
        }
        .contact-item:hover { border-color: var(--blue-100); }
        .contact-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: var(--blue-50);
          color: var(--blue);
        }
        .contact-text { display: flex; flex-direction: column; min-width: 0; }
        .contact-text strong { margin-bottom: 2px; color: var(--blue); font-size: 13.5px; font-weight: 700; }
        .contact-text a { color: var(--text-mid); font-size: 15px; text-decoration: none; overflow-wrap: anywhere; }
        .contact-text a:hover { color: var(--blue); text-decoration: underline; }

        .form-wrapper {
          padding: clamp(24px, 3vw, 40px);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          background: var(--white);
          box-shadow: var(--shadow-lg);
        }

        .contact-form { display: flex; flex-direction: column; gap: 12px; }
        .form-header { margin-bottom: 12px; }
        .form-header h3 { margin-bottom: 6px; color: var(--blue); font-size: 22px; font-weight: 800; }
        .form-header p { color: var(--text-light); font-size: 14px; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          min-height: 50px;
          padding: 14px 16px;
          border: 1px solid var(--border);
          border-radius: 12px;
          outline: none;
          background: var(--surface);
          color: var(--text-dark);
          font-size: 14.5px;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder { color: #8A96A8; }
        .contact-form input:hover,
        .contact-form select:hover,
        .contact-form textarea:hover { border-color: var(--blue-100); }
        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          border-color: var(--blue);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(5, 61, 143, 0.12);
        }

        .phone-field { position: relative; }
        .phone-field svg { position: absolute; top: 50%; left: 16px; color: var(--text-light); transform: translateY(-50%); pointer-events: none; }
        .contact-form .phone-field input { padding-left: 42px; text-overflow: ellipsis; }

        .contact-form textarea { min-height: 128px; resize: vertical; }

        .contact-form select {
          padding-right: 44px;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23053D8F' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          cursor: pointer;
        }
        .contact-form select:invalid { color: #8A96A8; }
        .contact-form select option { color: var(--text-dark); }

        /* Évite le zoom automatique d'iOS sur les champs < 16px */
        @media (max-width: 900px), (pointer: coarse) {
          .contact-form input, .contact-form select, .contact-form textarea { font-size: 16px; }
          .contact-text a { display: inline-flex; align-items: center; min-height: var(--tap); }
        }

        .feedback {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 600;
        }
        .feedback svg { flex-shrink: 0; }
        .feedback.success { background: #ECFDF5; color: #166534; }
        .feedback.error { background: #FEF2F2; color: #991B1B; }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 52px;
          margin-top: 4px;
          border: 0;
          border-radius: 12px;
          background: var(--blue);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .submit-btn:hover { background: var(--blue-dark); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        @media (max-width: 980px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        @media (max-width: 520px) {
          .form-row { grid-template-columns: 1fr; }
          .form-wrapper { border-radius: 22px; }
          .contact-item { gap: 12px; padding: 14px; }
          .contact-text a { font-size: 14px; }
        }
      ` }} />
    </section>
  );
};

export default Contact;
