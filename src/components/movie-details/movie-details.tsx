import * as React from 'react';

import {formatInitCap, getDurationFromMinutes} from '../../utils';

interface MovieDetailsProps {
  director: string;
  starring: Array<string>;
  duration: number;
  genre: string;
  year: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  director,
  starring,
  duration,
  genre,
  year
}: MovieDetailsProps) => {

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          {
            starring.map((star, i) => {
              return (i === starring.length - 1) ? `${star}` : [`${star}`, `,`, <br key={i} />];
            })
          }
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

export default MovieDetails;
