// Pages légales (Conditions générales, Confidentialité) en fenêtre modale,
// ouvertes depuis le pied de page. Identique sur YOBANTÉ Boutique et YOBANTÉ REK :
// le nom du site, l'activité et les coordonnées viennent de src/data/site.js,
// l'identité légale de src/data/legal.js. Une information non renseignée
// n'est pas affichée : rien n'est inventé.
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { site } from '../../data/site';
import { phoneHref, emailHref } from '../../data/links';
import { legalIdentity, legalUpdated } from '../../data/legal';

const TITLES = {
  conditions: 'Conditions générales d’utilisation',
  confidentialite: 'Politique de confidentialité',
};

const Mail = () => (emailHref ? <a href={emailHref}>{site.email}</a> : <>le formulaire de contact</>);

function Identity() {
  const rows = [
    ['Nom commercial', site.name],
    ['Raison sociale', legalIdentity.legalName],
    ['Immatriculation', legalIdentity.registration],
    ['Identifiant fiscal', legalIdentity.taxId],
    ['Siège', legalIdentity.address || site.address],
    ['E-mail', emailHref && <Mail key="mail" />],
    ['Téléphone', phoneHref && <a key="tel" href={phoneHref}>{site.phone}</a>],
    ['Directeur de la publication', legalIdentity.director],
    ['Hébergement', legalIdentity.host],
  ].filter(([, value]) => value);

  return (
    <dl className="legal-identity">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

const terms = [
  {
    id: 'objet',
    title: 'Objet',
    body: (
      <>
        <p>
          Les présentes conditions encadrent l’utilisation du site {site.name}, dédié à {site.activity}.
          En naviguant sur le site, vous les acceptez.
        </p>
        <p>
          Les commandes, expéditions et paiements passés via l’application {site.name} sont régis par
          les conditions propres à ces services, présentées et acceptées au moment de la commande.
        </p>
      </>
    ),
  },
  {
    id: 'editeur',
    title: 'Éditeur du site',
    body: (
      <>
        <p>Le site est édité par :</p>
        <Identity />
      </>
    ),
  },
  {
    id: 'acces',
    title: 'Accès au site',
    body: (
      <p>
        Le site est accessible gratuitement, sans inscription. {site.name} s’efforce de le maintenir
        disponible, mais ne peut garantir une disponibilité sans interruption : maintenance, mises à jour
        ou incidents techniques peuvent en suspendre l’accès.
      </p>
    ),
  },
  {
    id: 'contenus',
    title: 'Informations publiées',
    body: (
      <p>
        Les contenus du site présentent les services de {site.name} à titre informatif. Les délais,
        tarifs et descriptions indiqués sont donnés à titre indicatif et peuvent évoluer : seules les
        informations confirmées lors de la commande ou du devis engagent {site.name}.
      </p>
    ),
  },
  {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    body: (
      <>
        <p>
          Les textes, le logo, la charte graphique, les visuels et la structure du site appartiennent à
          YOBANTÉ. Toute reproduction, même partielle, sans autorisation écrite est interdite.
        </p>
        <p>
          Les marques et visuels de produits présentés restent la propriété de leurs titulaires respectifs.
        </p>
      </>
    ),
  },
  {
    id: 'liens',
    title: 'Liens vers d’autres sites',
    body: (
      <p>
        Le site renvoie vers des services tiers (WhatsApp, App Store, Google Play, autres sites YOBANTÉ).
        {' '}{site.name} n’a pas la maîtrise de leur contenu et n’en est pas responsable ; leurs propres
        conditions s’appliquent.
      </p>
    ),
  },
  {
    id: 'donnees',
    title: 'Données personnelles',
    body: (
      <p>
        Les informations transmises par le formulaire de contact sont traitées comme décrit dans notre
        politique de confidentialité, accessible en bas de chaque page.
      </p>
    ),
  },
  {
    id: 'droit',
    title: 'Droit applicable',
    body: (
      <p>
        Les présentes conditions sont soumises au droit {legalIdentity.law}. En cas de litige, une solution
        amiable sera recherchée en priorité ; à défaut, les juridictions compétentes seront saisies.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Nous contacter',
    body: <p>Pour toute question sur ces conditions : <Mail />.</p>,
  },
];

const privacy = [
  {
    id: 'responsable',
    title: 'Qui est responsable de vos données',
    body: (
      <>
        <p>{site.name} est responsable des données personnelles collectées sur ce site.</p>
        <Identity />
      </>
    ),
  },
  {
    id: 'collecte',
    title: 'Les données que nous recueillons',
    body: (
      <>
        <p>Uniquement celles que vous saisissez dans le formulaire « Contactez-nous » :</p>
        <ul>
          <li>prénom, nom, adresse e-mail, sujet et message (obligatoires) ;</li>
          <li>numéro de téléphone ou WhatsApp (facultatif).</li>
        </ul>
        <p>
          Le site ne demande ni inscription ni compte, et n’utilise ni outil de mesure d’audience, ni
          publicité, ni cookie de suivi. Les polices de caractères sont hébergées sur nos propres serveurs.
        </p>
      </>
    ),
  },
  {
    id: 'usage',
    title: 'À quoi elles servent',
    body: (
      <p>
        À répondre à votre demande : vous recontacter, comprendre votre besoin et, le cas échéant, vous
        adresser un devis. Elles ne sont ni vendues, ni louées, ni utilisées pour de la prospection sans
        votre accord. Le fondement de ce traitement est votre demande elle-même.
      </p>
    ),
  },
  {
    id: 'destinataires',
    title: 'Qui y a accès',
    body: (
      <>
        <p>
          L’équipe YOBANTÉ chargée de répondre aux demandes, et elle seule. Votre message est transmis
          à nos serveurs, puis traité par cette équipe.
        </p>
        <p>
          Si vous nous écrivez par WhatsApp ou par e-mail, ces échanges passent par les services
          correspondants, selon leurs propres règles de confidentialité.
        </p>
      </>
    ),
  },
  {
    id: 'conservation',
    title: 'Combien de temps nous les gardons',
    body: (
      <p>
        Le temps de traiter votre demande. Si elle n’est suivie d’aucune commande ni expédition, vos
        données sont supprimées au plus tard trois ans après notre dernier échange. Si vous devenez
        client, elles sont conservées pendant la durée de la relation et des obligations légales qui
        s’y rattachent.
      </p>
    ),
  },
  {
    id: 'droits',
    title: 'Vos droits',
    body: (
      <>
        <p>
          Conformément à la loi sénégalaise n° 2008-12 du 25 janvier 2008 sur la protection des données à
          caractère personnel et, pour les personnes situées dans l’Union européenne, au Règlement général
          sur la protection des données (RGPD), vous pouvez à tout moment :
        </p>
        <ul>
          <li>savoir quelles données nous détenons sur vous et en obtenir une copie ;</li>
          <li>les faire corriger ou compléter ;</li>
          <li>en demander la suppression ;</li>
          <li>vous opposer à leur utilisation.</li>
        </ul>
        <p>
          Écrivez-nous à <Mail /> : nous répondons dans les meilleurs délais. Si vous estimez que vos
          droits ne sont pas respectés, vous pouvez saisir la Commission de protection des données
          personnelles du Sénégal (
          <a href="https://www.cdp.sn" target="_blank" rel="noopener noreferrer">cdp.sn</a>
          ) ou, en France, la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>
          ).
        </p>
      </>
    ),
  },
  {
    id: 'securite',
    title: 'Sécurité',
    body: (
      <p>
        Le site est servi en HTTPS : les informations du formulaire sont chiffrées pendant leur
        transmission. L’accès aux demandes reçues est limité aux personnes qui les traitent.
      </p>
    ),
  },
  ...(site.appPrivacyUrl
    ? [{
      id: 'application',
      title: 'Application mobile',
      body: (
        <p>
          Les données traitées par l’application mobile {site.name} sont décrites dans les{' '}
          <a href={site.appPrivacyUrl}>règles de confidentialité de l’application</a>.
        </p>
      ),
    }]
    : []),
  {
    id: 'modifications',
    title: 'Modifications',
    body: <p>Cette politique peut évoluer ; la date de dernière mise à jour figure en haut de la page.</p>,
  },
];

const DOCS = {
  conditions: {
    sections: terms,
    intro: 'Les règles d’utilisation de ce site et les informations sur son éditeur.',
    other: 'confidentialite',
  },
  confidentialite: {
    sections: privacy,
    intro: 'Ce que nous faisons des informations que vous nous confiez par le formulaire de contact — et ce que nous n’en faisons pas.',
    other: 'conditions',
  },
};

export default function LegalModal({ doc, onClose, onSwitch }) {
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);
  const page = doc ? DOCS[doc] : null;

  // Ouverture / fermeture du <dialog> natif (focus piégé, Échap et fond fournis par le navigateur).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (page && !dialog.open) dialog.showModal();
    if (!page && dialog.open) dialog.close();
    document.documentElement.classList.toggle('legal-open', Boolean(page));
  }, [page]);

  // Changement de document : retour en haut du texte.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [doc]);

  const goTo = (id) => {
    bodyRef.current?.querySelector(`#legal-${id}`)?.scrollIntoView({ block: 'start' });
  };

  return (
    <dialog
      ref={dialogRef}
      className="legal-modal yb-block"
      aria-labelledby="legal-modal-title"
      onClose={onClose}
      onClick={(event) => {
        // Clic sur le fond assombri (hors du panneau) : fermeture.
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {page && (
        <div className="legal-panel">
          <header className="legal-head">
            <div>
              <p className="legal-kicker">Informations légales · mise à jour le {legalUpdated}</p>
              <h2 id="legal-modal-title">{TITLES[doc]}</h2>
            </div>
            <button type="button" className="legal-close" onClick={onClose} aria-label="Fermer">
              <X size={22} strokeWidth={2} aria-hidden="true" />
            </button>
          </header>

          <div className="legal-body" ref={bodyRef}>
            <p className="legal-intro">{page.intro}</p>

            <nav className="legal-toc" aria-label="Sommaire">
              <ol>
                {page.sections.map((section) => (
                  <li key={section.id}>
                    <button type="button" onClick={() => goTo(section.id)}>{section.title}</button>
                  </li>
                ))}
              </ol>
            </nav>

            {page.sections.map((section, index) => (
              <section key={section.id} id={`legal-${section.id}`} className="legal-section">
                <h3>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </h3>
                {section.body}
              </section>
            ))}

            <p className="legal-other">
              Voir aussi :{' '}
              <button type="button" onClick={() => onSwitch(page.other)}>{TITLES[page.other]}</button>
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}
