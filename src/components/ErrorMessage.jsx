import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const notify = () => toast();

const ErrorMessage = ({ message }) => {
  if (!message) return null; 

  return <p onClick={notify}>{message}</p>;
};
ErrorMessage.propTypes = {
  message: PropTypes.string, 
};

export default ErrorMessage;