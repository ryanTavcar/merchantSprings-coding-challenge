import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

let root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);