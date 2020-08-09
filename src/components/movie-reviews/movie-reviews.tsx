import * as React from 'react';

import {connect} from 'react-redux';
import {getReviewsErrorMessage, getIsReviewsLoading} from '../../reducer/data/selectors';

import Review from '../review/review';
import Loader from '../loader/loader';

import {ReviewInterface} from '../../types';

interface MovieReviewsProps {
  reviews: ReviewInterface;
  loadReviewsError: string;
  isReviewsLoading: boolean;
}

const MovieReviews: React.FC<MovieReviewsProps> = ({
  reviews,
  loadReviewsError,
  isReviewsLoading
}: MovieReviewsProps) => {

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

const mapStateToProps = (state) => ({
  loadReviewsError: getReviewsErrorMessage(state),
  isReviewsLoading: getIsReviewsLoading(state),
});

export {MovieReviews};
export default connect(mapStateToProps)(MovieReviews);
