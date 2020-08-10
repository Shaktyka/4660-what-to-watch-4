import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

import ShowMore from './show-more';

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
