import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {
  getPromoFilm,
  getFilmsByGenre,
  getFilmsErrorMessage,
  getPromoErrorMessage,
  getIsFilmsLoading,
  getIsPromoLoading
} from '../../reducer/data/selectors.js';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import withShowMore from '../../hocs/with-show-more/with-show-more.js';

import MoviesList from '../movies-list/movies-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import PageHeader from '../page-header/page-header.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import Loader from '../loader/loader.jsx';
import ErrorMessage from '../error-message/error-message.jsx';
import UserBlock from '../user-block/user-block.jsx';
import MyListButton from '../my-list-button/my-list-button.jsx';
import {Link} from 'react-router-dom';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {AuthorizationStatus} from '../../consts.js';

const MoviesListWrapped = withActiveItem(withShowMore(MoviesList));
const GenresListWrapped = withActiveItem(GenresList);

const Main = (props) => {
  const {
    films,
    promoFilm,
    loadFilmsError,
    loadPromoError,
    isFilmsLoading,
    isPromoLoading,
    userData,
    changeFavoriteStatus,
    authorizationStatus,
    history
  } = props;

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const {id, title, genre, year, bgColor, cover, poster} = promoFilm;

  return (
    <>
      {
        loadPromoError && <ErrorMessage message={loadPromoError} />
      }
      <section className="movie-card">
        <div className="movie-card__bg" style={{backgroundColor: bgColor}}>
          <img src={cover} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader uniqueClass={`movie-card__head`}>
          <UserBlock isAuthorized={isAuthorized} userData={userData} />
        </PageHeader>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              {
                isPromoLoading
                  ?
                  <Loader />
                  :
                <>
                  <h2 className="movie-card__title">{title}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{genre}</span>
                    <span className="movie-card__year">{year}</span>
                  </p>
                  <div className="movie-card__buttons">
                    <Link
                      to={`/player/${id}`}
                      className="btn btn--play movie-card__button"
                    >
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </Link>
                    {
                      <MyListButton
                        film={promoFilm}
                        onClick={changeFavoriteStatus}
                        isAuthorized={isAuthorized}
                        history={history}
                      />
                    }
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresListWrapped />

          {
            <MoviesListWrapped
              films={films}
              isLoading={isFilmsLoading}
              loadFilmsError={loadFilmsError}
            />
          }
        </section>
        <PageFooter />
      </div>
    </>
  );
};

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  promoFilm: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    bgColor: PropTypes.string,
    cover: PropTypes.string,
    poster: PropTypes.string,
    isFavorite: PropTypes.bool
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    bgColor: PropTypes.string,
    cover: PropTypes.string,
    poster: PropTypes.string,
    isFavorite: PropTypes.bool,
    preview: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  })).isRequired,
  loadFilmsError: PropTypes.string.isRequired,
  loadPromoError: PropTypes.string.isRequired,
  isFilmsLoading: PropTypes.bool.isRequired,
  isPromoLoading: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  films: getFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  loadFilmsError: getFilmsErrorMessage(state),
  loadPromoError: getPromoErrorMessage(state),
  isFilmsLoading: getIsFilmsLoading(state),
  isPromoLoading: getIsPromoLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(id, status));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
