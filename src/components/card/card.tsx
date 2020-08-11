import * as React from 'react';

import {Link} from 'react-router-dom';
import withVideo from '../../hocs/with-video/with-video';
import VideoPlayer from '../video-player/video-player';
import {FilmInterface} from '../../types';

const Video = withVideo(VideoPlayer);

interface CardProps {
  film: FilmInterface;
  onMouseEnterCard(id: number): void;
  onMouseLeaveCard(): void;
  isPlaying: boolean;
}

const Card: React.FC<CardProps> = ({
  film,
  isPlaying,
  onMouseEnterCard,
  onMouseLeaveCard
}: CardProps) => {

  const {id, title, preview, source} = film;
  const idValue = String(id);

  return (
    <Link to={`/films/${id}`} className="small-movie-card catalog__movies-card">
      <article
        id={idValue}
        onMouseEnter={() => onMouseEnterCard(id)}
        onMouseLeave={() => onMouseLeaveCard()}
      >
        <div
          className="small-movie-card__image"
        >
          <Video
            src={source}
            poster={preview}
            isPlaying={isPlaying}
            muted
          />
        </div>
        <h3
          className="small-movie-card__title"
          style={{color: `#d9ca74`}}
        >
          {title}
        </h3>
      </article>
    </Link>
  );
};

export default Card;
