import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getReviewsErrorMessage, getIsReviewsLoading} from '../../reducer/data/selectors.js';

import Review from '../review/review.jsx';
import Loader from '../loader/loader.jsx';

const MovieReviews = (props) => {
  const {reviews, loadReviewsError, isReviewsLoading} = props;

  const secondColReviews = (reviews.length > 0) ? reviews.slice() : [];
  const firstColReviews = (secondColReviews.length > 0)
    ? secondColReviews.splice(0, Math.ceil(secondColReviews.length / 2))
    : [];

  return (
    <div className="movie-card__reviews movie-card__row">
      {loadReviewsError && <div>loadReviewsError</div>}
      {
        isReviewsLoading
          ?
          <Loader />
          :
        <>
          <div className="movie-card__reviews-col">
            {
              firstColReviews.map((review, i) => (
                <Review
                  key={i}
                  id={review.id}
                  authorId={review.authorId}
                  authorName={review.authorName}
                  text={review.text}
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
                  id={review.id}
                  authorId={review.authorId}
                  authorName={review.authorName}
                  text={review.text}
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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    authorId: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired,
  loadReviewsError: PropTypes.string.isRequired,
  isReviewsLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  loadReviewsError: getReviewsErrorMessage(state),
  isReviewsLoading: getIsReviewsLoading(state),
});

export {MovieReviews};
export default connect(mapStateToProps)(MovieReviews);
