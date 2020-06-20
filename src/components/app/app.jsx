import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._renderApp = this._renderApp.bind(this);
  }

  _renderApp() {
    // Рендерит приложение
  }

  render() {
    const {films, promoCard} = this.props;

    return (
      <Main
        promoCard={promoCard}
        films={films}
        mainTitleClickHandler={() => {}}
      />
    );
  }
}

App.propTypes = {
  promoCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};

export default App;
