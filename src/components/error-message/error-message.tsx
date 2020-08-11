import * as React from 'react';

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
} as React.CSSProperties;

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message}: ErrorMessageProps) => {

  return (
    <div
      style={styles}
      onClick={(evt) => {
        const element = evt.target as HTMLElement;
        element.style.display = `none`;
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
