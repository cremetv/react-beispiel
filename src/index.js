import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Das hier ist das Grundgerüst deiner App.
 * Es wird das root Element im HTML genommen und in das wird die React App gerendert.
 * Der Rest passiert in React.
 *
 * Hier änderst du im Normalfall nicht viel.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
