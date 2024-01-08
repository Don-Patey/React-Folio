// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import './index.css'; // You can create an index.css for global styles


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
