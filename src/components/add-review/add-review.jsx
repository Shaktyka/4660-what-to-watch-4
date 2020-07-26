import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getIsReviewPosting, getReviewErrorMessage} from '../../reducer/data/selectors.js';
import {AuthorizationStatus} from '../../consts.js';

import PageHeader from '../page-header/page-header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {Link} from 'react-router-dom';

const mockFilm = {
  // id
  // название
  // бэк
  // постер
};

const AddReview = (props) => {
  const {
    authorizationStatus,
    userData,
    submitReview,
    isReviewPosting,
    postingReviewErr
  } = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader>
          {
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="movie-page.html" className="breadcrumbs__link">
                    The Grand Budapest Hotel
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
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            submitReview();
            return;
          }}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
            ></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
              >Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  authorizationStatus: PropTypes.string,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string
  }),
  submitReview: PropTypes.func,
  isReviewPosting: PropTypes.bool,
  postingReviewErr: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  isReviewPosting: getIsReviewPosting(state),
  postingReviewErr: getReviewErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitReview(filmId, reviewData) {
    dispatch(DataOperation.addReview(filmId, reviewData));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
