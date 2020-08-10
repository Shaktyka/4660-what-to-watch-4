import * as React from 'react';

import {connect} from 'react-redux';

import {
  getReviews,
  getFilmsErrorMessage,
  getIsFilmsLoading
} from '../../reducer/data/selectors';

import {Operation as DataOperation} from '../../reducer/data/data';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../consts';

import {
  getMovieNavTabs,
  getActiveTab
} from '../../reducer/app-state/selectors';

import withActiveItem from '../../hocs/with-active-item/with-active-item';

import MovieNavTabs from '../movie-nav-tabs/movie-nav-tabs';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import SimilarMovies from '../similar-movies/similar-movies';
import PageHeader from '../page-header/page-header';
import UserBlock from '../user-block/user-block';
import PageFooter from '../page-footer/page-footer';
import {Link} from 'react-router-dom';
import {TabName} from '../../consts';
import {FilmInterface, UserDataInterface, ReviewInterface} from '../../types.ts';

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

interface FilmDetailsProps {
  tabs: Array<string>;
  activeTab: string;
  filmReviews: Array<ReviewInterface>;
  films: Array<FilmInterface>;
  selectedFilmId: number;
  loadFilmsError: string;
  isFilmsLoading: boolean;
  authorizationStatus: string;
  userData: UserDataInterface;
  changeFavoriteStatus(id: number, status: number): void;
  history: {}
}

const FilmDetails: React.FC<FilmDetailsProps> = ({
  tabs,
  activeTab,
  films,
  selectedFilmId,
  filmReviews,
  loadFilmsError,
  isFilmsLoading,
  authorizationStatus,
  userData,
  changeFavoriteStatus,
  history
}: FilmDetailsProps) => {

  const filmData = (films.find((film) => film.id === selectedFilmId));
  const {id, title, genre, year, poster, cover, bgColor} = filmData;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const AddReviewButton = (
    <Link
      to={`/films/${id}/review`}
      className="btn movie-card__button"
    >
      Add review
    </Link>
  );

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
                <MyListButton
                  film={filmData}
                  onClick={changeFavoriteStatus}
                  isAuthorized={isAuthorized}
                  history={history}
                />
                {
                  isAuthorized && AddReviewButton
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
            loadFilmsError={loadFilmsError}
          />
        }

      </section>
      <PageFooter />
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
  tabs: getMovieNavTabs(state),
  activeTab: getActiveTab(state),
  filmReviews: getReviews(state),
  isFilmsLoading: getIsFilmsLoading(state),
  loadFilmsError: getFilmsErrorMessage(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(id, status));
  },
  loadFilms() {
    DataOperation.loadFilms();
  }
});

export {FilmDetails};
export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
