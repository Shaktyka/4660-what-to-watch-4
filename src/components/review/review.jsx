import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Review = (props) => {
  const {id, authorId, authorName, rating, text, date} = props;

  return (
    <div className="review" id={id}>
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author" data-authorid={authorId}>{authorName}</cite>
          <time className="review__date" dateTime={moment(date)}>
            {
              moment(date).format(`MMMM DD, YYYY`)
            }
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  id: PropTypes.number.isRequired,
  authorId: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired
};

export default Review;
