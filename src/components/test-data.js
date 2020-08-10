export const noop = () => {
  // Mock function for test props
};

export const MOVIE_NAV_TABS = [`Overview`, `Details`, `Reviews`];

export const GENRES = [`All genres`, `Crime`, `Sci-Fi`, `Drama`, `Comedy`];

export const filmData = {
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

export const userData = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatar: `img/1.png`
};

export const comment = {
  id: 1,
  userId: 4,
  userName: `Kate Muir`,
  rating: 8.9,
  comment: `Discerning travellers`,
  date: `2019-05-08T14:13:56.569Z`
};

export const REVIEWS = [
  {
    id: 1,
    authorId: 4,
    authorName: `Kate Muir`,
    rating: 8.9,
    text: `Discerning travellers`,
    date: `2019-05-08T14:13:56.569Z`
  }
];
