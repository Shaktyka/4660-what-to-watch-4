import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';

import {getSelectedFilmId} from '../../reducer/app-state/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';
import {AuthorizationStatus} from '../../consts.js';

class App extends PureComponent {

  _renderApp() {
    const {
      selectedFilmId,
      authorizationStatus
    } = this.props;

    const component = selectedFilmId
      ?
      <FilmDetails isAuthorized={authorizationStatus === AuthorizationStatus.AUTH} />
      :
      <Main isAuthorized={authorizationStatus === AuthorizationStatus.AUTH} />;
    return component;
  }

  render() {
    const {authorizationStatus} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {
              this._renderApp()
            }
          </Route>
          <Route exact path="/details">
            <FilmDetails isAuthorized={authorizationStatus === AuthorizationStatus.AUTH} />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/full-video">
            <FullScreenVideoPlayer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  selectedFilmId: PropTypes.number,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state) => ({
  selectedFilmId: getSelectedFilmId(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
