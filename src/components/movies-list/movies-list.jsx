import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {}
    };
  }

  render() {
    const {films, mainTitleClickHandler, onHoverCard} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          films.map((film) => (
            <Card
              title={film.title}
              key={Math.ceil(Math.random() * 1000)}
              poster={film.preview}
              mainTitleClickHandler={mainTitleClickHandler}
              onHoverCard={onHoverCard}
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
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  mainTitleClickHandler: PropTypes.func.isRequired,
  onHoverCard: PropTypes.func.isRequired
};

export default MoviesList;
