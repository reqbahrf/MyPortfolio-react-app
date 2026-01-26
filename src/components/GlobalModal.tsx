import { useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';
import Modal from './Modal';

const GlobalModal = () => {
  const { modal, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modal.isOpen) {
      document.body.classList.add('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [modal.isOpen]);

  return (
    <>
      {modal.isOpen && (
        <Modal
          modalId={modal.modalId}
          title={modal.title}
          contentCoverImg={modal.contentCoverImg}
          ref={modalRef}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default GlobalModal;
