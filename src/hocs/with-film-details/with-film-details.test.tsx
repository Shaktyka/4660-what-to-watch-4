import * as React from 'react';
import * as renderer from 'react-test-renderer';

import withFilmDetails from './with-film-details';

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withFilmDetails(MockComponent);

describe(`withFilmDetails rendering`, () => {

  it(`withFilmDetails renders correctly`, ()=>{
    const tree = renderer.create(
        <MockComponentWrapped
          filmId={1}
        />, {
          createNodeMock() {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
