import React from 'react';

import {Link} from 'react-router-dom';
import {BASE_URL} from '../../consts.js';
import PropTypes from 'prop-types';
import PageFooter from '../page-footer/page-footer.jsx';

const MyList = (props) => {
  const {userData} = props;
  const {avatar_url: avatarUrl, name} = userData;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src={`${BASE_URL}${avatarUrl}`} alt={`${name}'s avatar`} width="63" height="63" />
          </div>
        </div>
      </header>

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
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string
  })
};

export default MyList;
