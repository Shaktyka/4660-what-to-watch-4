import React from 'react';
import renderer from 'react-test-renderer';

import ErrorMessage from './error-message.jsx';

describe(`Card rendering`, () => {

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
