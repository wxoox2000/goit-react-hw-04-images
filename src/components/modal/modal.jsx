import { useEffect } from 'react';
import { Modal, Overlay } from './modal.styled';

export const ModalImage = ({ closeModal, closing, url }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const BackdropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={BackdropClose} $closing={closing}>
      <Modal $closing={closing}>
        <img src={url} alt="" width={800} />
      </Modal>
    </Overlay>
  );
};
