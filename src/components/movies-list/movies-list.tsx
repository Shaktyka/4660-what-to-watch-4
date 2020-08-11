import * as React from 'react';

import withCard from '../../hocs/with-card/with-card';
import Card from '../card/card';
import ShowMore from '../show-more/show-more';
import Loader from '../loader/loader';
import {FilmInterface} from '../../types';

const CardWrapped = withCard(Card);

interface MoviesListProps {
  films: Array<FilmInterface>;
  loadFilmsError: string;
  isLoading: boolean;
  isShowed: boolean;
  onShowMoreClick(): void;
}

const MoviesList: React.FC<MoviesListProps> = ({
  films,
  loadFilmsError,
  isLoading,
  isShowed,
  onShowMoreClick
}: MoviesListProps) => {

  return loadFilmsError
    ?
    <div>{loadFilmsError}</div>
    :
    <>
      <div className="catalog__movies-list">
        {
          isLoading
            ?
            <Loader />
            :
            films.map((film, i) => {
              return (
                <CardWrapped
                  key={`movie-${i}`}
                  film={film}
                />
              );
            })
        }
      </div>
      {
        isShowed && <ShowMore onShowMoreClick={onShowMoreClick} />
      }
    </>;
};

export default MoviesList;
