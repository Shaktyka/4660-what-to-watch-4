import React from 'react';
import renderer from 'react-test-renderer';

import MovieReviews from './movie-reviews.jsx';

const reviews = [
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
      kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `8,9`
  },
  {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves
      in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added
      a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `2015-11-18`,
    rating: `8,0`
  },
  {
    text: `I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40
      minutes I wish I could take back.`,
    author: `Amanda Greever`,
    date: `2015-11-18`,
    rating: `8,0`
  },
  {
    text: `The mannered, madcap proceedings are often delightful, occasionally
      silly, and here and there, gruesome and/or heartbreaking.`,
    author: `Matthew Lickona`,
    date: `2016-12-20`,
    rating: `7,2`
  },
  {
    text: `It is certainly a magical and childlike way of storytelling,
      even if the content is a little more adult.`,
    author: `Paula Fleri-Soler`,
    date: `2016-12-20`,
    rating: `7,6`
  },
  {
    text: `It is certainly a magical and childlike way of storytelling,
      even if the content is a little more adult.`,
    author: `Marta Soler`,
    date: `2016-12-22`,
    rating: `7,0`
  }
];

describe(`MovieReviews component rendering`, () => {

  it(`MovieReviews renders correctly with the one review`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            reviews={reviews.slice(0, 1)}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MovieReviews renders correctly with 3 reviews`, () => {

    const tree = renderer
      .create(
          <MovieReviews
            reviews={reviews.slice(0, 3)}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MovieReviews renders correctly with more then 3 reviews`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            reviews={reviews}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
