import React from 'react';
import PropTypes from 'prop-types';

const GenreItem = (props) => {
  const {genre, activeClass, onGenreClick} = props;

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
  activeClass: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default GenreItem;
