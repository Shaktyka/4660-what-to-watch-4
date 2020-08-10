import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';

import NotFound from './not-found';

describe(`NotFound rendering`, () => {

  it(`NotFound renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <NotFound />
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
