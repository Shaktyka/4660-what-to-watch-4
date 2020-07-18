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

const getSelectedFilmData = (state) => {
  return ({
    id: 2,
    title: `Dardjeeling Limited`,
    preview: `/img/dardjeeling-limited.jpg`,
    genre: `Comedy`,
    year: 2019,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7.6,
    ratingCount: 140,
    description: [
      `Dardjeeling Limited is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 129
  });
};

export {
  getLoading,
  getGenre,
  getMovieNavTabs,
  getActiveTab,
  getSelectedFilmId,
  getSelectedFilmData
};
