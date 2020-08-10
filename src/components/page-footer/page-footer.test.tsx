import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';

import PageFooter from './page-footer';

describe(`PageFooter rendering`, () => {

  it(`PageFooter renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PageFooter />
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
