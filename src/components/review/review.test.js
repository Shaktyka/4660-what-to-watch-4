import React from 'react';
import renderer from 'react-test-renderer';

import Review from './review.jsx';

const reviewData = {
  id: 1,
  authorId: 22,
  text: `Discerning travellers`,
  authorName: `Kate Muir`,
  date: `2016-12-24`,
  rating: `8,9`
};

describe(`Review rendering`, () => {

  it(`Review renders correctly`, () => {
    const {text, authorName, date, rating} = reviewData;

    const tree = renderer
      .create(
          <Review
            text={text}
            author={authorName}
            date={date}
            rating={rating}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
