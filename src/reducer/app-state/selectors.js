import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP_STATE;

const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

const getSelectedFilmId = (state) => {
  return state[NAME_SPACE].selectedFilmId;
};

export {getGenre, getSelectedFilmId};
