import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';

import {getActiveFilm, getGenres, getFilmsByGenre} from '../../reducer/data/selectors.js';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import {getGenre, getSelectedFilmId} from '../../reducer/app-state/selectors.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import Loader from '../loader/loader.jsx';

class App extends PureComponent {

  _renderApp() {
    const {films, genre, genres, activeFilm, selectedFilmId, onGenreClick} = this.props;

    if (films === null || activeFilm === null || genres === null) {
      return (
        <Loader />
      );
    }

    const component = selectedFilmId
      ?
      <FilmDetails
        filmData={films.find((film) => film.id === selectedFilmId)}
      />
      :
      <Main
        promoCard={activeFilm}
        films={films}
        genre={genre}
        genres={genres}
        onGenreClick={onGenreClick}
      />;
    return component;
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {
              this._renderApp()
            }
          </Route>
          <Route exact path="/details">
            <FilmDetails filmData={films[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilm: PropTypes.object.isRequired,
  selectedFilmId: PropTypes.number,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      })
  ).isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  genres: getGenres(state),
  films: getFilmsByGenre(state),
  activeFilm: getActiveFilm(state),
  selectedFilmId: getSelectedFilmId(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterByGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
