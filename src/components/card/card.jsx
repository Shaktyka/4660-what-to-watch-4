import React from 'react';
import PropTypes from 'prop-types';

const Card = ({film, mainTitleClickHandler, onMouseEnterCard, onMouseLeaveCard}) => {
  const {id, title, preview} = film;

  const handleCardEnter = () => onMouseEnterCard(id);

  const handleCardLeave = () => onMouseLeaveCard();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      id={id}
    >
      <div className="small-movie-card__image">
        <img src={`img/${preview}`} alt={title} width="280" height="175" />
      </div>
      <h3
        className="small-movie-card__title"
        onClick={mainTitleClickHandler}
      >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  mainTitleClickHandler: PropTypes.func.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired
};

export default Card;
