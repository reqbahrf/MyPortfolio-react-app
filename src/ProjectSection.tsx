import React, { lazy } from 'react';
import ProjectCard from './components/ProjectCard';
import Projects from './content/Project.json';

import Modal from './components/Modal';
const POSJavaProject = lazy(
  () => import('./components/ModalContent/POSJavaProject')
);
const FigmaModalApp = lazy(
  () => import('./components/ModalContent/FigmaModalApp')
);
const PhotoEditProject = lazy(
  () => import('./components/ModalContent/PhotoEditProject')
);
const DostSetupSystemProject = lazy(
  () => import('./components/ModalContent/DostSetupSystemProject')
);

const ProjectSection = () => {
  const [modal, setModal] = React.useState({
    isOpen: false,
    modalId: '',
  });
  const handleOpenModal = (buttonId: string, modalId: string) => {
    setModal({ isOpen: true, modalId });
    const buttonElement = document.getElementById(buttonId);
    const modalElement = document.getElementById(modalId);

    if (!buttonElement || !modalElement) {
      console.error('Button or modal element not found');
      return;
    }

    const button = buttonElement as HTMLButtonElement;
    const modal = modalElement as HTMLDivElement;

    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    modal.style.transformOrigin = `${buttonCenterX}px ${buttonCenterY}px`;
    document.body.classList.toggle('no-scroll');
  };

  const rows = [];
  for (let i = 0; i < Projects.projects.length; i += 3) {
    rows.push(Projects.projects.slice(i, i + 3));
  }

  const renderModalContent = () => {
    switch (modal.modalId) {
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
  return (
    <section id='Project'>
      <div className='flex flex-col items-center justify-center m-0 py-10 sm:m-30 md:m-40'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-14 mb-6'
          >
            {row.map((project) => (
              <ProjectCard
                key={project.id}
                coverImg={project.coverImg}
                Div_id={project.id}
                title={project.title}
                btn_id={project.btn_id}
                targetModal_id={project.targetModal_id}
                description={project.description}
                openModal={() =>
                  handleOpenModal(project.btn_id, project.targetModal_id)
                }
              />
            ))}
          </div>
        ))}
      </div>
      {modal.isOpen && (
        <Modal
          modalId={modal.modalId}
          onClose={() => setModal({ isOpen: false, modalId: '' })}
        >
          {renderModalContent()}
        </Modal>
      )}
    </section>
  );
};

export default ProjectSection;
