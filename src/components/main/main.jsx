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
    loadFilmsErr,
    loadPromoErr,
    isFilmsLoading,
    isPromoLoading,
    userData,
    changeFavoriteStatus,
    authorizationStatus
  } = props;

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const {id, title, genre, year, bgColor, cover, poster, isFavorite} = promoFilm;

  return (
    <>
      {
        loadPromoErr && <ErrorMessage message={loadPromoErr} />
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
                      type="button"
                      onClick={() => {}}
                    >
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </Link>
                    {
                      isAuthorized
                        ?
                        (<button
                          className="btn btn--list movie-card__button"
                          type="button"
                          onClick={() => {
                            const status = !isFavorite ? 1 : 0;
                            return changeFavoriteStatus(id, status);
                          }}
                        >
                          {
                            isFavorite
                              ?
                              <svg viewBox="0 0 18 14" width="18" height="14">
                                <use xlinkHref="#in-list"></use>
                              </svg>
                              :
                              <svg viewBox="0 0 19 20" width="19" height="20">
                                <use xlinkHref="#add"></use>
                              </svg>
                          }
                          <span>My list</span>
                        </button>)
                        :
                        null
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
              error={loadFilmsErr}
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
  films: PropTypes.array.isRequired,
  loadFilmsErr: PropTypes.string,
  loadPromoErr: PropTypes.string,
  isFilmsLoading: PropTypes.bool.isRequired,
  isPromoLoading: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  films: getFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  loadFilmsErr: getFilmsErrorMessage(state),
  loadPromoErr: getPromoErrorMessage(state),
  isFilmsLoading: getIsFilmsLoading(state),
  isPromoLoading: getIsPromoLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(id, status));
    dispatch(DataOperation.loadFavoriteFilms());
    dispatch(DataOperation.loadPromoFilm());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
