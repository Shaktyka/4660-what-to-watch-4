import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const reviewData = {
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
    kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
  author: `Kate Muir`,
  date: `2016-12-24`,
  rating: `8,9`
};

describe(`Review rendering`, () => {

  it(`Review renders correctly`, () => {
    const {text, author, date, rating} = reviewData;

    const tree = renderer
      .create(
          <Review
            text={text}
            author={author}
            date={date}
            rating={rating}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
