import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Review from './review';

const reviewData = {
  id: 1,
  authorId: 22,
  text: `Discerning travellers`,
  authorName: `Kate Muir`,
  date: `2016-12-24`,
  rating: 8.9
};

describe(`Review rendering`, () => {

  it(`Review renders correctly`, () => {
    const {id, text, authorName, authorId, date, rating} = reviewData;

    const tree = renderer
      .create(
          <Review
            id={id}
            text={text}
            authorId={authorId}
            authorName={authorName}
            date={date}
            rating={rating}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
