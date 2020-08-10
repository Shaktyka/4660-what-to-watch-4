import * as React from 'react';

import {connect} from 'react-redux';

import {
  getPromoFilm,
  getFilmsByGenre,
  getFilmsErrorMessage,
  getPromoErrorMessage,
  getIsFilmsLoading,
  getIsPromoLoading
} from '../../reducer/data/selectors';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withShowMore from '../../hocs/with-show-more/with-show-more';

import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import Loader from '../loader/loader';
import ErrorMessage from '../error-message/error-message';
import UserBlock from '../user-block/user-block';
import MyListButton from '../my-list-button/my-list-button';
import {Link} from 'react-router-dom';
import {Operation as DataOperation} from '../../reducer/data/data';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../consts';
import {FilmInterface, UserDataInterface, HistoryObject} from '../../types';

const MoviesListWrapped = withActiveItem(withShowMore(MoviesList));
const GenresListWrapped = withActiveItem(GenresList);

interface MainProps {
  authorizationStatus: string;
  promoFilm: FilmInterface;
  films: Array<FilmInterface>;
  loadFilmsError: string;
  loadPromoError: string;
  isFilmsLoading: boolean;
  isPromoLoading: boolean;
  userData: UserDataInterface;
  changeFavoriteStatus(id: number, status: number): void;
  history: HistoryObject;
}

const Main: React.FC<MainProps> = ({
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
}: MainProps) => {

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
