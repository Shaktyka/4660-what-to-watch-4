import * as React from 'react';

import {formatTime} from '../../utils';

interface HistoryObject {
  goBack(): void;
}

interface FullScreenVideoPlayerProps {
  isPlay: boolean;
  timeElapsed: number;
  currentProgress: string;
  onPlayButtonClick(): void;
  onFullscreenClick(): void;
  children: React.ReactNode;
  history: HistoryObject;
}

const FullScreenVideoPlayer: React.FC<FullScreenVideoPlayerProps> = ({
  history,
  isPlay,
  timeElapsed,
  currentProgress,
  onPlayButtonClick,
  onFullscreenClick,
  children
}: FullScreenVideoPlayerProps) => {

  return (
    <div className="player">
      <div className="visually-hidden">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <symbol id="play-s" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
          </symbol>
          <symbol width="14px" height="21px" viewBox="0 0 14 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"></polygon>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"></polygon>
            </g>
          </symbol>
        </svg>
      </div>

      {children}

      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentProgress}
              max="100">
            </progress>
            <div className="player__toggler"
              style={{left: currentProgress + `%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatTime(timeElapsed)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => onPlayButtonClick()}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use
                xlinkHref={isPlay ? `#pause` : `#play-s`}>
              </use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Название фильма</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => onFullscreenClick()}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenVideoPlayer;
