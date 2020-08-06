import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const videoData = {
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  preview: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
};

describe(`VideoPlayer e2e test`, () => {
  it(`Fuctions Start and Pause work correctly`, () => {
    const isPlaying = false;
    const children = <div />;

    const videoPlayer = mount(
        <VideoPlayer
          isPlaying={isPlaying}
          src={videoData.preview}
          poster={videoData.poster}
          muted
        >
          {children}
        </VideoPlayer>);

    expect(videoPlayer.props().isPlaying).toEqual(false);

    videoPlayer.setProps({isPlaying: true});
    expect(videoPlayer.props().isPlaying).toEqual(true);
  });
});
