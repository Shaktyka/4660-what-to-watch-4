import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import SignIn from './sign-in.jsx';

const mockStore = configureStore([]);

describe(`SignIn rendering`, () => {

  it(`SignIn renders correctly`, () => {
    const store = mockStore({
      authError: null
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <SignIn
              authError={null}
              onSubmit={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SignIn renders correctly with an error text`, () => {
    const store = mockStore({
      authError: `Bad request`
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <SignIn
              authError={`Bad request`}
              onSubmit={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
