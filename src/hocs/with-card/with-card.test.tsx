import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop, filmData} from '../../components/test-data';

import withCard from './with-card';

const MockComponent = () => {
  return (
    <article>FilmCard</article>
  );
};

const MockComponentWrapped = withCard(MockComponent);

describe(`Rendering with withCard`, () => {

  it(`Card with withCard renders correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        film={filmData}
        onMouseEnterCard={noop}
        onMouseLeaveCard={noop}
        isPlaying={false}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
