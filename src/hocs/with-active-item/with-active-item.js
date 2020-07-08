import React, {PureComponent} from 'react';

// применить общее поведение (выделение элемента) для «Список жанров» и «Список карточек с фильмами»

const withActiveItem = (Component) => {

  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemId: 0,
      };
    }

    render() {
      const {activeItemId} = this.state;

      return (
        <Component
          {...this.props}
          onClick={() => this.setState({
            activeItemId
          })}
        />
      );
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;

};

export default withActiveItem;
