import { AppContexts } from 'app.contexts';
import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import Routes from 'routes';
import reportWebVitals from './reportWebVitals';

const swrConfigs = { revalidateOnFocus: false, shouldRetryOnError: false };

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfigs}>
      <AppContexts>
        <Routes />
      </AppContexts>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
