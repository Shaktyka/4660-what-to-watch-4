import * as React from 'react';

import {connect} from 'react-redux';
import {getUserData} from '../../reducer/user/selectors';
import {Operation as DataOperation} from '../../reducer/data/data';
import {
  getFavoritesFilms,
  getIsFavoritesFilmsLoading,
  getLoadFavoritesFilmsError
} from '../../reducer/data/selectors';

import PageHeader from '../page-header/page-header';
import UserBlock from '../user-block/user-block';
import PageFooter from '../page-footer/page-footer';
import Loader from '../loader/loader';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withShowMore from '../../hocs/with-show-more/with-show-more';
import MoviesList from '../movies-list/movies-list';
import {FilmInterface, UserDataInterface} from '../../types.ts';

const MoviesListWrapped = withActiveItem(withShowMore(MoviesList));

const getPageTitle = () => {
  return (
    <h1 className="page-title user-page__title">My list</h1>
  );
};

interface MyListProps {
  userData: UserDataInterface;
  favoritesFilms: Array<FilmInterface>;
  isFavoritesFilmsLoading: boolean;
  loadFavoritesFilmsError: string;
}

class MyList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteFilms} = this.props;
    loadFavoriteFilms();
  }

  render() {
    const {
      userData,
      favoritesFilms,
      isFavoritesFilmsLoading,
      loadFavoritesFilmsError
    } = this.props;

    return (
      <div className="user-page">
        <PageHeader uniqueClass={`user-page__head`}>
          {getPageTitle()}
          <UserBlock
            isAuthorized={true}
            userData={userData}
          />
        </PageHeader>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {
            isFavoritesFilmsLoading
              ?
              <Loader />
              :
              <MoviesListWrapped
                films={favoritesFilms}
                isLoading={isFavoritesFilmsLoading}
                loadFilmsError={loadFavoritesFilmsError}
              />
          }

        </section>

        <PageFooter />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  userData: getUserData(state),
  favoritesFilms: getFavoritesFilms(state),
  isFavoritesFilmsLoading: getIsFavoritesFilmsLoading(state),
  loadFavoritesFilmsError: getLoadFavoritesFilmsError(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms() {
    dispatch(DataOperation.loadFavoriteFilms());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
