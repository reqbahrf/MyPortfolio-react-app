import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useUrlModal } from '../hooks/useUrlModal';
import { findProjectByModalId } from '../utils/projectUtils';

interface ModalState {
  isOpen: boolean;
  modalId: string;
  contentCoverImg: string;
  title: string;
}

interface ModalContextType {
  modal: ModalState;
  openModal: (
    modalId: string,
    contentCoverImg?: string,
    title?: string,
  ) => void;
  closeModal: () => void;
  openModalById: (modalId: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    modalId: '',
    contentCoverImg: '',
    title: '',
  });

  const { urlModalId, updateUrlModal } = useUrlModal();

  useEffect(() => {
    if (urlModalId && !modal.isOpen) {
      // Auto-open modal from URL parameter
      const project = findProjectByModalId(urlModalId);
      if (project) {
        setModal({
          isOpen: true,
          modalId: project.targetModal_id,
          contentCoverImg: project.coverImg,
          title: project.title,
        });
      }
    } else if (!urlModalId && modal.isOpen) {
      // Close modal if URL parameter is removed
      setModal({
        isOpen: false,
        modalId: '',
        contentCoverImg: '',
        title: '',
      });
    }
  }, [urlModalId]);

  const openModal = useCallback(
    (modalId: string, contentCoverImg?: string, title?: string) => {
      setModal({
        isOpen: true,
        modalId,
        contentCoverImg: contentCoverImg || '',
        title: title || '',
      });
      updateUrlModal(modalId);
    },
    [updateUrlModal],
  );

  const openModalById = useCallback(
    (modalId: string) => {
      const project = findProjectByModalId(modalId);
      if (project) {
        openModal(project.targetModal_id, project.coverImg, project.title);
      }
    },
    [openModal],
  );

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, modalId: '', contentCoverImg: '', title: '' });
    updateUrlModal(null);
  }, [updateUrlModal]);

  return (
    <ModalContext.Provider
      value={{ modal, openModal, closeModal, openModalById }}
    >
      {children}
    </ModalContext.Provider>
  );
};
