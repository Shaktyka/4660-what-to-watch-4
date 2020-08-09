import * as React from 'react';

import * as moment from 'moment';

interface ReviewProps {
  id: number;
  authorId: number;
  authorName: string;
  text: string;
  rating: number;
  date: string;
}

const Review: React.FC<ReviewProps> = ({
  id,
  authorId,
  authorName,
  rating,
  text,
  date
}: ReviewProps) => {

  return (
    <div className="review" id={id}>
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author" data-authorid={authorId}>{authorName}</cite>
          <time className="review__date" dateTime={date}>
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

export default Review;
