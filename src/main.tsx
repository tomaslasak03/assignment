import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createClient, Provider } from 'urql';

// Language config
import '@config/translate';

const client = createClient({
  url: 'https://api.spacex.land/graphql',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
