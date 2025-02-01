import s from "./ImageCard.module.css";
const ImageCard = ({ photo }) => {
  return (
    <div>
      <img
        className={s.image}
        src={photo.urls.small}
        alt={photo.alt_description}
        loading="lazy"
        onClick={() => window.open(photo.links.html, "_blank")}
      />
    </div>
  );
};

export default ImageCard;
