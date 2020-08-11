import * as React from 'react';
import {Subtract} from 'utility-types';
import {VideoAttributes} from '../../consts';

const videoDelay = 1000;

interface InjectingProps {
  _videoRef: React.RefObject<HTMLVideoElement>;
}

const withVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithVideo extends React.PureComponent<T, {}> {
    private _videoRef: React.RefObject<HTMLVideoElement>;
    private _timeout: NodeJS.Timeout;

    constructor(props) {
      super(props);

      this._videoRef = React.createRef();
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
        this._timeout = setTimeout(() => video.play(), videoDelay);
      } else {
        clearTimeout(this._timeout);
        video.load();
      }
    }

    render() {
      const {poster} = this.props;

      return (
        <Component
          {...this.props}
        >
          <video
            width={VideoAttributes.WIDTH}
            height={VideoAttributes.HEIGHT}
            data-type="video/webm"
            poster={poster}
            ref={this._videoRef}
          >
            Sorry, your browser doesn&apos;t support embedded video
          </video>
        </Component>
      );
    }
  }

  return WithVideo;

};

export default withVideo;
