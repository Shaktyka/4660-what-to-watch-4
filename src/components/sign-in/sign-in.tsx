import * as React from 'react';

import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../reducer/user/user';
import {getAuthorizationError, getAuthorizationStatus} from '../../reducer/user/selectors';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';

interface SignInProps {
  authorizationError: string;
  onSubmit(authData: {
    email: string;
    password: string;
  }): void;
}

class SignIn extends React.PureComponent<SignInProps, {}> {
  private emailRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

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
    const {authorizationError} = this.props;
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
              (authorizationError && authorizationError.indexOf(`401`) === -1)
                ?
                <div className="sign-in__message">
                  <p>{authorizationError}</p>
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

const mapStateToProps = (state) => ({
  authorizationError: getAuthorizationError(state),
  autorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authorizationData) {
    dispatch(UserOperation.login(authorizationData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
