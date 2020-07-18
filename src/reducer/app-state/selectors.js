import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP_STATE;

const getLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};

const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

const getMovieNavTabs = (state) => {
  return state[NAME_SPACE].movieNavTabs;
};

const getActiveTab = (state) => {
  return state[NAME_SPACE].activeMovieNavTab;
};

const getSelectedFilmId = (state) => {
  return state[NAME_SPACE].selectedFilmId;
};

export {
  getLoading,
  getGenre,
  getMovieNavTabs,
  getActiveTab,
  getSelectedFilmId
};
