import React, {PureComponent} from 'react';

const withActiveItem = (Component, activeItemValue = false) => {

  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: activeItemValue
      };

      this._setActiveItem = this._setActiveItem.bind(this);
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
