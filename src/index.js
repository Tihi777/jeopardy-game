import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.scss';
import './styles/main.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import store from './store/store';
import routes from './services/routeConfig';
import history from './utils/history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App routes={routes} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app-root')
);

serviceWorker.register();
