import React from 'react';
import PropTypes from 'prop-types';
import {formatInitCap, getDurationFromMinutes} from '../../utils.js';

const getStarringList = (actors) => {
  return actors.map((actor, i) => {
    return (i === actors.length - 1) ? `${actor}` : [`${actor}`, `,`, <br key={i} />];
  });
};

const MovieDetails = (props) => {
  const {director, starring, duration, genre, year} = props;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          {getStarringList(starring)}
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getDurationFromMinutes(duration)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{formatInitCap(genre)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default MovieDetails;
