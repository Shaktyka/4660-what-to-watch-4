import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import filmsList from './mocks/films.js';

const promoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

ReactDOM.render(
    <App
      promoCard={promoCardData}
      films={filmsList}
    />,
    document.querySelector(`#root`)
);
