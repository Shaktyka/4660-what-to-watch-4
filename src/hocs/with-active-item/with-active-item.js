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

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          setActiveItem={this.setActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
