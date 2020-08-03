import React from 'react';

import renderer from 'react-test-renderer';
import NameSpace from "../../reducer/name-space";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import MovieReviews from './movie-reviews.jsx';

const REVIEWS = [
  {
    id: 1,
    userId: 4,
    userName: `Kate Muir`,
    rating: 8.9,
    comment: `Discerning travellers`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    userId: 3,
    userName: `Kate Muir`,
    rating: 8.9,
    comment: `Discerning travellers`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 3,
    userId: 2,
    userName: `Kate Muir`,
    rating: 8.9,
    comment: `Discerning travellers`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 4,
    userId: 1,
    userName: `Kate Muir`,
    rating: 8.9,
    comment: `Discerning travellers`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    films: [],
    filmReviews: [REVIEWS]
  }
});

const MockComponent = () => {
  return (
    <div></div>
  );
};

describe(`MovieReviews component rendering`, () => {

  it(`MovieReviews renders correctly with the one review`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieReviews
              reviews={REVIEWS.slice(0, 1)}
              authorId={1}
              authorName={`Kate Muir`}
              text={`comment`}
            >
              <MockComponent />
            </MovieReviews>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  /*
  it(`MovieReviews renders correctly with 3 reviews`, () => {

    const tree = renderer
      .create(
          <MovieReviews
            reviews={REVIEWS.slice(0, 3)}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MovieReviews renders correctly with more then 3 reviews`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            reviews={REVIEWS}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  */

});
