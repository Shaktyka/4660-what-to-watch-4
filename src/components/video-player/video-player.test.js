import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const MOCK_VIDEO = {
  preview: `/img/johnny-english.jpg`,
  source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

describe(`VideoPlayer rendering`, () => {

  it(`VideoPlayer renders correctly`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            src={MOCK_VIDEO.source}
            poster={MOCK_VIDEO.preview}
            isPlaying={false}
            muted
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
