import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {
  getFilmsByGenre,
  getReviews,
  getFilmsErrorMessage,
  getIsFilmsLoading
} from '../../reducer/data/selectors.js';

import {Operation as DataOperation} from '../../reducer/data/data.js';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors.js';
import {AuthorizationStatus} from '../../consts.js';

import {
  getMovieNavTabs,
  getActiveTab,
  getSelectedFilmId,
  getSelectedFilm
} from '../../reducer/app-state/selectors.js';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

import MovieNavTabs from '../movie-nav-tabs/movie-nav-tabs.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';
import SimilarMovies from '../similar-movies/similar-movies.jsx';
import PageHeader from '../page-header/page-header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import {Link} from 'react-router-dom';
import {TabName} from '../../consts.js';

const SimilarMoviesWrapped = withActiveItem(SimilarMovies);

// Выбираем активный экран
export const getDetailsScreen = (activeTab, filmData, reviews = []) => {
  const {
    genre,
    year,
    ratingScore,
    ratingCount,
    description,
    director,
    starring,
    duration
  } = filmData;

  switch (activeTab) {
    case TabName.OVERVIEW:
      return (
        <MovieOverview
          ratingScore={ratingScore}
          ratingCount={ratingCount}
          description={description}
          director={director}
          starring={starring}
        />
      );
    case TabName.DETAILS:
      return (
        <MovieDetails
          director={director}
          starring={starring}
          duration={duration}
          genre={genre}
          year={year}
        />
      );
    case TabName.REVIEWS:
      return (
        <MovieReviews
          reviews={reviews}
        />
      );
    default:
      return ``;
  }
};

const FilmDetails = (props) => {
  const {
    tabs,
    activeTab,
    films,
    selectedFilmId,
    filmReviews,
    loadFilmsErr,
    isFilmsLoading,
    authorizationStatus,
    userData,
    changeFavoriteStatus
  } = props;

  const filmData = (films.find((film) => film.id === selectedFilmId));
  const {id, title, genre, year, poster, cover, bgColor, isFavorite} = filmData;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <>
      <section className="movie-card movie-card--full" id={id}>
        <div className="movie-card__hero" style={{backgroundColor: bgColor}}>
          <div className="movie-card__bg">
            <img src={cover} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader uniqueClass={`movie-card__head`}>
            <UserBlock isAuthorized={isAuthorized} userData={userData} />
          </PageHeader>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
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
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {
                  isAuthorized
                    ?
                    <>
                      <button
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
                      </button>
                      <Link
                        to={`/films/${id}/review`}
                        className="btn movie-card__button"
                      >
                        Add review
                      </Link>
                    </>
                    :
                    null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                {
                  <MovieNavTabs
                    tabs={tabs}
                    activeTab={activeTab}
                  />
                }
              </nav>

              {
                getDetailsScreen(activeTab, filmData, filmReviews)
              }

            </div>
          </div>
        </div>
      </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        {
          <SimilarMoviesWrapped
            films={films.filter((film) => film.genre === genre).slice(0, 4)}
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

FilmDetails.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  filmReviews: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  selectedFilmId: PropTypes.number.isRequired,
  selectedFilm: PropTypes.object,
  loadFilmsErr: PropTypes.string,
  isFilmsLoading: PropTypes.bool,
  authorizationStatus: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string
  }),
  changeFavoriteStatus: PropTypes.func
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  selectedFilmId: getSelectedFilmId(state),
  selectedFilm: getSelectedFilm(state),
  tabs: getMovieNavTabs(state),
  activeTab: getActiveTab(state),
  films: getFilmsByGenre(state),
  filmReviews: getReviews(state),
  isFilmsLoading: getIsFilmsLoading(state),
  loadFilmsErr: getFilmsErrorMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(id, status));
    dispatch(DataOperation.loadFilms());
    dispatch(DataOperation.loadFavoriteFilms());
  },
  loadFilms() {
    DataOperation.loadFilms();
  }
});

export {FilmDetails};
export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
