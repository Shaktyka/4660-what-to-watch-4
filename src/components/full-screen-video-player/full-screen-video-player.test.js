import React from 'react';
import renderer from 'react-test-renderer';

import FullScreenVideoPlayer from './full-screen-video-player.jsx';

describe(`FullScreenVideoPlayer rendering`, () => {

  it(`FullScreenVideoPlayer renders correctly`, () => {

    const tree = renderer
      .create(
          <FullScreenVideoPlayer />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
