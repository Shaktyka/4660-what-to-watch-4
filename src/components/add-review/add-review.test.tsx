import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import NameSpace from '../../reducer/name-space';
import {noop, filmData, userData} from '../test-data';

import AddReview from './add-review';

const mockStore = configureStore([]);

describe(`AddReview rendering`, () => {

  it(`AddReview renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: [filmData],
        postingReviewError: ``,
        isReviewPosting: false,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        userData,
      }
    });

    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <AddReview
                films={[filmData]}
                filmId={1}
                history={{push: noop}}
              />
            </Provider>
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
