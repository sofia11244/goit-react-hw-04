import propTypes from 'prop-types';

const ImageCard = ({ image }) => (
  <div className="image-card">
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;

ImageCard.propTypes = {
  image: propTypes.object.isRequired,
};