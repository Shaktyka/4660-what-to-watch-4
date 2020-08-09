import * as React from 'react';

import {AppRoute} from '../../consts';

interface HistoryObject {
  push(): void;
}

interface MyListButtonProps {
  film: {
    id: number;
    isFavorite: boolean;
  };
  isAuthorized: boolean;
  onClick(): void;
  history: HistoryObject;
}

const MyListButton: React.FC<MyListButtonProps> = ({
  film,
  isAuthorized,
  onClick,
  history
}: MyListButtonProps) => {

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

export default MyListButton;
