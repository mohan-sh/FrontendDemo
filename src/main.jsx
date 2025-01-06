import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'semantic-ui-css/semantic.min.css';
import Apps from './Apps.jsx'
// import Color from './color';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
  </StrictMode>,
);
