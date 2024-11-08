import Modal from 'react-modal';
import PropTypes from 'prop-types';
import style from'./ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={style.modalContent}
      overlayclassName={style.modalOverlay}
      ariaHideApp={false}
    >
      <button className={style.modalClose} onClick={onRequestClose}>X</button>
      <img src={image?.urls?.regular} alt={image?.alt_description} className={style.modalImage} />
      <div className={style.modalInfo}>
        <h2>{image?.alt_description || 'No description available'}</h2>
        <p>Photo by: {image?.user?.name}</p>
        <p>Location: {image?.user?.location || 'Unknown'}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
}
