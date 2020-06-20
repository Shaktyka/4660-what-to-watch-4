import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import filmsData from './mocks/films.js';

const promoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

ReactDOM.render(
    <App
      promoCard={promoCardData}
      films={filmsData}
    />,
    document.querySelector(`#root`)
);
