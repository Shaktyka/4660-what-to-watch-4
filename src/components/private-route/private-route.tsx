import * as React from 'react';

import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../consts';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

import {Route, Redirect} from 'react-router-dom';

interface PrivateRouteProps {
  authorizationStatus: string;
  exact: boolean;
  path: string;
  render: () => React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  exact,
  path,
  render,
  authorizationStatus
}: PrivateRouteProps) => {

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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
