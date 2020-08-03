import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import PageFooter from './page-footer.jsx';

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
