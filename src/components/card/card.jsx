import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import history from '../../history.js';
import {Link} from 'react-router-dom';

import withVideo from '../../hocs/with-video/with-video.js';
import VideoPlayer from '../video-player/video-player.jsx';

const Video = withVideo(VideoPlayer);

const Card = (props) => {
  const {film, onCardClick, onMouseEnterCard, onMouseLeaveCard, isPlaying} = props;
  const {id, title, preview, source} = film;

  return (
    <article
      id={id}
      className="small-movie-card catalog__movies-card"
      onClick={() => {
        onCardClick(id);
        history.push(`/films/${id}`);
      }}
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
      >
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

Card.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(id) {
    dispatch(ActionCreator.setSelectedFilm(id));
    dispatch(DataOperation.loadReviews(id));
  }
});

export {Card};
export default connect(null, mapDispatchToProps)(Card);
