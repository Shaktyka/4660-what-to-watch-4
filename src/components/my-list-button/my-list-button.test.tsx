import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';

import MyListButton from './my-list-button';
import {noop} from '../test-data';

const filmData = {
  id: 1,
  isFavorite: true,
};

describe(`MyListButton rendering`, () => {

  it(`MyListButton renders correctly`, () => {
    const history = {
      push: noop
    };

    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListButton
              film={filmData}
              isAuthorized={true}
              onClick={noop}
              history={history}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
