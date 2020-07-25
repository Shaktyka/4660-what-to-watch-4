import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {getAuthError} from '../../reducer/user/selectors.js';
import PageHeader from '../page-header/page-header.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    const authData = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    };
    onSubmit(authData);
  }

  _getPageTitle() {
    return (
      <h1 className="page-title user-page__title">Sign in</h1>
    );
  }

  render() {
    const {authError} = this.props;
    const pageTitle = this._getPageTitle();

    return (
      <div className="user-page">
        <PageHeader uniqueClass={`user-page__head`}>
          {pageTitle}
        </PageHeader>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            method="post"
            onSubmit={this._handleSubmit}
          >
            {
              authError
                ?
                <div className="sign-in__message">
                  <p>{authError}</p>
                </div>
                :
                null
            }
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  required
                  ref={this.emailRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  required
                  ref={this.passwordRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <PageFooter />
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authError: PropTypes.string
};

const mapStateToProps = (state) => ({
  authError: getAuthError(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
