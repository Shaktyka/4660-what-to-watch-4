import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getGenres} from '../../reducer/data/selectors.js';
import {ActionCreator} from '../../reducer/app-state/app-state.js';

import GenreItem from '../genre-item/genre-item.jsx';

const GenresList = (props) => {
  const {genres, activeGenre, onGenreClick} = props;

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

const mapStateToProps = (state) => ({
  genres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filterByGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
