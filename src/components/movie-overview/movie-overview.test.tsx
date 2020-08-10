import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space';
import {filmData} from '../test-data';

import MovieOverview from './movie-overview';

const mockStore = configureStore([]);

describe(`MovieOverview component rendering`, () => {

  it(`MovieOverview renders correctly`, () => {
    const {ratingScore, ratingCount, description, director, starring} = filmData;
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [filmData]
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieOverview
              ratingScore={ratingScore}
              ratingCount={ratingCount}
              description={description}
              director={director}
              starring={starring}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
