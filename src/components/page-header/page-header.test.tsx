import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';

import PageHeader from './page-header';

describe(`PageHeader rendering`, () => {

  it(`PageHeader renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PageHeader>
              {<div>test</div>}
            </PageHeader>
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
