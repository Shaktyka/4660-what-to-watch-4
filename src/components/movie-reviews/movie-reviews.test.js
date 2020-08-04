import React from 'react';

import renderer from 'react-test-renderer';
import NameSpace from "../../reducer/name-space";
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import MovieReviews from './movie-reviews.jsx';

const REVIEWS = [
  {
    id: 1,
    authorId: 4,
    authorName: `Kate Muir`,
    rating: 8.9,
    text: `Discerning travellers`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    films: [],
    filmReviews: [REVIEWS],
    isReviewsLoading: false,
  }
});

describe(`MovieReviews rendering`, () => {

  it(`MovieReviews renders correctly with the one review`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieReviews
              reviews={REVIEWS.slice(0, 1)}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
