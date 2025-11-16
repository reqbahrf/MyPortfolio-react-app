import { Suspense, lazy, forwardRef } from 'react';
import Loading from './Loading';
import ModalContentHeader from './ModalContentHeader';
const POSJavaProject = lazy(() => import('./ModalContent/POSJavaProject'));
const FigmaModalApp = lazy(() => import('./ModalContent/FigmaModalApp'));
const PhotoEditProject = lazy(() => import('./ModalContent/PhotoEditProject'));
const DostSetupSystemProject = lazy(
  () => import('./ModalContent/DostSetupSystemProject'),
);
const MathAIProject = lazy(() => import('./ModalContent/MathAIProject'));
type ModalProps = {
  modalId: string;
  title: string;
  contentCoverImg: string;
  onClose: () => void;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ modalId, title, onClose, contentCoverImg }, ref) => {
    const renderModalContent = () => {
      console.log(modalId);
      switch (modalId) {
        case 'javaProjectModal':
          return <POSJavaProject />;
        case 'figmaProjectModal':
          return <FigmaModalApp />;
        case 'photoProjectModal':
          return <PhotoEditProject />;
        case 'dostSetupSystemModal':
          return <DostSetupSystemProject />;
        case 'mathProblemGeneratorModal':
          return <MathAIProject />;
        default:
          return null;
      }
    };
    return (
      <div id={modalId} ref={ref} className='modal show-modal'>
        <div className='modal-content bg-gray-200 dark:bg-gray-800'>
          <button className='close-button' onClick={onClose}>
            ×
          </button>
          <ModalContentHeader title={title} coverImg={contentCoverImg}>
            <Suspense fallback={<Loading />}>{renderModalContent()}</Suspense>
          </ModalContentHeader>
        </div>
      </div>
    );
  },
);

export default Modal;
