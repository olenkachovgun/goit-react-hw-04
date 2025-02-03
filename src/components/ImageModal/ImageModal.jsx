import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import s from "./ImageModal.module.css";
import { FaRegUser } from "react-icons/fa";

Modal.setAppElement("#root");

const ImageModal = ({ closeModal, photo, modalIsOpen }) => {
  return (
    <div>
      <Modal
        className={s.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <button className={s.closeBtn} onClick={closeModal}>
          <FaRegWindowClose className={s.iconBtn} />
        </button>
        <div className={s.containerImg}>
          <img
            className={s.image}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
          <div className={s.footerImg}>
            <p>{photo.alt_description}</p>
            <p>
              <span>
                <FaRegUser />
                {photo.user.name}
              </span>
              <span>
                <FcLike />
                {photo.likes}
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
