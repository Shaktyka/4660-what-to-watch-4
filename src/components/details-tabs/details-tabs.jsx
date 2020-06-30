import React from 'react';
import PropTypes from 'prop-types';

const DetailsTabs = (props) => {
  const {tabs, activeTab, onTabClick} = props;

  return (
    <ul className="movie-nav__list">
      {
        tabs.map((tab) => (
          <li
            key={`tab-${tab}`}
            className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}
            onClick={(evt) => {
              evt.preventDefault();
              onTabClick(tab);
            }}
          >
            <a href="#" className="movie-nav__link">{tab}</a>
          </li>
        ))
      }
    </ul>
  );
};

DetailsTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default DetailsTabs;
