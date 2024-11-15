import PropTypes from 'prop-types';
import Loader from './Loader.jsx';
import style from '../App.module.css';


const ImageGallery = ({ images, loading, openModal }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <ul className={style.imageCard}  >
      {images.map((image) => (
        <li className={style.imageCardAlt} key={image.id} style={{ cursor: 'pointer' }}>
          <div>
            <img className={style.image} onClick={() => openModal(image)} src={image.urls.small} alt={image.alt_description} />
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
