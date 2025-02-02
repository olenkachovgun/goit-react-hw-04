import { useState, useEffect } from "react";
import "modern-normalize";
import "./App.css";

import { fetchPhotos } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetchPhotos(query, page, 8);
        setPhotos(response);
      } catch (error) {
        setError(true);
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
    setPage(0);
  };
  console.log(photos);
  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      <Loader visible={loading} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <>
          <ImageGallery photos={photos} />
          <LoadMoreBtn setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default App;
