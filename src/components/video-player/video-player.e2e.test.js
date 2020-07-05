import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const onefilmData = {
  preview: `mindhunter.jpg`,
  source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`VideoPlayer component's tests`, () => {

  it(`VideoPlayer has play state`, () => {
    const {source, preview} = onefilmData;
    const isPlaying = false;

    const videoComponent = mount(
        <VideoPlayer
          src={source}
          poster={preview}
          isPlaying={isPlaying}
          muted
        />
    );

    expect(videoComponent.props().isPlaying).toBe(isPlaying);
  });

  it(`VideoPlayer has pause state`, () => {
    const {source, preview} = onefilmData;
    const isPlaying = true;

    const videoComponent = mount(
        <VideoPlayer
          src={source}
          poster={preview}
          isPlaying={isPlaying}
          muted
        />
    );

    expect(videoComponent.props().isPlaying).toBe(isPlaying);
  });

});
