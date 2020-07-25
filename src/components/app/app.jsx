import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {AuthorizationStatus, AppRoute} from '../../consts.js';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';
// import AddReview from '../add-review/add-review.jsx';

class App extends PureComponent {

  render() {
    const {authorizationStatus, userData, setSelectedFilmId} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main
              isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
              userData={userData}
            />
          </Route>
          <Route
            exact path={AppRoute.LOGIN}
            render = {() => authorizationStatus === AuthorizationStatus.NO_AUTH
              ? <SignIn />
              : <Redirect to={AppRoute.ROOT} />
            }
          />
          <Route
            exact path={AppRoute.MYLIST}
            render={() => {
              return (
                <MyList
                  userData={userData}
                />
              );
            }}
          />
          <Route exact path={`/films/:id`}
            render = {(props) => {
              setSelectedFilmId(+props.match.params.id);
              return (
                <FilmDetails
                  {...props}
                  isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
                  userData={userData}
                />
              );
            }}
          />
          <Route exact path="/player/:id"
            render = {(props) => (
              <FullScreenVideoPlayer
                {...props}
              />
            )}
          />
          <Route
            render={() => (
              <>
                <h1>
                  404. <small>Page not found</small>
                </h1>
                <Link to="/">Go to main page</Link>
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string,
  userData: PropTypes.object,
  setSelectedFilmId: PropTypes.func
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedFilmId(id) {
    dispatch(ActionCreator.setSelectedFilm(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
