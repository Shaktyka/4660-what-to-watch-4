import React from 'react';
// import PropTypes from 'prop-types';

import Card from '../card/card.jsx';

const MoviesList = ({films, mainTitleClickHandler, onHoverCard}) => {

  const cardsList = films.map((film) => (
    <Card
      title={film.title}
      key={Math.ceil(Math.random() * 1000)}
      poster={film.preview}
      mainTitleClickHandler={mainTitleClickHandler}
      onHoverCard={onHoverCard}
    />
  ));

  return (
    <div className="catalog__movies-list">
      {cardsList}
    </div>
  );

};

export default MoviesList;
