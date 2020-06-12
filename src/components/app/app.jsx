import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const promoCard = props.promoCardData;
  // eslint-disable-next-line react/prop-types
  const films = props.films;

  return (
    <Main promoCard={promoCard} films={films}
    />
  );
};

export default App;
