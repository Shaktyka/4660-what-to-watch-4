import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenresList from './genres-list.jsx';

const genres = [`All genres`, `Crime`, `Sci-Fi`, `Drama`];
const genre = `All genres`;

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Genres filter works correctly`, () => {

  it(`Clicked filters should return correct values`, () => {
    const onFilterClick = jest.fn();

    const genresList = mount(
        <GenresList
          genres={genres}
          activeGenre={genre}
          onGenreClick={onFilterClick}
        />
    );

    const filters = genresList.find(`.catalog__genres-item`);
    filters.forEach((filter) => filter.simulate(`click`));
    expect(onFilterClick).toHaveBeenCalledTimes(genres.length);
    expect(onFilterClick.mock.calls[0][0]).toBe(`All genres`);
    expect(onFilterClick.mock.calls[1][0]).toBe(`Crime`);
  });

});
