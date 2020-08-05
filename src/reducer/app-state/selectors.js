import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP_STATE;

const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

const getMovieNavTabs = (state) => {
  return state[NAME_SPACE].movieNavTabs;
};

const getActiveTab = (state) => {
  return state[NAME_SPACE].activeMovieNavTab;
};

export {
  getGenre,
  getMovieNavTabs,
  getActiveTab
};
