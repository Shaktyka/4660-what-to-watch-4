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

import Loader from '../loader/loader.jsx';
import ErrorMessage from '../error-message/error-message.jsx';

const MoviesListWrapped = withActiveItem(withShowMore(MoviesList));
const GenresListWrapped = withActiveItem(GenresList);

const Main = (props) => {
  const {
    films, promoFilm,
    loadFilmsErr, loadPromoErr,
    isFilmsLoading, isPromoLoading,
    isAuthorized
  } = props;

  const {title, genre, year, bgColor, cover, poster} = promoFilm;

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
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="user-block">
            {
              isAuthorized
                ?
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
                :
                <a href="/login" className="user-block__link">Sign in</a>
            }
          </div>
        </header>
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
                    <button
                      className="btn btn--play movie-card__button"
                      type="button"
                      onClick={() => {}}
                    >
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    <button className="btn btn--list movie-card__button" type="button">
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                    </button>
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
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    bgColor: PropTypes.string,
    cover: PropTypes.string,
    poster: PropTypes.string
  }).isRequired,
  films: PropTypes.array.isRequired,
  loadFilmsErr: PropTypes.string,
  loadPromoErr: PropTypes.string,
  isFilmsLoading: PropTypes.bool,
  isPromoLoading: PropTypes.bool,
  isAuthorized: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  loadFilmsErr: getFilmsErrorMessage(state),
  loadPromoErr: getPromoErrorMessage(state),
  isFilmsLoading: getIsFilmsLoading(state),
  isPromoLoading: getIsPromoLoading(state)
});

export {Main};
export default connect(mapStateToProps)(Main);
