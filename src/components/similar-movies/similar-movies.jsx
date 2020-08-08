import React from 'react';
import PropTypes from 'prop-types';

import withCard from '../../hocs/with-сard/with-card.js';
import Card from '../card/card.jsx';
import Loader from '../loader/loader.jsx';

const CardWrapped = withCard(Card);

const SimilarMovies = (props) => {
  const {films, loadFilmsError, isLoading} = props;

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

SimilarMovies.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    bgColor: PropTypes.string,
    cover: PropTypes.string,
    poster: PropTypes.string,
    isFavorite: PropTypes.bool,
    preview: PropTypes.string,
    source: PropTypes.string,
  })).isRequired,
  loadFilmsError: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default SimilarMovies;
