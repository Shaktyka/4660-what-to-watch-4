import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {review} from '../test-data';

import MovieReviews from './movie-reviews';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    films: [],
    filmReviews: [review],
    isReviewsLoading: false,
    loadReviewsError: ``,
  }
});

describe(`MovieReviews rendering`, () => {

  it(`MovieReviews renders correctly with the one review`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieReviews
              reviews={[review].slice(0, 1)}
              loadReviewsError={``}
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
