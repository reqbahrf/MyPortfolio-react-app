import React, { Suspense } from 'react';
import Loading from './Loading';
type ModalProps = {
  modalId: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ modalId, onClose, children }: ModalProps) => {
  const closeModal = (
    event: React.MouseEvent<HTMLButtonElement>,
    modalId: string
  ) => {
    event.stopPropagation();
    const modalElement = event.currentTarget.closest(`#${modalId}`);
    if (!modalElement) {
      console.error('Modal element not found');
      return;
    }

    const modal = modalElement as HTMLDivElement;
    modal.classList.remove('show-modal');
    document.body.classList.remove('no-scroll');
    onClose();
  };
  return (
    <div
      id={modalId}
      className='modal show-modal'
    >
      <div className='modal-content'>
        <button
          className='close-button'
          onClick={(event) => closeModal(event, modalId)}
        >
          ×
        </button>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
};

export default Modal;
