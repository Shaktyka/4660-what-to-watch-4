import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
// import {AppRoute} from '../../consts.js';

const isNoAuthorization = false;
// проверить, авторизован польз-ль или нет

const PrivateRoute = (props) => {
  const {component: Component} = props;

  return (
    <Route
      render={ (routeProps) => (
        isNoAuthorization ? <Redirect to={`/login`} /> : <Component {...routeProps} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired
};

export default PrivateRoute;
