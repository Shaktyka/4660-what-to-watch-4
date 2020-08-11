import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {filmData} from '../../components/test-data';

import withShowMore from './with-show-more';

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withShowMore(MockComponent);

describe(`withShowMore rendering`, () => {

  it(`withShowMore renders correctly`, ()=>{
    const tree = renderer.create(
        <MockComponentWrapped
          films={[filmData]}
        />, {
          createNodeMock() {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
