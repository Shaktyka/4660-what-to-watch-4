import * as React from 'react';

const MAX_STARRING_STRING_LENGTH = 4;

const RatingBoundary = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10
};

const RatingName = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const getRatingLevel = (ratingValue = ``) => {
  if (ratingValue === ``) {
    return ``;
  }
  let ratingLevel = ``;
  const rating = +ratingValue;

  if (rating < RatingBoundary.BAD) {
    ratingLevel = RatingName.BAD;
  } else if (rating >= RatingBoundary.BAD && rating < RatingBoundary.NORMAL) {
    ratingLevel = RatingName.NORMAL;
  } else if (rating >= RatingBoundary.NORMAL && rating < RatingBoundary.GOOD) {
    ratingLevel = RatingName.GOOD;
  } else if (rating >= RatingBoundary.GOOD && rating < RatingBoundary.VERY_GOOD) {
    ratingLevel = RatingName.VERY_GOOD;
  } else if (rating >= RatingBoundary.VERY_GOOD) {
    ratingLevel = RatingName.AWESOME;
  }
  return ratingLevel;
};

interface MovieOverviewProps {
  ratingScore: number;
  ratingCount: number;
  description: string;
  director: string;
  starring: Array<string>;
}

const MovieOverview: React.FC<MovieOverviewProps> = ({
  ratingScore,
  ratingCount,
  description,
  director,
  starring
}: MovieOverviewProps) => {

  const rating = String(ratingScore);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(rating)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">

        {description}

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring: {
              (starring.length > MAX_STARRING_STRING_LENGTH)
                ? `${starring.join(`, `)} and other`
                : starring.join(`, `)
            }
          </strong>
        </p>
      </div>
    </>
  );
};

export default MovieOverview;
