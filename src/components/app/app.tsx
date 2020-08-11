import * as React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {getAuthorizationStatus, getUserData, getAuthorizationProgress} from '../../reducer/user/selectors';
import {getFilmsByGenre} from '../../reducer/data/selectors';
import {Operation as DataOperation} from '../../reducer/data/data';
import {AuthorizationStatus, AppRoute} from '../../consts';

import withFullscreenVideo from '../../hocs/with-fullscreen-video/with-fullscreen-video';
import withFilmDetails from '../../hocs/with-film-details/with-film-details';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmDetails from '../film-details/film-details';
import AddReview from '../add-review/add-review';
import NotFound from '../not-found/not-found';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import FullScreenVideoPlayer from '../full-screen-video-player/full-screen-video-player';
import {FilmInterface, UserDataInterface} from '../../types';

const FullScreenPlayerWrapped = withFullscreenVideo(FullScreenVideoPlayer);
const FilmDetailsWrapped = withFilmDetails(FilmDetails);

interface AppProps {
  authorizationStatus: string;
  userData: UserDataInterface;
  films: Array<FilmInterface>;
  loadFilms(): void;
  loadReviews(id: number): void;
  isAuthorizationProgress: boolean;
}

const App: React.FC<AppProps> = ({
  authorizationStatus,
  films,
  loadFilms,
  loadReviews,
  isAuthorizationProgress

}: AppProps) => {

  const isNoAuthorization = authorizationStatus === AuthorizationStatus.NO_AUTH;

  return (
    <>
    {
      !isAuthorizationProgress ?
        <BrowserRouter>
          <Switch>
            <Route
              exact path={AppRoute.ROOT}
              render = {(properties) => <Main {...properties} />}
            >
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
                  ? <FilmDetailsWrapped filmId={filmId} films={films} {...properties} />
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
              render={(properties) => {
                return <MyList routeProps={properties} />;
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
        : <Loader />
    }
    </>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  films: getFilmsByGenre(state),
  isAuthorizationProgress: getAuthorizationProgress(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(DataOperation.loadFilms());
  },
  loadReviews(id) {
    dispatch(DataOperation.loadReviews(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
