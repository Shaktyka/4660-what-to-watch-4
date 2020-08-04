import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from "../../reducer/name-space";

import MovieNavTabs from './movie-nav-tabs.jsx';

const tabs = [`Overview`, `Details`, `Reviews`];
const activeTab = `Overview`;

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.APP_STATE]: {
    movieNavTabs: tabs,
    activeMovieNavTab: activeTab,
  }
});

const mockEvent = {
  preventDefault() {}
};

describe(`MovieNavTabs works correctly`, () => {

  it(`Clicked tabs should return correct values`, () => {
    const onTabClick = jest.fn((args) => args);

    const tabsComponent = shallow(
        <Provider store={store}>
          <MovieNavTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={onTabClick}
          />
        </Provider>
    );

    const movieTabs = tabsComponent.find(`.movie-nav__item`);

    movieTabs.forEach((tab) => tab.simulate(`click`, mockEvent));
    expect(onTabClick).toHaveBeenCalledTimes(tabs.length);
    expect(onTabClick.mock.calls[0][0]).toBe(tabs[0]);
    expect(onTabClick.mock.calls[1][0]).toBe(tabs[1]);
  });

});
