import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {

  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: 0
      };
    }

    // _handleClick() {
    //   this.setState({
    //     activeItem
    //   });
    // }

    render() {
      const handleClick = (activeElement, action) => {
        console.log(activeElement, action);
        // store.dispatch.action(activeElement);
      };

      return (
        <Component
          {...this.props}
          onClick={handleClick}
        />
      );
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;

};

export default withActiveItem;
