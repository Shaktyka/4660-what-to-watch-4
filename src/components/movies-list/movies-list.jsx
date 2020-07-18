import React from 'react';
import PropTypes from 'prop-types';

import withCard from '../../hocs/with-сard/with-card.js';
import Card from '../card/card.jsx';
import ShowMore from '../show-more/show-more.jsx';

const CardWrapped = withCard(Card);

const MoviesList = (props) => {
  const {films} = props;

  return (
    <>
      <div className="catalog__movies-list">
        {
          films.map((film, i) => {
            return (
              <CardWrapped
                film={film}
                key={`movie-${i}`}
              />
            );
          })
        }
      </div>
      <ShowMore />
    </>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MoviesList;
