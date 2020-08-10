import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';

import MyListButton from './my-list-button';

const filmData = {
  id: 1,
  isFavorite: true,
};

describe(`MyListButton rendering`, () => {

  it(`MyListButton renders correctly`, () => {
    const history = {
      push: () => {}
    };

    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListButton
              film={filmData}
              isAuthorized={true}
              onClick={() => {}}
              history={history}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
