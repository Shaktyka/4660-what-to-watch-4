import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  const {message} = props;

  const styles = {
    position: `absolute`,
    top: `20px`,
    right: `20px`,
    boxSizing: `border-box`,
    maxWidth: `300px`,
    backgroundColor: `brown`,
    padding: `25px 30px`,
    borderRadius: `5px`,
    textAlign: `center`,
    color: `white`,
    fontSize: `16px`,
    zIndex: 10,
    boxShadow: `0 0 10px 2px rgba(0, 0, 0, 0.2)`,
    cursor: `pointer`
  };

  return (
    <div
      style={styles}
      onClick={(evt) => {
        evt.target.style.display = `none`;
      }}
    >
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
