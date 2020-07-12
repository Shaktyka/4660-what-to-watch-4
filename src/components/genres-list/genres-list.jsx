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
          const isActive = genre === activeGenre;

          return (
            <GenreItem
              key={i}
              isActive={isActive}
              genre={genre}
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
