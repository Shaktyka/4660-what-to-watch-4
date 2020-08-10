import * as React from 'react';
import * as renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

const onefilmData = {
  preview: `mindhunter.jpg`,
  source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`VideoPlayer rendering`, () => {

  it(`VideoPlayer renders correctly`, () => {
    const {source, preview} = onefilmData;

    const tree = renderer
      .create(
          <VideoPlayer
            src={source}
            poster={preview}
            isPlaying={false}
            muted
          >
            <video />
          </VideoPlayer>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
