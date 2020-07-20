import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = () => {
  // const {onShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {}}
      >
          Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func
};

export default ShowMore;
