import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';

import {getPromoFilm, getFilmsByGenre} from '../../reducer/data/selectors.js';
import {getGenre, getLoading, getSelectedFilmId} from '../../reducer/app-state/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
// import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import Loader from '../loader/loader.jsx';
// import ErrorMessage from '../error-message/error-message.jsx';

class App extends PureComponent {

  _renderApp() {
    const {films, genre, promoFilm, selectedFilmId, isLoading} = this.props;

    if (isLoading) {
      return (
        <Loader />
      );
    }

    // filmData={films.find((film) => film.id === selectedFilmId)}

    const component = selectedFilmId
      ?
      <FilmDetails/>
      :
      <Main
        promoFilm={promoFilm}
        films={films.slice(0, 8)}
        genre={genre}
      />;
    return component;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {
              this._renderApp()
            }
          </Route>
          <Route exact path="/details">
            <FilmDetails filmData={{}} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  promoFilm: PropTypes.object.isRequired,
  selectedFilmId: PropTypes.number,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  selectedFilmId: getSelectedFilmId(state),
  isLoading: getLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
