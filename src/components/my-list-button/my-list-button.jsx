import React from 'react';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MyListButton = ({id, isFavorite, isAuthorized, onClick}) => {

  return (
    <Link
      to={`/mylist`}
      className="btn btn--list movie-card__button"
      onClick={() => {
        const status = !isFavorite ? 1 : 0;
        onClick(id, status);
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
    </Link>
  );
};

MyListButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MyListButton;
