import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// Возвращает дату в формате 'MMMM DD, YYYY'
const formatDate = (date) => {
  return (
    <Moment className="review__date" format="MMMM DD, YYYY">
      {date}
    </Moment>
  );
};

const Review = (props) => {
  const {text, author, date, rating} = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          {formatDate(date)}
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

export default Review;
