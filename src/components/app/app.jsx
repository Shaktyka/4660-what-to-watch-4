import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {getFilmsByGenre, getFavoritesFilms} from '../../reducer/data/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {AuthorizationStatus, AppRoute} from '../../consts.js';

import withFullscreenVideo from '../../hocs/with-fullscreen-video/with-fullscreen-video.js';
import withFilmDetails from '../../hocs/with-film-details/with-film-details.js';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import AddReview from '../add-review/add-review.jsx';
import NotFound from '../not-found/not-found.jsx';
import Loader from '../loader/loader.jsx';
import PrivateRoute from '../private-route/private-route.js';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';

const FullScreenPlayerWrapped = withFullscreenVideo(FullScreenVideoPlayer);
const FilmDetailsWrapped = withFilmDetails(FilmDetails);

const App = (props) => {
  const {
    authorizationStatus,
    films,
    loadFilms,
    loadReviews,
    favoritesFilms,
    loadFavoritesFilms
  } = props;

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
            const filmId = +properties.match.params.id;
            loadReviews(filmId);

            if (!films) {
              loadFilms();
            }

            return films.length > 0
              ? <FilmDetailsWrapped filmId={filmId} films={films} />
              : <Loader />;
          }}
        />
        <Route exact path={`/player/:id`}
          render = {(properties) => {
            const filmId = +properties.match.params.id;
            if (!films) {
              loadFilms();
            }
            return films.length > 0
              ? <FullScreenPlayerWrapped films={films} {...properties} filmId={filmId} />
              : <Loader />;
          }}
        />
        <PrivateRoute
          exact path={`/mylist`}
          render={() => {
            if (!favoritesFilms) {
              loadFavoritesFilms();
            }
            return <MyList />;
          }}
        />
        <Route
          exact path={`/films/:id/review`}
          render = {(properties) => {
            if (isNoAuthorization) {
              return <Redirect to={AppRoute.LOGIN} />;
            }
            const filmId = +properties.match.params.id;
            if (!films) {
              loadFilms();
            }
            return films.length > 0
              ? <AddReview films={films} filmId={filmId} {...properties} />
              : <Loader />;
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
  authorizationStatus: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    bgColor: PropTypes.string,
    cover: PropTypes.string,
    poster: PropTypes.string,
    isFavorite: PropTypes.bool,
    preview: PropTypes.string,
    source: PropTypes.string,
  })).isRequired,
  favoritesFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    bgColor: PropTypes.string,
    cover: PropTypes.string,
    poster: PropTypes.string,
    isFavorite: PropTypes.bool,
    preview: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  })).isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadFavoritesFilms: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  films: getFilmsByGenre(state),
  favoritesFilms: getFavoritesFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoritesFilms() {
    dispatch(DataOperation.loadFavoriteFilms());
  },
  loadFilms() {
    dispatch(DataOperation.loadFilms());
  },
  loadReviews(id) {
    dispatch(DataOperation.loadReviews(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
