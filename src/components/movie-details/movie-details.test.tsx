import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import NameSpace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {filmData} from '../test-data';

import MovieDetails from './movie-details';

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    films: []
  }
});

describe(`MovieDetails component rendering`, () => {

  it(`MovieDetails renders correctly`, () => {
    const {director, starring, duration, genre, year} = filmData;

    const tree = renderer
      .create(
          <Provider store={store}>
            <MovieDetails
              director={director}
              starring={starring}
              duration={duration}
              genre={genre}
              year={year}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
