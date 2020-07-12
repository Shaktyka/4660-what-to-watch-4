import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withCard = (Component) => {

  class WithCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };
    }

    render() {
      const {isPlaying} = this.state;

      const handleMouseEnter = () => {
        this.setState({
          isPlaying: true
        });
      };

      const handleMouseLeave = () => {
        this.setState({
          isPlaying: false
        });
      };

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onMouseEnterCard={handleMouseEnter}
          onMouseLeaveCard={handleMouseLeave}
        />
      );
    }
  }

  WithCard.propTypes = {
    film: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired
    }).isRequired
  };

  return WithCard;

};

export default withCard;
