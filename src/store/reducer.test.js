import reducer from './reducer.js';
import {ActionType, ActionCreator} from './actions.js';

const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];
const DEFAULT_GENRE = `All genres`;

const promoFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

const FILMS = [
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
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    duration: 120,
    reviews: [
      {
        text: `1 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
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
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 129,
    reviews: [
      {
        text: `2 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `22 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
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
    source: `https://upload.wikimedia.org/wikipedia/commons/1/1b/Por_qu%C3%A9_hay_desabastecimiento_en_Venezuela.ogv`,
    duration: 132,
    reviews: [
      {
        text: `3 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `33 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `333 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
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
    source: `https://upload.wikimedia.org/wikipedia/commons/6/62/MyHome.webm`,
    duration: 86,
    reviews: [
      {
        text: `4 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `44 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `4444 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
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
    source: `https://upload.wikimedia.org/wikipedia/commons/3/3c/NETSPACE-10_years.webm`,
    duration: 156,
    reviews: [
      {
        text: `5 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `55 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `555 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `5555 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
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
    source: `https://upload.wikimedia.org/wikipedia/commons/4/41/110811-water-droplets-on-lake.ogv`,
    duration: 124,
    reviews: [
      {
        text: `6 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `66 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `6666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `66666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `666666 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
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
    source: `https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv`,
    duration: 102,
    reviews: [
      {
        text: `7 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
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
    source: `https://upload.wikimedia.org/wikipedia/commons/9/97/YBCO_video.webm`,
    duration: 98,
    reviews: [
      {
        text: `8 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      },
      {
        text: `88 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
          kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: `8,9`
      }
    ]
  }
];

const genres = [`All genres`, `Drama`, `Comedy`, `Fantasy`, `Biography`, `Crime`, `Fighter`];

const initState = {
  genre: DEFAULT_GENRE,
  filmsList: FILMS,
  activeFilm: promoFilmData,
  genres,
  movieNavTabs: MOVIE_NAV_TABS,
  activeMovieNavTab: MOVIE_NAV_TABS[0]
};

describe(`Reducer tests`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initState);
  });

  it(`Reducer writes a genre's value correctly`, () => {
    expect(reducer({
      genre: DEFAULT_GENRE,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    })).toEqual({
      genre: `Drama`,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    });
  });

  it(`Reducer writes "All genres" in genre if genre is not supported`, () => {
    expect(reducer({
      genre: `Crime`,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: null,
    })).toEqual({
      genre: `All genres`,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    });
  });

  it(`Reducer returns films list correctly with existing genre`, () => {
    const dramaFilms = [
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
        source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        duration: 120,
        reviews: [
          {
            text: `1 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
              kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
            author: `Kate Muir`,
            date: `2016-12-24`,
            rating: `8,9`
          }
        ]
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
        source: `https://upload.wikimedia.org/wikipedia/commons/d/d0/Caminandes-_Llama_Drama_-_Short_Movie.ogv`,
        duration: 102,
        reviews: [
          {
            text: `7 Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
              kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
            author: `Kate Muir`,
            date: `2016-12-24`,
            rating: `8,9`
          }
        ]
      }
    ];

    expect(reducer({
      genre: DEFAULT_GENRE,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    }, {
      type: ActionType.FILTER_BY_GENRE,
      payload: `Drama`,
    })).toEqual({
      genre: DEFAULT_GENRE,
      filmsList: dramaFilms,
      activeFilm: promoFilmData,
      genres
    });
  });

  it(`With unexisting genre name, reducer returns all films list`, () => {
    expect(reducer({
      genre: `Crime`,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Asdfg`,
    })).toEqual({
      genre: `Asdfg`,
      filmsList: FILMS_DATA,
      activeFilm: promoFilmData,
      genres
    });
  });

  it(`Reducer writes a tab's value correctly`, () => {
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

describe(`Action creators work correctly`, () => {

  it(`Action creator for changeGenre returns correct action`, () => {
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

  it(`Action creator for filterByGenre returns correct action`, () => {
    expect(ActionCreator.filterByGenre(`Sci-Fi`)).toEqual({
      type: ActionType.FILTER_BY_GENRE,
      payload: `Sci-Fi`
    });
  });

  it(`Action creator for getActiveFilm returns correct action`, () => {
    expect(ActionCreator.getActiveFilm(1)).toEqual({
      type: ActionType.GET_ACTIVE_FILM,
      payload: 1
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
