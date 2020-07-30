import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import './styles/main.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('app-root'));

serviceWorker.register();
