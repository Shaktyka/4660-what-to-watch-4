import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const promoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

const filmsList = [`Moonrise Kingdom`, `Mindhunter`, `War of the Worlds`];

ReactDOM.render(
    <App
      promoCardData={promoCardData}
      films={filmsList}
    />,
    document.querySelector(`#root`)
);
