import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './components/app/App';

import store from './store/store';
import history from './utils/history';
import routes from './services/routeConfig';

function Root() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <App routes={routes} />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default Root;
