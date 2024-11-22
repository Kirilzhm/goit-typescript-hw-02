import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    image: {
        urls: {regular: string};
        alt_description: string;
    };
  };

  const ImageModal = ({ isOpen, onRequestClose, image }: ModalProps) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      </Modal>
    );
  };

  export default ImageModal;