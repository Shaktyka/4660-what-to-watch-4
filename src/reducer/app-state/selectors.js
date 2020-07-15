import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP_STATE;

const getCurrentGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export {getCurrentGenre};
