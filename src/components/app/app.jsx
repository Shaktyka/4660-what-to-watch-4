import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  return (
    <Main
      promoCard={props.promoCardData}
      films={props.films}
    />
  );
};

export default App;
