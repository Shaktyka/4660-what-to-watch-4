import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {
    genres,
    activeGenre,
    onFilterClick
  } = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, i) => {
          const activeClass = genre === activeGenre ? `catalog__genres-item--active` : ``;
          return (
            <li
              className={`catalog__genres-item ${activeClass}`}
              key={`genre-${i}`}
              onClick={(evt) => {
                evt.preventDefault();
                onFilterClick(genre);
              }}
            >
              <a href="#" className="catalog__genres-link">
                {genre}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired
};

export default GenresList;
