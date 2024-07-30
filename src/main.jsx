// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { FitnessProvider } from './FitnessContext.jsx'; // Update to FitnessProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FitnessProvider> {/* Replace StudentProvider with FitnessProvider */}
        <App />
      </FitnessProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
