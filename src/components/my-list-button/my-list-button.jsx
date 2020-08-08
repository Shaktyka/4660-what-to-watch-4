import React from 'react';

import PropTypes from 'prop-types';
import {AppRoute} from '../../consts.js';

const MyListButton = ({film, isAuthorized, onClick, history}) => {
  const {id, isFavorite} = film;

  return (
    <button
      type="button"
      to={AppRoute.MYLIST}
      className="btn btn--list movie-card__button"
      onClick={() => {
        if (isAuthorized) {
          const status = !isFavorite ? 1 : 0;
          return onClick(id, status);
        } else {
          return history.push(AppRoute.LOGIN);
        }
      }}
    >
      {
        (isFavorite && isAuthorized)
          ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
  isAuthorized: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default MyListButton;
