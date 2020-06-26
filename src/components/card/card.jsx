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
        id={id}
        className="small-movie-card catalog__movies-card"
        onClick={() => onFilmCardClick(id)}
        onMouseEnter={() => {
          onMouseEnterCard(id);
          this.setState({isPlaying: true});
        }}
        onMouseLeave={() => {
          onMouseLeaveCard();
          this.setState({isPlaying: false});
        }}
      >
        <div
          className="small-movie-card__image"
        >
          <VideoPlayer
            src={source}
            poster={preview}
            isPlaying={isPlaying}
            muted
          />
        </div>
        <h3
          className="small-movie-card__title"
          onClick={(evt) => evt.preventDefault()}
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
