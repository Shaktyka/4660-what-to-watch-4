import React from 'react';
import renderer from 'react-test-renderer';

import PageHeader from './page-header.jsx';

describe(`PageHeader rendering`, () => {

  it(`PageHeader renders correctly`, () => {
    const tree = renderer
      .create(
          <PageHeader>
            {<div>test</div>}
          </PageHeader>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
