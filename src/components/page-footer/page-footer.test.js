import React from 'react';
import renderer from 'react-test-renderer';

import PageFooter from './page-footer.jsx';

describe(`PageFooter rendering`, () => {

  it(`PageFooter renders correctly`, () => {
    const tree = renderer
      .create(
          <PageFooter />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
