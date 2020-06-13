import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

const MOCK_FILMS = [`Eternal Sunshine`, `Arizona Dream`, `Fargo`];

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
          films={MOCK_FILMS}
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
