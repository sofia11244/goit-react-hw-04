import PropTypes from 'prop-types';
import Loader from './Loader.jsx';

const ImageGallery = ({ images, loading, openModal }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map((image) => (
        <li key={image.id} onClick={() => openModal(image)} style={{ cursor: 'pointer' }}>
          <div>
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
