import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._renderApp = this._renderApp.bind(this);
    this._renderFilmDetails = this._renderFilmDetails.bind(this);
  }

  _renderApp() {
    const {films, promoCard} = this.props;

    return (
      <Main
        promoCard={promoCard}
        films={films}
        mainTitleClickHandler={() => {}}
      />
    );
  }

  _renderFilmDetails() {
    return (
      <FilmDetails />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            {this._renderFilmDetails()}
          </Route>
        </Switch>
      </BrowserRouter>
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
