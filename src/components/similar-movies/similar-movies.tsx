import * as React from 'react';

import withCard from '../../hocs/with-сard/with-card';
import Card from '../card/card';
import Loader from '../loader/loader';

import {FilmInterface, UserDataInterface} from '../../types';

const CardWrapped = withCard(Card);

interface SimilarMoviesProps {
  films: Array<FilmInterface>;
  loadFilmsError: string;
  isLoading: boolean;
}

const SimilarMovies: React.FC<SimilarMoviesProps> = ({
  films,
  loadFilmsError,
  isLoading
}: SimilarMoviesProps) => {

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
    </>;
};

export default SimilarMovies;
