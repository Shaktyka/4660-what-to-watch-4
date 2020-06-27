import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

import {FILMS_DATA, promoCardData} from '../test-data.js';

describe(`Main rendering`, () => {

  it(`Main renders correctly`, () => {
    const tree = renderer
      .create(
          <Main
            promoCard={promoCardData}
            films={FILMS_DATA}
            onFilmCardClick={() => {}}
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
