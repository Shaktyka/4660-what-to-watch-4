import React from 'react';
import PropTypes from 'prop-types';

// Добавить ф-цию для вывода строки с кол-вом актёров (после 4х писать 'and other')

const RatingBoundary = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10
};

const getRatingLevel = (ratingValue) => {
  let ratingLevel = ``;

  if (ratingValue <= RatingBoundary.BAD) {
    ratingLevel = `Bad`;
  } else if (ratingValue > RatingBoundary.BAD && ratingValue <= RatingBoundary.NORMAL) {
    ratingLevel = `Normal`;
  } else if (ratingValue > RatingBoundary.NORMAL && ratingValue <= RatingBoundary.GOOD) {
    ratingLevel = `Good`;
  } else if (ratingValue > RatingBoundary.GOOD && ratingValue < RatingBoundary.VERY_GOOD) {
    ratingLevel = `Very good`;
  } else {
    ratingLevel = `Awesome`;
  }
  return ratingLevel;
};

const getFilmDescription = (description) => {
  return description.map((string, i) => (
    <p key={i}>{string} </p>
  ));
};

const MovieOverview = (props) => {
  const {
    ratingScore,
    ratingCount,
    description,
    director,
    starring
  } = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(ratingScore)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">

        {
          getFilmDescription(description)
        }

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>Starring: {starring.join(`, `)} and other</strong>
        </p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  ratingScore: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string)
};

export default MovieOverview;
