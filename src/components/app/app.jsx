import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';

import {getLoading, getSelectedFilmId} from '../../reducer/app-state/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
// import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

import Main from '../main/main.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import Loader from '../loader/loader.jsx';

class App extends PureComponent {

  _renderApp() {
    const {selectedFilmId, isLoading} = this.props;

    // if (isLoading) {
    //   return (
    //     <Loader />
    //   );
    // }

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
  // isLoading: PropTypes.bool,
  selectedFilmId: PropTypes.number
};

const mapStateToProps = (state) => ({
  // isLoading: getLoading(state),
  selectedFilmId: getSelectedFilmId(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
