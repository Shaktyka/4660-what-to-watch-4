import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import UserBlock from './user-block.jsx';

describe(`UserBlock rendering`, () => {

  it(`UserBlock renders correctly`, () => {
    const userData = {
      avatar: `/img.jpg`,
      name: `Igar`
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
