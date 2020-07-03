import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import MovieNavTabs from '../movie-nav-tabs/movie-nav-tabs.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';
import SimilarMovies from '../similar-movies/similar-movies.jsx';

// Выбираем активный экран
const activeMovieDetailsScreen = (activeTab, filmData) => {
  const {
    genre,
    year,
    ratingScore,
    ratingCount,
    description,
    director,
    starring,
    duration,
    reviews
  } = filmData;

  switch (activeTab) {
    case `Overview`:
      return (
        <MovieOverview
          ratingScore={ratingScore}
          ratingCount={ratingCount}
          description={description}
          director={director}
          starring={starring}
        />
      );
    case `Details`:
      return (
        <MovieDetails
          director={director}
          starring={starring}
          duration={duration}
          genre={genre}
          year={year}
        />
      );
    case `Reviews`:
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
  const {tabs, activeTab, onTabClick, films} = props;
  const {
    id,
    title,
    genre,
    year,
    poster,
    cover
  } = props.filmData;

  return (
    <>
      <section className="movie-card movie-card--full" id={id}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`./img/${cover}`} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
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
                <button className="btn btn--play movie-card__button" type="button">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${poster}`} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                {
                  <MovieNavTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabClick={onTabClick}
                  />
                }
              </nav>

              {
                activeMovieDetailsScreen(activeTab, props.filmData)
              }

            </div>
          </div>
        </div>
      </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        {
          <SimilarMovies
            films={films.filter((film) => film.genre === genre).slice(0, 4)}
          />
        }

      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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

FilmDetails.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired
}).isRequired;

const mapStateToProps = (state) => ({
  tabs: state.movieNavTabs,
  activeTab: state.activeMovieNavTab,
  films: state.filmsList
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(tab) {
    dispatch(ActionCreator.changeMovieNavTab(tab));
  }
});

export {FilmDetails};
export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
