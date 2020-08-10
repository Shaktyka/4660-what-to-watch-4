import * as React from 'react';
import * as renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

describe(`VideoPlayer rendering`, () => {

  it(`VideoPlayer renders correctly`, () => {

    const tree = renderer
      .create(
          <VideoPlayer>
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
