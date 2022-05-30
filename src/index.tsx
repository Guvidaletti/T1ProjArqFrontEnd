import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/_default.scss';
import Layout from './components/Layout/Layout';
import ShopContextProvider from './contexts/shopContext/ShopContext';
import reportWebVitals from './reportWebVitals';
import { loadEnvironment } from './services/environment';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

loadEnvironment().then(() => {
  root.render(
    <BrowserRouter>
      <ShopContextProvider>
        <Layout />
      </ShopContextProvider>
    </BrowserRouter>
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
