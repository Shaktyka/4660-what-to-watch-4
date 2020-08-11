import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

import {noop, filmData} from '../../components/test-data';

import withCard from './with-card';

configure({
  adapter: new Adapter(),
});

const mockComponent = () => <div />;

const MockComponentWrapped = withCard(mockComponent);

describe(`withCard works correctly`, () => {

  it(`Card should change prop isPlaying`, ()=>{
    const component = shallow(
        <MockComponentWrapped
          film={filmData}
          onMouseEnterCard={noop}
          onMouseLeaveCard={noop}
          isPlaying={false}
        />
    );

    expect(component.props().isPlaying).toEqual(false);

    component.props().onMouseEnterCard();
    expect(component.props().isPlaying).toEqual(true);

    component.props().onMouseLeaveCard();
    expect(component.props().isPlaying).toEqual(false);
  });

});
