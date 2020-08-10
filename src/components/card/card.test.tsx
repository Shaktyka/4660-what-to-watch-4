import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';
import {noop, filmData} from '../test-data';

import Card from './card';

describe(`Card rendering`, () => {

  it(`Card renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Card
              film={filmData}
              isPlaying={false}
              onMouseEnterCard={noop}
              onMouseLeaveCard={noop}
            />
          </BrowserRouter>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
