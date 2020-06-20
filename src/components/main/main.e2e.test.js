import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

const FILMS_DATA = [
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    preview: `bohemian-rhapsody.jpg`
  },
  {
    id: 2,
    title: `Dardjeeling Limited`,
    preview: `dardjeeling-limited.jpg`
  },
  {
    id: 3,
    title: `Fantastic beasts: the crimes of Grindelwald`,
    preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

const promoCardData = {
  title: `Dr.No`,
  genre: `Thriller`,
  releaseYear: 1962
};

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main component`, () => {

  it(`Title has been clicked`, () => {
    const mainTitleClickHandler = jest.fn();

    const main = mount(
        <Main
          promoCard={promoCardData}
          films={FILMS_DATA}
          mainTitleClickHandler={mainTitleClickHandler}
        />
    );

    const cardTitles = main.find(`.small-movie-card__title`);

    cardTitles.forEach((title) => {
      title.simulate(`click`, {preventDefault() {}});
    });

    expect(mainTitleClickHandler).toHaveBeenCalledTimes(3);
  });

});
