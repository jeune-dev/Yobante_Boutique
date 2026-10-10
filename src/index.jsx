import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Le HTML est pré-généré au build (scripts/prerender.mjs) : on l'hydrate.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
