import * as React from 'react';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state';

interface MovieNavTabsProps {
  tabs: Array<string>;
  activeTab: string;
  onTabClick(tab: string): void;
}

const MovieNavTabs: React.FC<MovieNavTabsProps> = ({
  tabs,
  activeTab,
  onTabClick
}: MovieNavTabsProps) => {

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

const mapDispatchToProps = (dispatch) => ({
  onTabClick(tab) {
    dispatch(ActionCreator.changeMovieNavTab(tab));
  }
});

export {MovieNavTabs};
export default connect(null, mapDispatchToProps)(MovieNavTabs);
