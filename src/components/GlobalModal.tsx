import { useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';
import Modal from './Modal';

const GlobalModal = () => {
  const { modal, closeModal, triggeredDivRef, lastClickedTriggerId } =
    useModal();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modal.isOpen) {
      document.body.classList.add('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [modal.isOpen]);

  useEffect(() => {
    if (modal.isOpen && modalRef.current && lastClickedTriggerId.current) {
      const cardElement =
        triggeredDivRef.current?.[lastClickedTriggerId.current];
      const modalElement = modalRef.current;

      if (!cardElement || !modalElement) return;

      const cardRect = cardElement.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      modalElement.style.transformOrigin = `${cardCenterX}px ${cardCenterY}px`;
    }
  }, [modal.isOpen, triggeredDivRef, lastClickedTriggerId]);

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
