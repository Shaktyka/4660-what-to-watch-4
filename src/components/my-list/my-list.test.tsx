import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';
import {userData, filmData, noop} from '../test-data';

import {MyList} from './my-list';

describe(`MyList rendering`, () => {

  it(`MyList renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyList
              userData={userData}
              favoritesFilms={[filmData]}
              isFavoritesFilmsLoading={false}
              loadFavoritesFilmsError={``}
              loadFavoriteFilms={noop}
            />
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
