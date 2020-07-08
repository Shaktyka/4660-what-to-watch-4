import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  render() {
    const {src, poster} = this.props;

    return (
      <video
        width="280"
        height="175"
        type="video/webm"
        poster={poster}
        ref={this._videoRef}
      >
        Sorry, your browser doesn&apos;t support embedded video,
        but don&apos;t worry, you can <a href={src}>download it</a>
        and watch it with your favorite video player!
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
