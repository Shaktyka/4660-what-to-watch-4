import React from 'react';
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {video, poster} = props;

  return (
    <video
      src={video}
      poster={poster}
      muted="muted"
    />
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
