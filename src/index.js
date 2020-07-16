import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import routes from './services/routeConfig';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App routes={routes} />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('app-root')
);

serviceWorker.register();
