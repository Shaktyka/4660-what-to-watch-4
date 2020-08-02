import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {getFilmsByGenre} from '../../reducer/data/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {AuthorizationStatus, AppRoute} from '../../consts.js';

import withFullscreenVideo from '../../hocs/with-fullscreen-video/with-fullscreen-video.js';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MyList from '../my-list/my-list.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import AddReview from '../add-review/add-review.jsx';
import NotFound from '../not-found/not-found.jsx';
import Loader from '../loader/loader.jsx';
import PrivateRouter from '../private-route/private-route.js';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player.jsx';

const FullScreenPlayerWrapped = withFullscreenVideo(FullScreenVideoPlayer);

const App = (props) => {
  const {
    authorizationStatus,
    setSelectedFilmId,
    setReviewedFilm,
    films,
    loadFilms,
    loadReviews
  } = props;

  const isNoAuthorization = authorizationStatus === AuthorizationStatus.NO_AUTH;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <PrivateRouter
          exact path={`/mylist`}
          component={MyList}
        />
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
            setSelectedFilmId(filmId);
            loadReviews(filmId);

            if (!films) {
              loadFilms();
            }

            return films.length > 0 ? <FilmDetails /> : <Loader />;
          }}
        />
        {/* <Route
          exact path={AppRoute.MYLIST}
          render={() => (
            isNoAuthorization
              ? <Redirect to={AppRoute.LOGIN} />
              : <MyList />
          )}
        /> */}
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
        <Route exact path={`/films/:id/review`}
          render = {(properties) => {
            const filmId = +properties.match.params.id;
            if (!films) {
              loadFilms();
            }
            return films.length > 0
              ? <AddReview films={films} filmId={filmId} {...properties} />
              : <Loader />;
            // setReviewedFilm(filmData); // убрать потом, когда будет готово
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
  setReviewedFilm: PropTypes.func,
  loadFavoritesFilms: PropTypes.func,
  films: PropTypes.array,
  loadFilms: PropTypes.func,
  loadReviews: PropTypes.func
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
  },
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
