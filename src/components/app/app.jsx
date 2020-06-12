import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({films, promoCard}) => {
  return (
    <Main promoCard={promoCard} films={films}
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
      PropTypes.string.isRequired
  ).isRequired
};

export default App;
