import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  render() {
    const {children} = this.props;

    return (
      <>
        {children}
      </>
    );
  }
}

VideoPlayer.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default VideoPlayer;
