import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

const SimilarMovies = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {
        films.map((filmData) => (
          <Card
            film={filmData}
            key={`movie-${filmData.id}`}
            onFilmCardClick={() => {}}
            onMouseEnterCard={() => {}}
            onMouseLeaveCard={() => {}}
          />
        ))
      }
    </div>
  );
};

SimilarMovies.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

export default SimilarMovies;
