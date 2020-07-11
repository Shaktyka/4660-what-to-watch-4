import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FilmDetails from './film-details.jsx';

const TABS = [`Overview`, `Details`, `Reviews`];

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
      `Bohemian Rhapsody`
    ],
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    source: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    duration: 120
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
      `Dardjeeling Limited`
    ],
    director: `Joe Singer`,
    starring: [`Leslie Mann`, `John Cena`, `Ike Barinholtz`],
    source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 129
  }
];

const REVIEWS = [
  {
    text: `6 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `8,1`
  },
  {
    text: `66 review`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `7,5`
  }
];

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

const mockStore = configureStore([]);

describe(`FilmDetails renders screens correctly`, () => {

  it(`FilmDetails renders MovieOverview screen with Overview tab clicked`, () => {
    const onTabClick = jest.fn();

    const store = mockStore({
      filmsList: FILMS_DATA,
      movieNavTabs: TABS,
      activeMovieNavTab: `Overview`,
      filmReviews: REVIEWS
    });

    const component = mount(
        <Provider store={store}>
          <FilmDetails
            onTabClick={onTabClick}
            filmData={FILMS_DATA[0]}
            films={FILMS_DATA}
          />
        </Provider>
    );

    const allTabs = component.find(`.movie-nav__item`);
    const firstTab = allTabs.at(0);
    firstTab.simulate(`click`, mockEvent);

    const scoreValue = component.find(`.movie-rating__score`).text();

    expect(scoreValue).toEqual(`8.6`);
  });

  it(`FilmDetails renders MovieDetails screen with Details tab clicked`, () => {
    const onTabClick = jest.fn();

    const store = mockStore({
      filmsList: FILMS_DATA,
      movieNavTabs: TABS,
      activeMovieNavTab: `Details`,
      filmReviews: REVIEWS
    });

    const component = mount(
        <Provider store={store}>
          <FilmDetails
            onTabClick={onTabClick}
            filmData={FILMS_DATA[0]}
            films={FILMS_DATA}
          />
        </Provider>
    );

    const allTabs = component.find(`.movie-nav__item`);
    const tab = allTabs.at(1);
    tab.simulate(`click`, mockEvent);

    const directorName = component.find(`.movie-card__details-value`).at(0).text();

    expect(directorName).toEqual(`Bryan Singer`);
  });

  it(`FilmDetails renders MovieReviews screen with Reviews tab clicked`, () => {
    const onTabClick = jest.fn();

    const store = mockStore({
      filmsList: FILMS_DATA,
      movieNavTabs: TABS,
      activeMovieNavTab: `Reviews`,
      filmReviews: REVIEWS
    });

    const component = mount(
        <Provider store={store}>
          <FilmDetails
            onTabClick={onTabClick}
            filmData={FILMS_DATA[0]}
            films={FILMS_DATA}
          />
        </Provider>
    );

    const allTabs = component.find(`.movie-nav__item`);
    const tab = allTabs.at(2);
    tab.simulate(`click`, mockEvent);

    const commentText = component.find(`.review__text`).at(0).text();

    expect(commentText).toEqual(`6 review`);
  });

});