import React, {PureComponent, createRef} from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getIsReviewPosting, getReviewErrorMessage, getIsReviewSent} from '../../reducer/data/selectors.js';
import {AuthorizationStatus} from '../../consts.js';

import PageHeader from '../page-header/page-header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {Link} from 'react-router-dom';

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.commentRef = createRef();
    this.formRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {filmId, submitReview} = this.props;
    evt.preventDefault();

    const commentData = {
      comment: this.commentRef.current.value,
      rating: this.formRef.current.rating.value,
    };

    submitReview(filmId, commentData);
  }

  render() {
    const {
      authorizationStatus,
      userData,
      films,
      filmId,
      postingReviewErr,
      isReviewPosting,
      isReviewSent
    } = this.props;

    const filmData = films.find((film) => film.id === filmId);
    const {id, title, bgColor, poster, cover} = filmData;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg" style={{backgroundColor: bgColor}}>
            <img src={cover} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader>
            {
              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`/films/${id}`} className="breadcrumbs__link">
                      {title}
                    </Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>
            }
            <UserBlock
              isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
              userData={userData}
            />
          </PageHeader>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={poster}
              alt={title}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            method="post"
            className="add-review__form"
            onSubmit={this._handleSubmit}
            ref={this.formRef}
          >
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                ref={this.commentRef}
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={50}
                maxLength={400}
                required
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                >Post
                </button>
              </div>
            </div>
            {
              postingReviewErr
                &&
              <p style={{textAlign: `center`, color: `brown`}}>{postingReviewErr}</p>
            }
          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  authorizationStatus: PropTypes.string,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string
  }),
  films: PropTypes.array,
  filmId: PropTypes.number,
  submitReview: PropTypes.func,
  isReviewPosting: PropTypes.bool,
  postingReviewErr: PropTypes.string,
  isReviewSent: PropTypes.bool
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  isReviewPosting: getIsReviewPosting(state),
  postingReviewErr: getReviewErrorMessage(state),
  isReviewSent: getIsReviewSent(state)
});

const mapDispatchToProps = (dispatch) => ({
  submitReview(filmId, reviewData) {
    dispatch(DataOperation.addReview(filmId, reviewData));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
