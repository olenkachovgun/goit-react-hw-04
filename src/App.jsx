import { useState, useEffect } from "react";
import "modern-normalize";
import "./App.css";
import toast from "react-hot-toast";
import { fetchPhotos } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  // const afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchPhotos(query, page);
        setPhotos((prev) => [...prev, ...response]);
      } catch (error) {
        setError(true);
        // toast.error("error.message");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    console.log(newQuery);
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      <Loader visible={loading} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <>
          <ImageGallery photos={photos} openModal={openModal} />
          <LoadMoreBtn setPage={setPage} />
        </>
      )}
      {selectedPhoto && (
        <ImageModal
          photo={selectedPhoto}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
}

export default App;
