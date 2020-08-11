import * as React from 'react';

import {connect} from 'react-redux';
import {getGenres} from '../../reducer/data/selectors';
import {getGenre} from '../../reducer/app-state/selectors';
import {ActionCreator} from '../../reducer/app-state/app-state';
import GenreItem from '../genre-item/genre-item';

interface GenresList {
  genres: Array<string>;
  activeGenre: string;
  onGenreClick(genre: string): void;
}


const GenresList: React.FC<GenresList> = ({
  genres,
  activeGenre,
  onGenreClick
}: GenresList) => {

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

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  activeGenre: getGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
