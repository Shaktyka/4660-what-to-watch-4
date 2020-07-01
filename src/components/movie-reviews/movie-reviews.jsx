import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';

const MovieReviews = (props) => {
  const {reviews} = props;
  const secondColReviews = reviews.slice();
  const firstColReviews = secondColReviews.splice(0, Math.ceil(secondColReviews.length / 2));

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          firstColReviews.map((review, i) => (
            <Review
              key={i}
              text={review.text}
              author={review.author}
              date={review.date}
              rating={review.rating}
            />
          ))
        }
      </div>
      <div className="movie-card__reviews-col">
        {
          secondColReviews.map((review, i) => (
            <Review
              key={i}
              text={review.text}
              author={review.author}
              date={review.date}
              rating={review.rating}
            />
          ))
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
