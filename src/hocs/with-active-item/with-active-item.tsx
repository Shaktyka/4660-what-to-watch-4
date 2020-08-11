import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  setActiveItem(item: string | number): void;
  resetActiveItem(): void;
  activeItem: string | number;
}

interface State {
  activeItem: string | number;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: ``
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._resetActiveItem = this._resetActiveItem.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    _resetActiveItem() {
      this.setState({
        activeItem: null
      });
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          setActiveItem={this._setActiveItem}
          resetActiveItem={this._resetActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
