import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//We imported here "ConterProvider" to apply it to all the component
import { ConterProvider } from './Context/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
//By using it here we can apply context API to all of the component
root.render(
  <React.StrictMode>
    <ConterProvider>
      <App />
    </ConterProvider>
  </React.StrictMode>
);

reportWebVitals();
