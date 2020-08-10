import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import UserBlock from './user-block';

describe(`UserBlock rendering`, () => {

  it(`UserBlock renders correctly`, () => {
    const userData = {
      id: 1,
      avatar: `/img.jpg`,
      name: `Igar`,
      email: `t@li.ru`
    };

    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock
              isAuthorized={true}
              userData={userData}
            />
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
