import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({films, promoCard}) => {
  return (
    <Main
      promoCard={promoCard}
      films={films}
      mainTitleClickHandler={() => {}}
    />
  );
};

App.propTypes = {
  promoCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};

export default App;
