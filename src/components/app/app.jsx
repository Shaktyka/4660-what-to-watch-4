import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';

// Перенести фильтрацию фильмов по жанрам сюда

class App extends PureComponent {

  _renderApp() {
    const {films, genre, genres, activeFilm, selectedFilmId, onGenreClick} = this.props;

    if (selectedFilmId === null) {
      return (
        <Main
          promoCard={activeFilm}
          films={films.slice(0, 8)}
          genre={genre}
          genres={genres}
          onGenreClick={onGenreClick}
        />
      );
    }

    if (selectedFilmId) {
      return (
        <FilmDetails
          filmData={films[0]}
        />
      );
    }

    return null;
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
  activeFilmId: PropTypes.number.isRequired,
  activeFilm: PropTypes.object.isRequired,
  selectedFilmId: PropTypes.number.isRequired,
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
  genre: state.genre,
  genres: state.genres,
  films: state.filmsList,
  activeFilmId: state.activeFilmId,
  activeFilm: state.activeFilm,
  selectedFilmId: state.selectedFilmId
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterByGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
