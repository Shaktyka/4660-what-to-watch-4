import React from 'react';

import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import NameSpace from "../../reducer/name-space";
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';

import SignIn from './sign-in.jsx';

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
        authError: null
      }
    });

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <SignIn
                authError={null}
                onSubmit={() => {}}
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
        authError: `Error text`
      }
    });

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <SignIn
                authError={`Bad request`}
                onSubmit={() => {}}
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
