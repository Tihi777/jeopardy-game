import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';

function App({ routes }) {
	return (
		<div className="app-container">
			<Switch>
				{routes.map(route => (
					<Route key={route.path} path={route.path} component={route.component} exact />
				))}
			</Switch>
		</div>
	);
}

App.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string,
			component: PropTypes.elementType,
		})
	).isRequired,
};

export default App;
