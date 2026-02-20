import { useCallback, useMemo } from 'react';
import ProjectCard from './components/ProjectCard';
import Projects from './content/Project.json';
import { useModal } from './context/ModalContext';

const ProjectSection = () => {
  const { openModal, triggeredDivRef, lastClickedTriggerId } = useModal();
  const handleOpenModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const modalId = e.currentTarget.dataset.targetModalid;
      const contentCoverImg = e.currentTarget.dataset.coverImg;
      const title = e.currentTarget.dataset.title;
      const triggerId = e.currentTarget.dataset.triggerId;
      if (!modalId || !contentCoverImg || !title || !triggerId) return;
      lastClickedTriggerId.current = triggerId;
      openModal(modalId, contentCoverImg, title);
    },
    [openModal, lastClickedTriggerId],
  );

  const rows = useMemo(() => {
    const arr = [];
    for (let i = 0; i < Projects.projects.length; i += 3) {
      arr.push(Projects.projects.slice(i, i + 3));
    }
    return arr;
  }, []);

  return (
    <section id='Project' className='mb-16'>
      <h2 className='font-display pt-2 text-center text-2xl font-bold text-black dark:text-white'>
        Projects
      </h2>
      <div className='flex flex-col items-center justify-center gap-4 py-10 sm:gap-6'>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='flex flex-col items-center justify-center gap-4 sm:flex-col sm:gap-6 md:flex-col lg:flex-row'
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
    </section>
  );
};

export default ProjectSection;
