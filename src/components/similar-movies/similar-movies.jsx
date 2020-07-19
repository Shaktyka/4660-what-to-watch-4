import React from 'react';
import PropTypes from 'prop-types';

import withCard from '../../hocs/with-сard/with-card.js';
import Card from '../card/card.jsx';
import Loader from '../loader/loader.jsx';

const CardWrapped = withCard(Card);

const SimilarMovies = (props) => {
  const {films, error, isLoading} = props;

  return error
    ?
    <div>{error}</div>
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
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

export default SimilarMovies;
