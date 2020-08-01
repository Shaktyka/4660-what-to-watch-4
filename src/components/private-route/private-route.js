import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute} from '../../consts.js';

const isNoAuthorization = false;
// проверить, авторизован польз-ль или нет

const PrivateRoute = (props) => {
  const {component: Component} = props;

  return (
    <Route
      render={ (props) => (
        isNoAuthorization ? <Redirect to={`/login`} /> : <Component {...props} />
      )}
    />
  );
};

export default PrivateRoute;
