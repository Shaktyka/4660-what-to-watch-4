import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import withVideo from '../../hocs/with-video/with-video.js';
import VideoPlayer from '../video-player/video-player.jsx';

const Video = withVideo(VideoPlayer);

const Card = (props) => {
  const {film, onMouseEnterCard, onMouseLeaveCard, isPlaying} = props;
  const {id, title, preview, source} = film;

  return (
    <Link to={`/films/${id}`} className="small-movie-card catalog__movies-card">
      <article
        id={id}
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

Card.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default Card;
