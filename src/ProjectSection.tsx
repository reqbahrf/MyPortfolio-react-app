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
  const triggeredDivRef = useRef<Record<string, HTMLDivElement | null>>({});
  const lastClickedTriggerId = useRef<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleOpenModal = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const refTriggerId = e.currentTarget.id;
    const modalId = e.currentTarget.dataset.targetModalid;
    const contentCoverImg = e.currentTarget.dataset.coverImg;
    const title = e.currentTarget.dataset.title;
    if (!refTriggerId || !modalId || !contentCoverImg || !title) return;
    lastClickedTriggerId.current = refTriggerId;
    setModal({ isOpen: true, modalId, contentCoverImg, title });
  }, []);

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
                ref={(e) => (triggeredDivRef.current[project.id] = e)}
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
