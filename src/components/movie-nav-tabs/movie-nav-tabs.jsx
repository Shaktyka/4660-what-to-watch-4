import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';

const MovieNavTabs = (props) => {
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
            <Link to="#" className="movie-nav__link">{tab}</Link>
          </li>
        ))
      }
    </ul>
  );
};

MovieNavTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onTabClick(tab) {
    dispatch(ActionCreator.changeMovieNavTab(tab));
  }
});

export {MovieNavTabs};
export default connect(null, mapDispatchToProps)(MovieNavTabs);
