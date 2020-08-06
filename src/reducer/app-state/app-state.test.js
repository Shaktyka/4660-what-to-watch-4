import {reducer, ActionType, ActionCreator} from './app-state.js';

const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];
const GENRES = [`All genres`, `Drama`, `Comedy`, `Fantasy`, `Biography`, `Crime`, `Fighter`];
const DEFAULT_GENRE = GENRES[0];

const initState = {
  genre: DEFAULT_GENRE,
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0]
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
});

describe(`AppState action creators work correctly`, () => {

  it(`Action creator for setGenre returns correct action`, () => {
    expect(ActionCreator.setGenre(`Comedy`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `Comedy`
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
