import React from 'react';

import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import MyListButton from './my-list-button.jsx';

describe(`MyListButton rendering`, () => {

  it(`MyListButton renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyListButton
              id={1}
              isFavorite={true}
              onClick={() => {}}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
