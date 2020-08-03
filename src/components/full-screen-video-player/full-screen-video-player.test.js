import React from 'react';
import renderer from 'react-test-renderer';

import FullScreenVideoPlayer from './full-screen-video-player.jsx';

const MockComponent = () => {
  return (
    <div></div>
  );
};

describe(`FullScreenVideoPlayer rendering`, () => {

  it(`FullScreenVideoPlayer renders correctly`, () => {

    const tree = renderer
      .create(
          <FullScreenVideoPlayer
            isPlay={true}
            timeElapsed={0}
            currentProgress={`0`}
            onPlayButtonClick={() => {}}
            onFullScreenClick={() => {}}
          >
            <MockComponent/>
          </FullScreenVideoPlayer>, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
