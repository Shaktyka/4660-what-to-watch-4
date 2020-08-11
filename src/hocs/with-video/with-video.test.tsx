import * as React from 'react';
import * as renderer from 'react-test-renderer';

import withVideo from './with-video';

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withVideo(MockComponent);

describe(`withVideo rendering`, () => {

  it(`withVideo renders correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        src={` `}
        poster={` `}
        isPlaying={false}
        muted
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
