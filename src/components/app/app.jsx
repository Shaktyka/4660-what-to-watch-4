import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilmId: null
    };

    this._renderApp = this._renderApp.bind(this);
    this._renderFilmDetails = this._renderFilmDetails.bind(this);
  }

  _renderApp() {
    const {films, genre, genres, activeFilm, onGenreClick} = this.props;
    const {selectedFilmId} = this.state;

    if (selectedFilmId === null) {
      return (
        <Main
          promoCard={activeFilm}
          films={films.slice(0, 8)}
          genre={genre}
          genres={genres}
          onGenreClick={onGenreClick}
          onFilmCardClick={(filmId) => (
            this.setState({
              selectedFilmId: filmId,
            })
          )}
        />
      );
    }

    if (selectedFilmId) {
      return (
        <FilmDetails
          filmData={films.find((film) => film.id === selectedFilmId)}
        />
      );
    }

    return null;
  }

  _renderFilmDetails() {
    const {films} = this.props;
    return (
      <FilmDetails filmData={films[0]} />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details">
            {this._renderFilmDetails()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  genres: state.genres,
  activeFilm: state.activeFilm,
  films: state.filmsList
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterByGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
