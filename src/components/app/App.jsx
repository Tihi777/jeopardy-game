import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.scss';
import { IntlProvider } from 'react-intl';
import { useDispatch } from 'react-redux';
import { AppActions } from '../../store/actions/applicationActions';

import Russian from '../../lang/ru.json';
import English from '../../lang/en.json';

function App({ routes }) {
  const dispatch = useDispatch();
  const lang = navigator.language;

  useEffect(() => {
    dispatch(AppActions.selectLocale(lang));
  }, [dispatch, lang]);

  return (
    <IntlProvider locale={lang} messages={lang === 'ru' ? Russian : English}>
      <div className="app-container">
        <Switch>
          {routes.map(route => (
            <Route key={route.path} path={route.path} component={route.component} exact />
          ))}
        </Switch>
      </div>
    </IntlProvider>
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
