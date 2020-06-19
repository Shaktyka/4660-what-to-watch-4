import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  _handleCardHover(cardId) {
    this.setState({
      activeCard: cardId
    });
  }

  render() {
    const {films, mainTitleClickHandler} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          films.map((film) => (
            <Card
              title={film.title}
              key={`movie-${film.id}`}
              id={film.id}
              poster={film.preview}
              mainTitleClickHandler={mainTitleClickHandler}
              onHoverCard={this._handleCardHover}
            />
          ))
        }
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
