import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';

import {getSelectedFilmId} from '../../reducer/app-state/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
// import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';

class App extends PureComponent {

  _renderApp() {
    const {selectedFilmId} = this.props;

    const component = selectedFilmId
      ?
      <FilmDetails/>
      :
      <Main />;
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
            <FilmDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  selectedFilmId: PropTypes.number
};

const mapStateToProps = (state) => ({
  selectedFilmId: getSelectedFilmId(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
