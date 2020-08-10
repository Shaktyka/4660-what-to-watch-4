import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withVideo from './with-video.js';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

describe(`withVideo rendering`, () => {

  it(`withVideo renders correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        src={` `}
        poster={` `}
        isPlaying={false}
        muted
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
