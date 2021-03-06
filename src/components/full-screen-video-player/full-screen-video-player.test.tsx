import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '../test-data';

import FullScreenVideoPlayer from './full-screen-video-player';

const MockComponent = () => {
  return (
    <div></div>
  );
};

describe(`FullScreenVideoPlayer rendering`, () => {

  it(`FullScreenVideoPlayer renders correctly`, () => {
    const history = {
      goBack: noop
    };

    const tree = renderer
      .create(
          <FullScreenVideoPlayer
            isPlay={true}
            timeElapsed={0}
            currentProgress={`0`}
            onPlayButtonClick={noop}
            onFullscreenClick={noop}
            history={history}
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
