import React from 'react';
import PropTypes from 'prop-types';

import GenreItem from '../genre-item/genre-item.jsx';

const GenresList = (props) => {
  const {
    genres,
    activeGenre,
    onGenreClick
  } = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, i) => {
          const activeClass = genre === activeGenre ? `catalog__genres-item--active` : ``;
          return (
            <GenreItem
              key={i}
              genre={genre}
              activeClass={activeClass}
              onGenreClick={onGenreClick}
            />
          );
        })
      }
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default GenresList;
