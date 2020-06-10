import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <Main promoCard={props.promoCardData} />
  );
};

export default App;
