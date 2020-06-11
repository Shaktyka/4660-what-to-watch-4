import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const promoCardData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: `2014`
};

ReactDOM.render(
    <App promoCardData={promoCardData} />,
    document.querySelector(`#root`)
);
