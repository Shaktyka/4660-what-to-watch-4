import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getUserData} from '../../reducer/user/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {
  getFavoritesFilms,
  getIsFavoritesFilmsLoading,
  getLoadFavoritesFilmsError
} from '../../reducer/data/selectors.js';

import PageHeader from '../page-header/page-header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import Loader from '../loader/loader.jsx';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import withShowMore from '../../hocs/with-show-more/with-show-more.js';
import MoviesList from '../movies-list/movies-list.jsx';

const MoviesListWrapped = withActiveItem(withShowMore(MoviesList));

const getPageTitle = () => {
  return (
    <h1 className="page-title user-page__title">My list</h1>
  );
};

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

MyList.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  favoritesFilms: PropTypes.arrayOf(PropTypes.shape({
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
  isFavoritesFilmsLoading: PropTypes.bool.isRequired,
  loadFavoritesFilmsError: PropTypes.string.isRequired,
  loadFavoriteFilms: PropTypes.func.isRequired,
};

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
