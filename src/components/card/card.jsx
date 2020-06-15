import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, poster, mainTitleClickHandler}) => {

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/${poster}`} alt={title} width="280" height="175" />
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
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  mainTitleClickHandler: PropTypes.func.isRequired
};

export default Card;
