import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card.jsx';

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

  _getFilm(filmData, titleClickHandler) {
    return (
      <Card
        title={filmData.title}
        key={`movie-${filmData.id}`}
        id={filmData.id}
        poster={filmData.preview}
        mainTitleClickHandler={titleClickHandler}
        onMouseEnterCard={this._handleCardMouseEnter}
        onMouseLeaveCard={this._handleCardMouseLeave}
      />
    );
  }

  _getFilms() {
    const {films, mainTitleClickHandler} = this.props;
    return films.map((film) => this._getFilm(film, mainTitleClickHandler));
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
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  mainTitleClickHandler: PropTypes.func.isRequired
};

export default MoviesList;
