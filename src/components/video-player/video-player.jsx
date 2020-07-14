import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

VideoPlayer.propTypes = {
  children: PropTypes.node.isRequired
};

export default VideoPlayer;
