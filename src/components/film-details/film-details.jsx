import React from 'react';
import PropTypes from 'prop-types';

import MovieNavTabs from '../movie-nav-tabs/movie-nav-tabs.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
// import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';

const activeTab = `Overview`;
const onTabClick = (/* tabName */) => {
  // console.log(tabName);
};
const reviews = [
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European
      kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `8,9`
  },
  {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves
      in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added
      a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `2015-11-18`,
    rating: `8,0`
  },
  {
    text: `I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40
      minutes I wish I could take back.`,
    author: `Amanda Greever`,
    date: `2015-11-18`,
    rating: `8,0`
  },
  {
    text: `The mannered, madcap proceedings are often delightful, occasionally
      silly, and here and there, gruesome and/or heartbreaking.`,
    author: `Matthew Lickona`,
    date: `2016-12-20`,
    rating: `7,2`
  },
  {
    text: `It is certainly a magical and childlike way of storytelling,
      even if the content is a little more adult.`,
    author: `Paula Fleri-Soler`,
    date: `2016-12-20`,
    rating: `7,6`
  },
  {
    text: `It is certainly a magical and childlike way of storytelling,
      even if the content is a little more adult.`,
    author: `Marta Soler`,
    date: `2016-12-22`,
    rating: `7,0`
  }
];

const tabs = [`Overview`, `Details`, `Reviews`];

const FilmDetails = ({filmData}) => {
  const {
    id,
    title,
    genre,
    year,
    poster,
    cover,
    ratingScore,
    ratingCount,
    description,
    director,
    starring,
    duration
  } = filmData;

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
                <MovieOverview
                  ratingScore={ratingScore}
                  ratingCount={ratingCount}
                  description={description}
                  director={director}
                  starring={starring}
                />
              }

              {
                <MovieReviews
                  reviews={reviews}
                />
              }

            </div>
          </div>
        </div>
      </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
            </h3>
          </article>
        </div>
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

/*
{
  <MovieDetails
    director={director}
    starring={starring}
    duration={duration}
    genre={genre}
    year={year}
  />
}
 */

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
  duration: PropTypes.number.isRequired
}).isRequired;

export default FilmDetails;
