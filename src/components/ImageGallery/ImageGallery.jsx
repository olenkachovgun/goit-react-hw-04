import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => openModal(photo)}>
          <ImageCard photo={photo} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
