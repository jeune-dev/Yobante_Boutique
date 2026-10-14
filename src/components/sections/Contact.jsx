// Section Contact — identique sur YOBANTÉ Boutique et YOBANTÉ REK.
// Les coordonnées, le texte d'introduction et les sujets viennent de src/data/site.js.
import { useRef, useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Clock, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { site } from '../../data/site';
import { phoneHref, whatsappHref, emailHref, openLegal } from '../../data/links';

const REQUEST_TIMEOUT_MS = 15000;
const MSG_GENERIC = 'Une erreur s’est produite. Réessayez dans un instant.';
const EMPTY_FORM = { prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '' };

const INFOS = [
  { icon: Phone, label: 'Téléphone', value: site.phone, href: phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: site.whatsapp, href: whatsappHref, external: true },
  { icon: Mail, label: 'Email', value: site.email, href: emailHref },
  { icon: MapPin, label: 'Adresse', value: site.address },
  { icon: Clock, label: 'Disponibilités', value: site.hours },
];

const InfoValue = ({ value, href, external }) => {
  if (!value) return <span className="contact-empty" aria-label="Non renseigné">—</span>;
  if (!href) return <span>{value}</span>;
  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>
    : <a href={href}>{value}</a>;
};

const Contact = () => {
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
      source: site.source,
      prenom: formData.prenom.trim(),
      nom: formData.nom.trim(),
      email: formData.email.trim(),
      telephone: formData.telephone.trim(),
      sujet: formData.sujet,
      message: formData.message.trim(),
    };
    // Mêmes règles que l'API : un champ rempli d'espaces passe la validation du navigateur.
    if (!payload.prenom || !payload.nom || payload.message.length < 5) {
      fail('Merci de renseigner votre prénom, votre nom et un message d’au moins 5 caractères.');
      return;
    }

    // En production l'URL de l'API est fournie au build (VITE_API_URL) : localhost seulement en développement.
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
    <section id="contact" className="contact-section yb-block">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-details sr-l">
            <p className="yb-eyebrow">Contact</p>
            <h2 className="yb-title contact-title">Contactez-nous</h2>
            <p className="contact-description">{site.contactIntro}</p>

            <ul className="contact-info-list">
              {INFOS.map(({ icon: Icon, label, value, href, external }) => (
                <li className="contact-item" key={label}>
                  <span className="contact-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <div className="contact-text">
                    <strong>{label}</strong>
                    <InfoValue value={value} href={href} external={external} />
                  </div>
                </li>
              ))}
            </ul>

            {whatsappHref && (
              <a className="contact-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                Discuter sur WhatsApp
              </a>
            )}
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
                {site.subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
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

              <p className="contact-note">
                Vos informations servent uniquement à répondre à votre demande.{' '}
                <button type="button" aria-haspopup="dialog" onClick={() => openLegal('confidentialite')}>
                  Politique de confidentialité
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
