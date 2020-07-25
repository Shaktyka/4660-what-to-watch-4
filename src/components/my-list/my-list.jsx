import React from 'react';

import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

const getPageTitle = () => {
  return (
    <h1 className="page-title user-page__title">My list</h1>
  );
};

const MyList = (props) => {
  const {userData} = props;

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

        <div className="catalog__movies-list">

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">What We Do in the Shadows</a>
            </h3>
          </article>

        </div>
      </section>

      <PageFooter />
    </div>
  );
};

MyList.propTypes = {
  userData: PropTypes.object
};

export default MyList;
