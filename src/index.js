import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';

const loading = () => {
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loading()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

reportWebVitals();