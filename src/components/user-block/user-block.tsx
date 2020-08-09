import * as React from 'react';

import {Link} from 'react-router-dom';
import {BASE_URL} from '../../consts';

import {UserDataInterface} from '../../types';

interface UserBlockProps {
  isAuthorized: boolean;
  userData: UserDataInterface;
};

const UserBlock: React.FC<UserBlockProps> = ({
  isAuthorized,
  userData
}: UserBlockProps) => {

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

export default UserBlock;
