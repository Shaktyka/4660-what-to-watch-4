import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../consts.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
