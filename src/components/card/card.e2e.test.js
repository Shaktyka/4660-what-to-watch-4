import React from 'react';

import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';

import Card from './card.jsx';

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

configure({
  adapter: new Adapter(),
});

describe(`Card e2e tests`, () => {

  it(`MovieCard is hovered`, () => {
    const onMouseEnterCard = jest.fn();
    const onMouseLeaveCard = jest.fn();

    const card = mount(
        <BrowserRouter>
          <Card
            film={filmData}
            onFilmCardClick={() => {}}
            onMouseEnterCard={onMouseEnterCard}
            onMouseLeaveCard={onMouseLeaveCard}
            isPlaying={false}
          />
        </BrowserRouter>
    );

    const movieCards = card.find(`.catalog__movies-card`);
    const movieCard = movieCards.at(0);

    movieCard.simulate(`mouseenter`, filmData);
    expect(onMouseEnterCard).toHaveBeenCalledTimes(1);
  });

  it(`MovieCard is unhovered`, () => {
    const onMouseEnterCard = jest.fn();
    const onMouseLeaveCard = jest.fn();

    const card = mount(
        <BrowserRouter>
          <Card
            film={filmData}
            onFilmCardClick={() => {}}
            onMouseEnterCard={onMouseEnterCard}
            onMouseLeaveCard={onMouseLeaveCard}
            isPlaying={false}
          />
        </BrowserRouter>
    );

    const movieCards = card.find(`.catalog__movies-card`);
    const movieCard = movieCards.at(0);

    movieCard.simulate(`mouseout`, filmData);
    expect(onMouseLeaveCard).toHaveBeenCalledTimes(1);
  });

});
