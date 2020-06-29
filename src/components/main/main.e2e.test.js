import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

import {FILMS_DATA, promoCardData} from '../test-data.js';
const genres = [`All genres`, `Crime`, `Sci-Fi`, `Drama`];
const genre = `All genres`;

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main component`, () => {

  it(`Title has been clicked`, () => {
    const onFilmCardClick = jest.fn();

    const main = mount(
        <Main
          genre={genre}
          genres={genres}
          promoCard={promoCardData}
          films={FILMS_DATA}
          onFilmCardClick={onFilmCardClick}
          onGenreClick={() => {}}
        />
    );

    const cardTitles = main.find(`.small-movie-card__title`);

    cardTitles.forEach((title) => {
      title.simulate(`click`, {preventDefault() {}});
    });

    expect(onFilmCardClick).toHaveBeenCalledTimes(8);
  });

});
