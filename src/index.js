import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <Auth0Provider
      domain = "dev-e41e7vjeivxmonp6.us.auth0.com"
      clientId = "JcrCHhwHv3UAB3VIsdGk7RYxdwwEINL6"
      authorizationParams={{
        redirect_uri : window.location.origin

      }}
      onRedirectCallback={onRedirectCallback}
  >
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Auth0Provider>,
  </React.StrictMode>
);


