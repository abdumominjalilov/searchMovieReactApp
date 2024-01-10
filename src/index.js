import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import Provider from './contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
