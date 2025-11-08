import { Suspense, lazy, forwardRef } from 'react';
import Loading from './Loading';
import ModalContentHeader from './ModalContentHeader';
const POSJavaProject = lazy(() => import('./modalContent/POSJavaProject.tsx'));
const FigmaModalApp = lazy(() => import('./modalContent/FigmaModalApp.tsx'));
const PhotoEditProject = lazy(() => import('./modalContent/PhotoEditProject.tsx'));
const DostSetupSystemProject = lazy(
  () => import('./modalContent/DostSetupSystemProject.tsx')
);
const MathAIProject = lazy(() => import('./modalContent/MathAIProject.tsx'));
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
      <div
        id={modalId}
        ref={ref}
        className='modal show-modal'
      >
        <div className='modal-content'>
          <button
            className='close-button'
            onClick={onClose}
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
