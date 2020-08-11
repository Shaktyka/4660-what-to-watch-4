import * as React from 'react';

import {Link} from 'react-router-dom';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';

const NotFound = () => {
  return (
    <div className="user-page" style={{textAlign: `center`}}>
      <PageHeader uniqueClass={`user-page__head`}>
        <h1 className="page-title user-page__title">404</h1>
      </PageHeader>

      <div className="sign-in user-page__content">
        <p style={{fontSize: `30px`}}>Page not found</p>
        <Link to="/" style={{color: `#dfcf77`, textDecoration: `none`, fontWeight: 700}}>
          Go to main page
        </Link>
      </div>

      <PageFooter />
    </div>
  );
};

export default NotFound;
