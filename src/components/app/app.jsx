import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {
  getFilmsByGenre
} from '../../reducer/data/selectors.js';
import {AuthorizationStatus, AppRoute} from '../../consts.js';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';
import AddReview from '../add-review/add-review.jsx';
import NotFound from '../not-found/not-found.jsx';

const App = (props) => {
  const {authorizationStatus, userData, setSelectedFilmId, setReviewedFilm, films} = props;
  const isNoAuthorization = authorizationStatus === AuthorizationStatus.NO_AUTH;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route
          exact path={AppRoute.LOGIN}
          render = {() => isNoAuthorization
            ? <SignIn />
            : <Redirect to={AppRoute.ROOT} />
          }
        />
        <Route exact path={`/films/:id`}
          render = {(properties) => {
            setSelectedFilmId(+properties.match.params.id);
            return (
              <FilmDetails
                {...properties}
              />
            );
          }}
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
        <Route exact path={`/player/:id`}
          render = {(properties) => (
            <FullScreenVideoPlayer
              {...properties}
              filmId={properties.match.params.id}
            />
          )}
        />
        <Route exact path={`/films/:id/review`}
          render = {(properties) => {
            const id = properties.match.params.id;
            const filmData = films.find((film) => film.id === +id);
            setReviewedFilm(filmData);
            return (
              <AddReview
                {...properties}
                filmId={id}
              />
            );
          }}
        />
        <Route
          render={() => (
            <NotFound />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string,
  userData: PropTypes.object,
  setSelectedFilmId: PropTypes.func,
  setReviewedFilm: PropTypes.func
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  films: getFilmsByGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedFilmId(id) {
    dispatch(ActionCreator.setSelectedFilmId(id));
  },
  setReviewedFilm(data) {
    dispatch(ActionCreator.setReviewedFilm(data));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
