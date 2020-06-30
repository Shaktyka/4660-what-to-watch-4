import React from 'react';
import renderer from 'react-test-renderer';

import DetailsTabs from './details-tabs.jsx';

const tabs = [`Overview`, `Details`, `Reviews`];

describe(`DetailsTabs component rendering`, () => {

  it(`DetailsTabs renders correctly with the first active filter`, () => {
    const activeTab = tabs[0];

    const tree = renderer
      .create(
          <DetailsTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`DetailsTabs renders correctly with the last active tab`, () => {
    const activeTab = tabs[tabs.length - 1];

    const tree = renderer
      .create(
          <DetailsTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
