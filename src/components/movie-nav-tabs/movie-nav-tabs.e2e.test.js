import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieNavTabs from './movie-nav-tabs.jsx';

const tabs = [`Overview`, `Details`, `Reviews`];
const activeTab = `Overview`;

Enzyme.configure({
  adapter: new Adapter()
});

describe(`MovieNavTabs works correctly`, () => {

  it(`Clicked tabs should return correct values`, () => {
    const onTabClick = jest.fn();

    const tabsList = mount(
        <MovieNavTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
    );

    const tabsElements = tabsList.find(`.movie-nav__item`);
    tabsElements.forEach((tab) => tab.simulate(`click`));
    expect(onTabClick).toHaveBeenCalledTimes(tabs.length);
    expect(onTabClick.mock.calls[0][0]).toBe(tabs[0]);
    expect(onTabClick.mock.calls[1][0]).toBe(tabs[1]);
  });

});
