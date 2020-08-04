import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {BASE_URL} from '../../consts.js';

const UserBlock = (props) => {
  const {isAuthorized, userData} = props;
  const {avatar, name} = userData;

  return (
    <div className="user-block">
      {
        isAuthorized
          ?
          <Link
            to="/mylist"
            className="user-block__avatar"
            style={{display: `block`}}
          >
            <img src={`${BASE_URL}${avatar}`} alt={`${name}'s avatar`} width="63" height="63" />
          </Link>
          :
          <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired
};

export default UserBlock;
