import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';

interface ModalState {
  isOpen: boolean;
  modalId: string;
  contentCoverImg: string;
  title: string;
}

interface ModalContextType {
  modal: ModalState;
  openModal: (modalId: string, contentCoverImg: string, title: string) => void;
  closeModal: () => void;
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

  const openModal = useCallback(
    (modalId: string, contentCoverImg: string, title: string) => {
      setModal({ isOpen: true, modalId, contentCoverImg, title });
    },
    [],
  );

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, modalId: '', contentCoverImg: '', title: '' });
  }, []);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
