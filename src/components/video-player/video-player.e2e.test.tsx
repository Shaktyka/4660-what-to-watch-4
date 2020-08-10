import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';

import {configure, mount} from 'enzyme';

import VideoPlayer from './video-player';

configure({
  adapter: new Adapter(),
});

describe(`VideoPlayer e2e test`, () => {
  it(`Fuctions Start and Pause work correctly`, () => {
    const children = <div />;

    const videoPlayer = mount(
        <VideoPlayer>
          {children}
        </VideoPlayer>);

    expect(videoPlayer.props().isPlaying).toEqual(false);

    videoPlayer.setProps({isPlaying: true});
    expect(videoPlayer.props().isPlaying).toEqual(true);
  });
});
