import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getReviewsErrorMessage} from '../../reducer/data/selectors.js';

import Review from '../review/review.jsx';

const MovieReviews = (props) => {
  const {reviews, loadReviewsErr} = props;
  const secondColReviews = (reviews.length > 0) ? reviews.slice() : [];
  const firstColReviews = (secondColReviews.length > 0)
    ? secondColReviews.splice(0, Math.ceil(secondColReviews.length / 2))
    : [];

  return (
    <div className="movie-card__reviews movie-card__row">
      {
        loadReviewsErr
          ?
          <div>loadReviewsErr</div>
          :
        <>
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
        </>
      }
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
  ).isRequired,
  loadReviewsErr: PropTypes.string
};

const mapStateToProps = (state) => ({
  loadPromoErr: getReviewsErrorMessage(state)
});

export {MovieReviews};
export default connect(mapStateToProps)(MovieReviews);
