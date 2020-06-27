import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

import {onefilmData} from '../test-data.js';

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
