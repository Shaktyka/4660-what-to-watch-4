import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '../../components/test-data';

import withActiveItem from './with-active-item';

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem rendering`, () => {

  it(`withActiveItem renders correctly`, ()=>{
    const tree = renderer.create(
        <MockComponentWrapped
          activeItem={1}
          setActiveItem={noop}
          resetActiveItem={noop}
        />, {
          createNodeMock() {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
