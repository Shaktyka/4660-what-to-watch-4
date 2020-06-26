import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {film, onFilmCardClick, onMouseEnterCard, onMouseLeaveCard} = this.props;
    const {id, title, preview, source} = film;
    const {isPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => onMouseEnterCard(id)}
        onMouseLeave={() => onMouseLeaveCard()}
        id={id}
      >
        <div
          className="small-movie-card__image"
          onClick={() => onFilmCardClick(id)}
        >
          <img src={`img/${preview}`} alt={title} width="280" height="175" />
          <VideoPlayer video={source} poster={preview} />
        </div>
        <h3
          className="small-movie-card__title"
          onClick={(evt) => {
            evt.preventDefault();
            onFilmCardClick(id);
          }}
        >
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

Card.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired
};

export default Card;
