import {reducer, ActionType, ActionCreator} from './reducer.js';

const MAX_GENRE_LENGTH = 9;
const DEFAULT_GENRE = `All genres`;

const promoFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

const onefilmData = {
  id: 7,
  title: `Mindhunter`,
  preview: `mindhunter.jpg`,
  genre: `Drama`,
  year: 2018,
  poster: `the-grand-budapest-hotel-poster.jpg`,
  cover: `bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 6.7,
  ratingCount: 410,
  description: [
    `Mindhunter is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
    `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
    `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
  ],
  director: `Bryan Singer`,
  starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const FILMS_DATA = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    year: 2018,
    preview: `/img/bohemian-rhapsody.jpg`,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.6,
    ratingCount: 240,
    description: [
      `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
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
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 3,
    title: `Fantastic beasts: the crimes of Grindelwald`,
    preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Fantasy`,
    year: 2019,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 9.7,
    ratingCount: 300,
    description: [
      `Fantastic beasts is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 4,
    title: `Johnny English`,
    preview: `/img/johnny-english.jpg`,
    genre: `Biography`,
    year: 2016,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.2,
    ratingCount: 150,
    description: [
      `Johnny English is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 5,
    title: `Macbeth`,
    preview: `/img/macbeth.jpg`,
    genre: `Crime`,
    year: 2017,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 4.5,
    ratingCount: 192,
    description: [
      `Macbeth is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 6,
    title: `Midnight Special`,
    preview: `/img/midnight-special.jpg`,
    genre: `Fighter`,
    year: 2015,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 5.9,
    ratingCount: 210,
    description: [
      `Midnight Special is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    id: 7,
    title: `Mindhunter`,
    preview: `/img/mindhunter.jpg`,
    genre: `Drama`,
    year: 2018,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 6.7,
    ratingCount: 410,
    description: [
      `Mindhunter is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 8,
    title: `Moonrise Kingdom`,
    preview: `/img/moonrise-kingdom.jpg`,
    genre: `Fantasy`,
    year: 2014,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7.5,
    ratingCount: 80,
    description: [
      `Moonrise Kingdom is a foot-stomping celebration of Queen, their music and singer Freddie Mercury.`,
      `The film traces the meteoric rise of the band through their iconic songs and revolutionary sound.`,
      `They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences.`
    ],
    director: `Bryan Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

const genres = [`All genres`, `Drama`, `Comedy`, `Fantasy`, `Biography`, `Crime`, `Fighter`];

describe(`Reducer tests`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: DEFAULT_GENRE,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    });
  });

  // Название жанра записывается в поле genre
  it(`Редьюсер корректно сохраняет значение жанра`, () => {

  });

  it(`Редьюсер записывает в genre "All genres", если название жанра не передано`, () => {

  });

  it(`Редьюсер хранит список из не более чем 10 жанров`, () => {

  });

  it(`Редьюсер отдаёт правильный список фильмов при существующем значении выбранного фильтра`, () => {

  });

  it(`Если передано несуществующее название жанра, то редьюсер отдаёт список всех фильмов`, () => {

  });

});

describe(`Action creators work correctly`, () => {

  it(`Action creator for changeGenre works correctly`, () => {
    expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`
    });
  });

  it(`Action creator for changeGenre returns "All genres" if genre is undefined`, () => {
    expect(ActionCreator.changeGenre()).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: DEFAULT_GENRE
    });
  });

  it(`Action creator for filterByGenre works correctly`, () => {
    expect(ActionCreator.filterByGenre(`Sci-Fi`)).toEqual({
      type: ActionType.FILTER_BY_GENRE,
      payload: `Sci-Fi`
    });
  });

  it(`Action creator for getActiveFilm works correctly`, () => {
    expect(ActionCreator.filterByGenre(1)).toEqual({
      type: ActionType.GET_ACTIVE_FILM,
      payload: 1
    });
  });

});
