import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withCard from '../../hocs/with-сard/with-card.js';
import Card from '../card/card.jsx';

const FilmCard = withCard(Card);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  _handleCardMouseEnter(cardId) {
    this.setState({
      activeCard: cardId,
    });
  }

  _handleCardMouseLeave() {
    this.setState({
      activeCard: null,
    });
  }

  _getFilm(filmData, cardClickHandler) {
    return (
      <FilmCard
        film={filmData}
        key={`movie-${filmData.id}`}
        onFilmCardClick={cardClickHandler}
        onMouseEnterCard={this._handleCardMouseEnter}
        onMouseLeaveCard={this._handleCardMouseLeave}
      />
    );
  }

  _getFilms() {
    const {films, onFilmCardClick} = this.props;
    return films.map((film) => this._getFilm(film, onFilmCardClick));
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this._getFilms()}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default MoviesList;
