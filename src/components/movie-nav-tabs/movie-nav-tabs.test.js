import React from 'react';
import renderer from 'react-test-renderer';

import MovieNavTabs from './movie-nav-tabs.jsx';

const tabs = [`Overview`, `Details`, `Reviews`];

describe(`MovieNavTabs component rendering`, () => {

  it(`MovieNavTabs renders correctly with the first active filter`, () => {
    const activeTab = tabs[0];

    const tree = renderer
      .create(
          <MovieNavTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`MovieNavTabs renders correctly with the last active tab`, () => {
    const activeTab = tabs[tabs.length - 1];

    const tree = renderer
      .create(
          <MovieNavTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
