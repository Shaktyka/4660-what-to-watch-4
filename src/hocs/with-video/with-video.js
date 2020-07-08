import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {

  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this._timeout = null;
    }

    componentDidMount() {
      const {src, muted} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.muted = muted;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.muted = null;
      video.onplay = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        this._timeout = setTimeout(() => video.play(), 1000);
      } else {
        clearTimeout(this._timeout);
        video.load();
      }
    }

    render() {
      return (
        <Component
          {...props}
        />
      );
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    muted: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired
  };

  return WithVideo;

};

export default withVideo;
