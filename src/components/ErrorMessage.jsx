import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  if (!message) return null; 

  return <p style={{ fontWeight: 'bold' }}>{message}</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string, 
};

export default ErrorMessage;