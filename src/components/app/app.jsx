import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {getSelectedFilmId} from '../../reducer/app-state/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {AuthorizationStatus, AppRoute} from '../../consts.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';
import AddReview from '../add-review/add-review.jsx';

import history from '../../history.js';

class App extends PureComponent {

  _renderApp() {
    const {
      selectedFilmId,
      authorizationStatus,
      userData
    } = this.props;

    const coreComponent = selectedFilmId
      ?
      <FilmDetails
        isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
        userData={userData}
      />
      :
      <Main
        isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
        userData={userData}
      />;

    const content = authorizationStatus === `AUTH`
      ?
      coreComponent
      :
      <SignIn />;

    return content;
  }

  render() {
    const {authorizationStatus, userData} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {
              this._renderApp()
            }
          </Route>
          <Route exact path="/details">
            <FilmDetails
              isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
              userData={userData}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn />
          </Route>
          <Route exact path="/full-video">
            <FullScreenVideoPlayer />
          </Route>
          <Route exact path="/review">
            <AddReview />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  selectedFilmId: PropTypes.number,
  authorizationStatus: PropTypes.string,
  userData: PropTypes.object
};

const mapStateToProps = (state) => ({
  selectedFilmId: getSelectedFilmId(state),
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state)
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
