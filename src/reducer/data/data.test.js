import {reducer, ActionType, ActionCreator} from "./data.js";

const initialState = {
  films: [],
  favoritesFilms: [],
  promoFilm: {},
  genres: [],
  filmReviews: [],
  isFilmsLoading: false,
  isPromoLoading: false,
  isReviewsLoading: false,
  loadFilmsErr: null,
  loadPromoErr: null,
  loadReviewsErr: null,
  isReviewPosting: false,
  postingReviewErr: null,
  isFavoritesFilmsLoading: false,
  loadFavoritesFilmsErr: null
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

const genres = [`aaa`, `bbb`, `ccc`];

const review = {
  id: 1,
  userId: 4,
  userName: `Kate Muir`,
  rating: 8.9,
  comment: `Discerning travellers`,
  date: `2019-05-08T14:13:56.569Z`
};

describe(`Data Reducer works correctly`, () => {

  it(`Data Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Data Reducer should change films by a given value`, () => {
    expect(reducer({
      films: []
    }, {
      type: ActionType.LOAD_FILMS,
      payload: [filmData]
    })).toEqual({
      films: [filmData]
    });

    expect(reducer({
      films: [filmData]
    }, {
      type: ActionType.LOAD_FILMS,
      payload: []
    })).toEqual({
      films: []
    });
  });

  it(`Data Reducer should change promoFilm by a given value`, () => {
    expect(reducer({
      promoFilm: filmData
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmData
    })).toEqual({
      promoFilm: filmData
    });
  });

  it(`Data Reducer should change genres by a given value`, () => {
    expect(reducer({
      genres: []
    }, {
      type: ActionType.LOAD_GENRES,
      payload: genres
    })).toEqual({
      genres
    });
  });

  it(`Data Reducer should change filmReviews by a given value`, () => {
    expect(reducer({
      filmReviews: []
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: [review]
    })).toEqual({
      filmReviews: [review]
    });
  });

  it(`Data Reducer should change isFilmsLoading by a given value`, () => {
    expect(reducer({
      isFilmsLoading: false
    }, {
      type: ActionType.SET_FILMS_LOADING,
      payload: true
    })).toEqual({
      isFilmsLoading: true
    });
  });

  it(`Data Reducer should change isPromoLoading by a given value`, () => {
    expect(reducer({
      isPromoLoading: false
    }, {
      type: ActionType.SET_PROMO_LOADING,
      payload: true
    })).toEqual({
      isPromoLoading: true
    });
  });

  it(`Data Reducer should change . by a given value`, () => {
    expect(reducer({
      isReviewsLoading: false
    }, {
      type: ActionType.SET_REVIEWS_LOADING,
      payload: true
    })).toEqual({
      isReviewsLoading: true
    });
  });

  it(`Data Reducer should change isReviewPosting by a given value`, () => {
    expect(reducer({
      isReviewPosting: false
    }, {
      type: ActionType.SET_REVIEW_POSTING,
      payload: true
    })).toEqual({
      isReviewPosting: true
    });
  });

  it(`Data Reducer should change loadFilmsErr by a given value`, () => {
    expect(reducer({
      loadFilmsErr: null
    }, {
      type: ActionType.SET_FILMS_ERR_MSG,
      payload: `error text 1`
    })).toEqual({
      loadFilmsErr: `error text 1`
    });
  });

  it(`Data Reducer should change loadFavoritesFilmsErr by a given value`, () => {
    expect(reducer({
      loadFavoritesFilmsErr: null
    }, {
      type: ActionType.SET_FAVORITES_FILMS_ERR_MSG,
      payload: `error text 2`
    })).toEqual({
      loadFavoritesFilmsErr: `error text 2`
    });
  });

  it(`Data Reducer should change loadPromoErr by a given value`, () => {
    expect(reducer({
      loadPromoErr: null
    }, {
      type: ActionType.SET_PROMO_ERR_MSG,
      payload: `error text 3`
    })).toEqual({
      loadPromoErr: `error text 3`
    });
  });

  it(`Data Reducer should change loadReviewsErr by a given value`, () => {
    expect(reducer({
      loadReviewsErr: null
    }, {
      type: ActionType.SET_REVIEWS_ERR_MSG,
      payload: `error text 4`
    })).toEqual({
      loadReviewsErr: `error text 4`
    });
  });

  it(`Data Reducer should change favoritesFilms by a given value 1`, () => {
    expect(reducer({
      favoritesFilms: [{id: 2}]
    }, {
      type: ActionType.ADD_FAVORITE_FILM,
      payload: filmData
    })).toEqual({
      favoritesFilms: [{id: 2}, filmData]
    });
  });

  it(`Data Reducer should change favoritesFilms by a given value 2`, () => {
    expect(reducer({
      favoritesFilms: []
    }, {
      type: ActionType.LOAD_FAVORITES_FILMS,
      payload: [filmData]
    })).toEqual({
      favoritesFilms: [filmData]
    });
  });

  it(`Data Reducer should change isFavoritesFilmsLoading by a given value`, () => {
    expect(reducer({
      isFavoritesFilmsLoading: false
    }, {
      type: ActionType.SET_FAVORITES_FILMS_LOADING,
      payload: true
    })).toEqual({
      isFavoritesFilmsLoading: true
    });
  });

});

describe(`Data Action creators work correctly`, () => {

  it(`Data Action Creator for loadFilms returns correct action`, () => {
    expect(ActionCreator.loadFilms([filmData])).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: [filmData]
    });
  });

  it(`Data Action Creator for loadPromoFilm returns correct action`, () => {
    expect(ActionCreator.loadPromoFilm(filmData)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmData
    });
  });

  it(`Data Action Creator for loadGenres returns correct action`, () => {
    expect(ActionCreator.loadGenres(genres)).toEqual({
      type: ActionType.LOAD_GENRES,
      payload: genres
    });
  });

  it(`Data Action Creator for loadReviews returns correct action`, () => {
    expect(ActionCreator.loadReviews([review])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: [review]
    });
  });

  it(`Data Action Creator for setFilmsLoading returns correct action`, () => {
    expect(ActionCreator.setFilmsLoading(true)).toEqual({
      type: ActionType.SET_FILMS_LOADING,
      payload: true
    });
  });

  it(`Data Action Creator for setFavoritesFilmsLoading returns correct action`, () => {
    expect(ActionCreator.setFavoritesFilmsLoading(false)).toEqual({
      type: ActionType.SET_FAVORITES_FILMS_LOADING,
      payload: false
    });
  });

  it(`Data Action Creator for setPromoLoading returns correct action`, () => {
    expect(ActionCreator.setPromoLoading(true)).toEqual({
      type: ActionType.SET_PROMO_LOADING,
      payload: true
    });
  });

  it(`Data Action Creator for setReviewsLoading returns correct action`, () => {
    expect(ActionCreator.setReviewsLoading(false)).toEqual({
      type: ActionType.SET_REVIEWS_LOADING,
      payload: false
    });
  });

  it(`Data Action Creator for setReviewPosting returns correct action`, () => {
    expect(ActionCreator.setReviewPosting(true)).toEqual({
      type: ActionType.SET_REVIEW_POSTING,
      payload: true
    });
  });

  it(`Data Action Creator for setFilmsErrMsg returns correct action`, () => {
    expect(ActionCreator.setFilmsErrMsg(`error text`)).toEqual({
      type: ActionType.SET_FILMS_ERR_MSG,
      payload: `error text`
    });
  });

  it(`Data Action Creator for setFavoritesFilmsErrMsg returns correct action`, () => {
    expect(ActionCreator.setFavoritesFilmsErrMsg(`error text 1`)).toEqual({
      type: ActionType.SET_FAVORITES_FILMS_ERR_MSG,
      payload: `error text 1`
    });
  });

  it(`Data Action Creator for setPromoErrMsg returns correct action`, () => {
    expect(ActionCreator.setPromoErrMsg(`error text 2`)).toEqual({
      type: ActionType.SET_PROMO_ERR_MSG,
      payload: `error text 2`
    });
  });

  it(`Data Action Creator for setReviewsErrMsg returns correct action`, () => {
    expect(ActionCreator.setReviewsErrMsg(`error text 3`)).toEqual({
      type: ActionType.SET_REVIEWS_ERR_MSG,
      payload: `error text 3`
    });
  });

  it(`Data Action Creator for setReviewErrMsg returns correct action`, () => {
    expect(ActionCreator.setReviewErrMsg(`error text 4`)).toEqual({
      type: ActionType.SET_REVIEW_ERR_MSG,
      payload: `error text 4`
    });
  });

  it(`Data Action Creator for addFavoriteFilm returns correct action`, () => {
    expect(ActionCreator.addFavoriteFilm(3)).toEqual({
      type: ActionType.ADD_FAVORITE_FILM,
      payload: 3
    });
  });

  it(`Data Action Creator for loadFavoritesFilms returns correct action`, () => {
    expect(ActionCreator.loadFavoritesFilms([filmData])).toEqual({
      type: ActionType.LOAD_FAVORITES_FILMS,
      payload: [filmData]
    });
  });

  it(`Data Action Creator for removeFavoriteFilm returns correct action`, () => {
    expect(ActionCreator.removeFavoriteFilm(2)).toEqual({
      type: ActionType.REMOVE_FAVORITE_FILM,
      payload: 2
    });
  });

});
