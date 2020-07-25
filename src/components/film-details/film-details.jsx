import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getFilmsByGenre, getReviews} from '../../reducer/data/selectors.js';

import {getMovieNavTabs, getActiveTab, getSelectedFilmId} from '../../reducer/app-state/selectors.js';
import {getFilmsErrorMessage, getIsFilmsLoading} from '../../reducer/data/selectors.js';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import MovieNavTabs from '../movie-nav-tabs/movie-nav-tabs.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';
import SimilarMovies from '../similar-movies/similar-movies.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import {TabName, BASE_URL} from '../../consts.js';

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
    isAuthorized,
    userData
  } = props;

  const filmData = films.find((film) => film.id === selectedFilmId);
  const {id, title, genre, year, poster, cover, bgColor, isFavorite} = filmData;
  const {avatar, name} = userData;

  return (
    <>
      <section className="movie-card movie-card--full" id={id}>
        <div className="movie-card__hero" style={{backgroundColor: bgColor}}>
          <div className="movie-card__bg">
            <img src={cover} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              {
                isAuthorized
                  ?
                  <Link
                    to="/mylist"
                    className="user-block__avatar"
                    style={{display: `block`}}
                  >
                    <img src={`${BASE_URL}${avatar}`} alt={`${name}'s avatar`} width="63" height="63" />
                  </Link>
                  :
                  <Link to="/login" className="user-block__link">Sign in</Link>
              }
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
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
                <Link to="/add-review" className="btn movie-card__button">Add review</Link>
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
  loadFilmsErr: PropTypes.string,
  isFilmsLoading: PropTypes.bool,
  isAuthorized: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  selectedFilmId: getSelectedFilmId(state),
  tabs: getMovieNavTabs(state),
  activeTab: getActiveTab(state),
  films: getFilmsByGenre(state),
  filmReviews: getReviews(state),
  isFilmsLoading: getIsFilmsLoading(state),
  loadFilmsErr: getFilmsErrorMessage(state)
});

export {FilmDetails};
export default connect(mapStateToProps)(FilmDetails);
