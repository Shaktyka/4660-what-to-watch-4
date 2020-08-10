import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  selectedFilmId: number;
}

interface State {
  selectedFilmId: number;
}

const withFilmDetails = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithFilmDetails extends React.PureComponent<T, State> {
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

  return WithFilmDetails;
};

export default withFilmDetails;
