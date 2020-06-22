import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
  }

  render() {
    const {video, poster} = this.props;

    return (
      <video
        src={video}
        poster={poster}
        ref={this._videoRef}
      >
        Sorry, your browser doesn&apos;t support embedded videos,
        but don&apos;t worry, you can <a href={video}>download it</a>
        and watch it with your favorite video player!
      </video>
    );
  }

  componentDidUpdate() {
    // const video = this._videoRef.current;
  }
}

VideoPlayer.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
