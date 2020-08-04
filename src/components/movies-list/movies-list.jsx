import React from 'react';
import PropTypes from 'prop-types';

import withCard from '../../hocs/with-сard/with-card.js';
import Card from '../card/card.jsx';
import ShowMore from '../show-more/show-more.jsx';
import Loader from '../loader/loader.jsx';

const CardWrapped = withCard(Card);

const MoviesList = (props) => {
  const {films, loadFilmsError, isLoading, isShowed, onShowMoreClick} = props;

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

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired
      })
  ).isRequired,
  loadFilmsError: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isShowed: PropTypes.bool.isRequired,
  onShowMoreClick: PropTypes.func.isRequired
};

export default MoviesList;
