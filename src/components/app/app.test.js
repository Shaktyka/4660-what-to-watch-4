import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

import {FILMS_DATA, promoCardData} from '../test-data.js';

describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const tree = renderer
      .create(
          <App
            promoCard={promoCardData}
            films={FILMS_DATA}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
