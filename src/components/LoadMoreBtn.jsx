import PropTypes from 'prop-types';


const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div 
    style={{
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <button

onClick={handleLoadMore}
style={{
  padding: '10px 20px',
  margin: '20px',
  color: 'black',
  cursor: 'pointer',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
}}
>
Load More
</button>
    </div>
    
  );
};

LoadMoreBtn.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
