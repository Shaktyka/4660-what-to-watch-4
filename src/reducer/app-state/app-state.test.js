import {reducer, ActionType, ActionCreator} from './app-state.js';

const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];
const GENRES = [`All genres`, `Drama`, `Comedy`, `Fantasy`, `Biography`, `Crime`, `Fighter`];
const DEFAULT_GENRE = GENRES[0];

const initState = {
  genre: DEFAULT_GENRE,
  selectedFilmId: 0,
  selectedFilm: {},
  reviewedFilm: {},
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0]
};

const filmData = {
  bgColor: `#A6B7AC`,
  cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City
    seeking revenge against Bill the Butcher, his father's killer.`,
  director: `Martin Scorsese`,
  duration: 167,
  genre: `Crime`,
  id: 1,
  isFavorite: false,
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  preview: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingCount: 370881,
  ratingScore: 8.8,
  source: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  title: `Gangs of new york`,
  year: 2002
};

describe(`AppState Reducer works correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initState);
  });

  it(`Reducer should change genre by a given value`, () => {
    expect(reducer({
      genre: DEFAULT_GENRE
    }, {
      type: ActionType.SET_GENRE,
      payload: `Drama`
    })).toEqual({
      genre: `Drama`
    });

    expect(reducer({
      genre: `Crime`
    }, {
      type: ActionType.SET_GENRE,
      payload: null,
    })).toEqual({
      genre: `All genres`
    });
  });

  it(`Reducer should change activeMovieNavTab by a given value`, () => {
    const clickedTab = `Details`;

    expect(reducer({
      activeMovieNavTab: MOVIE_NAV_TABS[0]
    }, {
      type: ActionType.CHANGE_MOVIE_NAV_TAB,
      payload: clickedTab,
    })).toEqual({
      activeMovieNavTab: clickedTab
    });
  });

  it(`Reducer should change selectedFilmId by a given value`, () => {
    expect(reducer({
      selectedFilmId: 1
    }, {
      type: ActionType.SET_SELECTED_FILM_ID,
      payload: 2
    })).toEqual({
      selectedFilmId: 2
    });
  });

  it(`Reducer should change selectedFilm by a given value`, () => {
    expect(reducer({
      selectedFilm: {id: 2}
    }, {
      type: ActionType.SET_SELECTED_FILM,
      payload: filmData
    })).toEqual({
      selectedFilm: filmData
    });
  });

  it(`Reducer should change reviewedFilm by a given value`, () => {
    expect(reducer({
      reviewedFilm: 4
    }, {
      type: ActionType.SET_REVIEWED_FILM,
      payload: 6
    })).toEqual({
      reviewedFilm: 6
    });
  });
});

describe(`AppState action creators work correctly`, () => {

  it(`Action creator for setGenre returns correct action`, () => {
    expect(ActionCreator.setGenre(`Comedy`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `Comedy`
    });
  });

  it(`Action creator for setSelectedFilmId returns correct action`, () => {
    expect(ActionCreator.setSelectedFilmId(2)).toEqual({
      type: ActionType.SET_SELECTED_FILM_ID,
      payload: 2
    });
  });

  it(`Action creator for setSelectedFilm returns correct action`, () => {
    expect(ActionCreator.setSelectedFilm(filmData)).toEqual({
      type: ActionType.GET_SELECTED_FILM,
      payload: filmData
    });
  });

  it(`Action creator for setReviewedFilm returns correct action`, () => {
    expect(ActionCreator.setReviewedFilm(4)).toEqual({
      type: ActionType.SET_REVIEWED_FILM,
      payload: 4
    });
  });

  it(`Action creator for change movieNavTab returns correct action`, () => {
    const clickedTab = `Reviews`;

    expect(ActionCreator.changeMovieNavTab(clickedTab)).toEqual({
      type: ActionType.CHANGE_MOVIE_NAV_TAB,
      payload: clickedTab
    });
  });

});
