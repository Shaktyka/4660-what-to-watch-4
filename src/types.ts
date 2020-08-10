export interface UserDataInterface {
  id: number;
  email: string;
  name: string;
  avatar: string;
}

export interface ReviewInterface {
  id: number,
  authorId: number,
  authorName: string,
  rating: number,
  text: string,
  date: string
}

export interface FilmInterface {
  title: string;
  genre: string;
  year: number;
  bgColor: string;
  background: string;
  poster: string;
  cover: string;
  id: number;
  description: string;
  ratingScore: number;
  ratingCount: number;
  director: string;
  starring: Array<string>;
  duration: number;
  previewVideoLink: string;
  source: string;
  isFavorite: boolean;
}

export interface HistoryObject {
  push(): void;
}
