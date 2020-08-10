import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  isPlaying: boolean;
  onMouseEnterCard(): void;
  onMouseLeaveCard(): void;
}

interface State {
  isPlaying: boolean;
}

const withCard = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithCard extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      this.setState({
        isPlaying: true
      });
    };

    _handleMouseLeave () {
      this.setState({
        isPlaying: false
      });
    };

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseEnterCard={this._handleMouseEnter}
          onMouseLeaveCard={this._handleMouseLeave}
        />
      );
    }
  }

  return WithCard;

};

export default withCard;
