import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ErrorMessage from './error-message';

describe(`ErrorMessage rendering`, () => {

  it(`ErrorMessage renders correctly`, () => {
    const message = `Текст ошибки`;

    const tree = renderer
      .create(
          <ErrorMessage
            message={message}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
