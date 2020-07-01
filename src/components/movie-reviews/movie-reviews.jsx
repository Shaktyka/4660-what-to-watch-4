import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';

// Элементы должны делиться на 2 колонки

const MovieReviews = (props) => {
  const {reviews} = props;
  const {text, author, date, rating} = reviews[0];

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          <Review
            text={text}
            author={author}
            date={date}
            rating={rating}
          />
        }
        {
          <Review
            text={text}
            author={author}
            date={date}
            rating={rating}
          />
        }
        {
          <Review
            text={text}
            author={author}
            date={date}
            rating={rating}
          />
        }
      </div>
      <div className="movie-card__reviews-col">
        {
          <Review
            text={text}
            author={author}
            date={date}
            rating={rating}
          />
        }
        {
          <Review
            text={text}
            author={author}
            date={date}
            rating={rating}
          />
        }
        {
          <Review
            text={text}
            author={author}
            date={date}
            rating={rating}
          />
        }
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MovieReviews;
