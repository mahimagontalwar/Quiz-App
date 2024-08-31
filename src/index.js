// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure you have some basic styling or remove if not needed
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
