import PropTypes from 'prop-types';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button
      onClick={handleLoadMore}
      style={{
        padding: '10px 20px',
        margin: '20px',
        color: 'black',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
     Load More
    </button>
  );
};

LoadMoreBtn.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
