import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withFilmDetails = (Component) => {

  class WithFilmDetails extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedFilmId: this.props.filmId
      };
    }

    componentDidMount() {
      const {filmId} = this.props;
      this.setState({
        selectedFilmId: filmId
      });
    }

    componentDidUpdate() {
      const {filmId} = this.props;
      this.setState({
        selectedFilmId: filmId
      });
    }

    render() {
      const {selectedFilmId} = this.state;

      return (
        <Component
          {...this.props}
          selectedFilmId={selectedFilmId}
        />
      );
    }
  }

  WithFilmDetails.propTypes = {
    filmId: PropTypes.number.isRequired
  };

  return WithFilmDetails;
};

export default withFilmDetails;
