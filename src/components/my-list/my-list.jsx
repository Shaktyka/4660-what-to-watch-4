import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getUserData} from '../../reducer/user/selectors.js';
import {
  getFavoritesFilms,
  getIsFavoritesFilmsLoading,
  getLoadFavoritesFilmsErr
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

const MyList = (props) => {
  const {
    userData,
    favoritesFilms,
    isFavoritesFilmsLoading,
    loadFavoritesFilmsErr
  } = props;

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

        <div className="catalog__movies-list" style={{width: `100%`}}>

          {
            isFavoritesFilmsLoading
              ?
              <Loader />
              :
              <MoviesListWrapped
                films={favoritesFilms}
                isLoading={isFavoritesFilmsLoading}
                error={loadFavoritesFilmsErr}
              />
          }

        </div>
      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  userData: PropTypes.object,
  favoritesFilms: PropTypes.array,
  isFavoritesFilmsLoading: PropTypes.bool,
  loadFavoritesFilmsErr: PropTypes.string
};

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  favoritesFilms: getFavoritesFilms(state),
  isFavoritesFilmsLoading: getIsFavoritesFilmsLoading(state),
  loadFavoritesFilmsErr: getLoadFavoritesFilmsErr(state)
});

export {MyList};
export default connect(mapStateToProps)(MyList);
