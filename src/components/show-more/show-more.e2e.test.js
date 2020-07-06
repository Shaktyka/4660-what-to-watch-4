import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowMore from './show-more.jsx';

configure({adapter: new Adapter()});

describe(`ShowMore component test`, () => {

  it(`ShowMore is clicked`, () => {
    const onShowMoreClick = jest.fn();

    const component = shallow(
        <ShowMore
          onShowMoreClick={onShowMoreClick}
        />
    );

    const button = component.find(`.catalog__button`);

    button.simulate(`click`);
    expect(onShowMoreClick).toHaveBeenCalledTimes(1);
  });

});
