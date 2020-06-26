import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this._timeout = null;
  }

  componentDidMount() {
    const {source, isMuted} = this.props;
    const video = this._videoRef.current;

    video.src = source;
    video.muted = isMuted;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.muted = null;
    video.onplay = null;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    // Дописать
  }

  render() {
    const {source, poster} = this.props;

    return (
      <video
        width="280"
        height="175"
        type="video/webm"
        poster={poster}
        ref={this._videoRef}
      >
        Sorry, your browser doesn&apos;t support embedded video,
        but don&apos;t worry, you can <a href={source}>download it</a>
        and watch it with your favorite video player!
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  source: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
