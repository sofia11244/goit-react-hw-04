import { useState, useEffect } from 'react';
// import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import LoadMoreBtn from './components/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal.jsx';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = async (query, page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=4EkRTHWLgbXB4ToswAFD_5utZtJxRxlkFA5e_M-dsKA&per_page=20&page=${page}`
      );
      if (response.data.results.length === 0) {
        toast.error('No images found.');
      }
      setImages((prevImages) => [...prevImages, ...response.data.results]); // Önceki resimleri koruyarak yeni resimler ekleniyor
    } catch (error) {
      console.error("API Error:", error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      // setImages([]); eğer sayfanın yeniden yüklenmesini istiyorsan ancak gerek yok burad hata vardı
      fetchImages(searchTerm, page); 
    }
  }, [searchTerm, page]); // tetkleme

  const handleSearch = (evt) => {
    evt.preventDefault();
    if (!query) {
      toast.error('Please fill in the search field.');
      return; 
    }
    setPage(1); 
    setImages([]); 
    setSearchTerm(query); 
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <Toaster /> 
      <ImageGallery images={images} loading={loading} openModal={openModal}/>
      {images.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} /> 
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
