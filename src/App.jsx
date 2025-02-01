import { useState, useEffect } from "react";
import "modern-normalize";
import "./App.css";
import { fetchPhotos } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetchPhotos(query, 4, 16);
        setPhotos(response);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    console.log(query);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        // reset={handleReset}
      />
      <Loader visible={loading} />
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
