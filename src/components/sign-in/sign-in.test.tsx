import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../reducer/name-space';
import {noop} from '../test-data';

import SignIn from './sign-in';

const mockStore = configureStore([]);

describe(`SignIn rendering`, () => {

  it(`SignIn renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        userData: {},
        authorizationError: ``
      }
    });

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <SignIn
                authorizationError={null}
                onSubmit={noop}
              />
            </Provider>
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SignIn renders correctly with an error text`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        userData: {},
        authorizationError: `Error text`
      }
    });

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <SignIn
                authorizationError={`Bad request`}
                onSubmit={noop}
              />
            </Provider>
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
