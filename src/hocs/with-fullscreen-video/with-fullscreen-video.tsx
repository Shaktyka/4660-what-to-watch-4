import * as React from 'react';
import {Subtract} from 'utility-types';

interface FilmData {
  poster: string;
  source: string;
  title: string;
}

interface InjectingProps {
  isPlay: boolean;
  timeElapsed: number;
  filmData: FilmData;
  currentProgress: number;
  onFullscreenClick(): void;
  onPlayButtonClick(): void;
}

interface State {
  isPlay: boolean;
  isFullscreen: boolean;
  timeElapsed: number;
  progress: null | number;
  duration: null | number;
  filmData: FilmData
}

const withFullscreenVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithFullscreenVideo extends React.PureComponent<T, State> {
    private _videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.state = {
        isPlay: true,
        isFullscreen: false,
        timeElapsed: 0,
        progress: null,
        duration: null,
        filmData: {poster: ``, source: ``, title: ``}
      };

      this._videoRef = React.createRef();

      this._handleFullscreenClick = this._handleFullscreenClick.bind(this);
      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    }

    componentDidMount() {
      const {films, filmId} = this.props;
      const filmData: FilmData = films.find((film) => film.id === filmId);
      const {poster, source, title} = filmData;

      const video = this._videoRef.current;
      video.parentElement.querySelector(`.player__name`).textContent = title;

      video.poster = poster;
      video.src = source;

      video.ontimeupdate = () => this.setState({
        timeElapsed: Math.floor(video.duration - video.currentTime),
        progress: Math.floor(video.currentTime),
        duration: Math.floor(video.duration)
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const {isPlay, isFullscreen} = this.state;
      const video = this._videoRef.current;

      if (isPlay) {
        video.play();
      } else {
        video.pause();
      }

      if (isFullscreen) {
        video.requestFullscreen();
      }

      if (!document.fullscreenElement) {
        this.setState({
          isFullscreen: false
        });
      }
    }

    _handleFullscreenClick() {
      const {isFullscreen} = this.state;

      this.setState({
        isFullscreen: !isFullscreen
      });
    }

    _handlePlayButtonClick() {
      const {isPlay} = this.state;

      this.setState({
        isPlay: !isPlay
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlay={this.state.isPlay}
          timeElapsed={this.state.timeElapsed}
          filmData={this.state.filmData}
          currentProgress={Math.floor(this.state.progress * 100 / this.state.duration).toString()}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullscreenClick={this._handleFullscreenClick}
        >
          <video
            className="player__video"
            ref={this._videoRef}
            autoPlay={true}
          >
            Sorry, your browser doesn&apos;t support embedded video
          </video>
        </Component>
      );
    }
  }

  return WithFullscreenVideo;

};

export default withFullscreenVideo;
