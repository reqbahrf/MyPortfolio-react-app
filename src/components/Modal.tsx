import React, { Suspense, lazy, forwardRef } from 'react';
import Loading from './Loading';
import ModalContentHeader from './ModalContentHeader';
const POSJavaProject = lazy(() => import('./ModalContent/POSJavaProject'));
const FigmaModalApp = lazy(() => import('./ModalContent/FigmaModalApp'));
const PhotoEditProject = lazy(() => import('./ModalContent/PhotoEditProject'));
const DostSetupSystemProject = lazy(
  () => import('./ModalContent/DostSetupSystemProject')
);
type ModalProps = {
  modalId: string;
  title: string;
  contentCoverImg: string;
  onClose: () => void;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ modalId, title, onClose, contentCoverImg }, ref) => {
    const renderModalContent = () => {
      switch (modalId) {
        case 'javaProjectModal':
          return <POSJavaProject />;
        case 'figmaProjectModal':
          return <FigmaModalApp />;
        case 'photoProjectModal':
          return <PhotoEditProject />;
        case 'dostSetupSystemModal':
          return <DostSetupSystemProject />;
        default:
          return null;
      }
    };
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

      const modal = modalElement;
      modal.classList.remove('show-modal');
      onClose();
    };
    return (
      <div
        id={modalId}
        ref={ref}
        className='modal show-modal'
      >
        <div className='modal-content'>
          <button
            className='close-button'
            onClick={(event) => closeModal(event, modalId)}
          >
            ×
          </button>
          <ModalContentHeader
            title={title}
            coverImg={contentCoverImg}
          >
            <Suspense fallback={<Loading />}>{renderModalContent()}</Suspense>
          </ModalContentHeader>
        </div>
      </div>
    );
  }
);

export default Modal;
