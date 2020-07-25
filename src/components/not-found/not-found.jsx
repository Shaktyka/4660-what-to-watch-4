import React from 'react';

import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>
        404. <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
};

export default NotFound;
