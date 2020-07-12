import React from 'react';
import PropTypes from 'prop-types';

const GenreItem = (props) => {
  const {genre, isActive, onGenreClick} = props;
  const activeClass = isActive ? `catalog__genres-item--active` : ``;

  return (
    <li
      className={`catalog__genres-item ${activeClass}`}
      onClick={(evt) => {
        evt.preventDefault();
        onGenreClick(genre);
      }}
    >
      <a href="#" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
};

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default GenreItem;
