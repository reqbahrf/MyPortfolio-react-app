import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import Projects from './content/Project.json';

import Modal from './components/Modal';

const ProjectSection = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    modalId: '',
    contentCoverImg: '',
    title: '',
  });
  const buttonRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const lastClickedButtonId = useRef<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleOpenModal = useCallback(
    (
      buttonId: string,
      modalId: string,
      contentCoverImg: string,
      title: string
    ) => {
      lastClickedButtonId.current = buttonId;
      setModal({ isOpen: true, modalId, contentCoverImg, title });
    },
    []
  );

  const handleOnCloseModal = useCallback(() => {
    setModal({ isOpen: false, modalId: '', contentCoverImg: '', title: '' });
  }, []);

  const rows = useMemo(() => {
    const arr = [];
    for (let i = 0; i < Projects.projects.length; i += 3) {
      arr.push(Projects.projects.slice(i, i + 3));
    }
    return arr;
  }, []);

  useEffect(() => {
    if (modal.isOpen && modalRef.current && lastClickedButtonId.current) {
      const buttonElement = buttonRef.current?.[lastClickedButtonId.current];
      const modalElement = modalRef.current;

      if (!buttonElement || !modalElement) return;

      const buttonRect = buttonElement.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      modalElement.style.transformOrigin = `${buttonCenterX}px ${buttonCenterY}px`;
    }
  }, [modal.isOpen]);

  useEffect(() => {
    if (modal.isOpen) {
      document.body.classList.add('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [modal.isOpen]);
  return (
    <section id='Project'>
      <div className='flex flex-col items-center justify-center m-0 py-10 sm:m-30 md:m-40'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-14 mb-6'
          >
            {row.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                ref={(e) => (buttonRef.current[project.btn_id] = e)}
                openModal={handleOpenModal}
              />
            ))}
          </div>
        ))}
      </div>
      {modal.isOpen && (
        <Modal
          modalId={modal.modalId}
          title={modal.title}
          contentCoverImg={modal.contentCoverImg}
          ref={modalRef}
          onClose={handleOnCloseModal}
        />
      )}
    </section>
  );
};

export default ProjectSection;
