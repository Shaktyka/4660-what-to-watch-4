import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import MyList from './my-list.jsx';

// нужен стор

describe(`MyList rendering`, () => {

  it(`MyList renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <MyList />
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
