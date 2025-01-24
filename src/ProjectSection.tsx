import React from 'react';
import ProjectCard from './components/ProjectCard';
import Projects from './Project.json';
import slide1Java from '/public/assets/Java_project/slide1.webp';
import slide2Java from '/public/assets/Java_project/slide2.png';
import slide3Java from '/public/assets/Java_project/slide3.png';
import slide4Java from '/public/assets/Java_project/slide4.png';
import slide5Java from '/public/assets/Java_project/slide5.png';
import slide6Java from '/public/assets/Java_project/slide6.png';

import slide1Figma from '/public/assets/Figma_project/slide1.webp';
import slide2Figma from '/public/assets/Figma_project/slide2.webp';
import slide3Figma from '/public/assets/Figma_project/slide3.webp';
import slide4Figma from '/public/assets/Figma_project/slide4.webp';
import slide5Figma from '/public/assets/Figma_project/slide5.webp';
import slide1Figma2 from '/public/assets/Figma_project/2slide1.webp';
import slide2Figma2 from '/public/assets/Figma_project/2slide2.webp';
import slide3Figma2 from '/public/assets/Figma_project/2slide3.webp';
import slide4Figma2 from '/public/assets/Figma_project/2slide4.webp';
import slide5Figma2 from '/public/assets/Figma_project/2slide5.webp';

import slide1Photo from '/public/assets/Photo_project/slide1.jpg';
import slide2Photo from '/public/assets/Photo_project/slide2.jpg';
import slide3Photo from '/public/assets/Photo_project/slide3.jpg';
import slide4Photo from '/public/assets/Photo_project/slide4.jpg';
import backgroundPhoto from '/public/assets/Photo_project/raw_photos/backgroundImg.webp';
import floridaPhoto from '/public/assets/Photo_project/raw_photos/florida-kennedy-space-center-rocket-launch.webp';
import otherPhoto from '/public/assets/Photo_project/raw_photos/1641457957683.webp';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const ProjectSection = () => {
  const openModal = (buttonId: string, modalId: string) => {
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

    modal.classList.toggle('show-modal');
    document.body.classList.toggle('no-scroll');
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

    const modal = modalElement as HTMLDivElement;
    modal.classList.remove('show-modal');
    document.body.classList.remove('no-scroll');
  };

  const ProjectCardsData = Projects.projects.map((project) => (
    <ProjectCard
      key={project.id}
      coverImg={project.coverImg}
      Div_id={project.id}
      title={project.title}
      btn_id={project.btn_id}
      targetModal_id={project.targetModal_id}
      description={project.description}
      openModal={() => openModal(project.btn_id, project.targetModal_id)}
    />
  ));

  React.useEffect(() => {
    const javaProjectModal = document.getElementById('JProjectModal');
    const figmaProjectModal = document.getElementById('FProjectModal');
    const photoProjectModal = document.getElementById('PProjectModal');
    const toggle = 'is-sticky';

    const handleScroll = (modal: HTMLElement | null) => {
      if (modal) {
        const currentScroll = modal.scrollTop;
        if (currentScroll > 0) {
          modal.classList.add(toggle);
        } else {
          modal.classList.remove(toggle);
        }
      }
    };

    if (javaProjectModal) {
      javaProjectModal.addEventListener('scroll', () =>
        handleScroll(javaProjectModal)
      );
    }

    if (figmaProjectModal) {
      figmaProjectModal.addEventListener('scroll', () =>
        handleScroll(figmaProjectModal)
      );
    }

    if (photoProjectModal) {
      photoProjectModal.addEventListener('scroll', () =>
        handleScroll(photoProjectModal)
      );
    }

    return () => {
      if (javaProjectModal) {
        javaProjectModal.removeEventListener('scroll', () =>
          handleScroll(javaProjectModal)
        );
      }
      if (figmaProjectModal) {
        figmaProjectModal.removeEventListener('scroll', () =>
          handleScroll(figmaProjectModal)
        );
      }
      if (photoProjectModal) {
        photoProjectModal.removeEventListener('scroll', () =>
          handleScroll(photoProjectModal)
        );
      }
    };
  }, []);
  return (
    <section id='Project'>
      <div className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-14 m-0 py-10 sm:m-30 md:m-40'>
        {ProjectCardsData || ''}
      </div>
      <div
        id='javaProjectModal'
        className='modal'
      >
        <div
          id='javaProjectModalContent'
          className='modal-content'
        >
          <button
            className='close-button'
            onClick={(event) => closeModal(event, 'javaProjectModal')}
          >
            ×
          </button>
          <div
            className='flex flex-col overflow-x-hidden items-center w-screen h-screen'
            id='JProjectModal'
          >
            <div className='Java-Project-header'>POS Java Project</div>
            <div className='flex flex-col space-y-5 p-4 w-full px-10 mainContent'>
              <div className='flex flex-col items-center py-40 h-auto space-y-10'>
                <LazyLoadImage
                  effect='blur'
                  threshold={300}
                  wrapperProps={{
                    style: { transitionDelay: '0.3s' }, // Adjust transition delay
                  }}
                  src={slide1Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <LazyLoadImage
                  effect='blur'
                  threshold={300}
                  wrapperProps={{
                    style: { transitionDelay: '0.3s' }, // Adjust transition delay
                  }}
                  src={slide2Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <LazyLoadImage
                  effect='blur'
                  threshold={300}
                  wrapperProps={{
                    style: { transitionDelay: '0.3s' }, // Adjust transition delay
                  }}
                  src={slide3Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <LazyLoadImage
                  effect='blur'
                  threshold={300}
                  wrapperProps={{
                    style: { transitionDelay: '0.3s' }, // Adjust transition delay
                  }}
                  src={slide4Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <LazyLoadImage
                  effect='blur'
                  threshold={300}
                  wrapperProps={{
                    style: { transitionDelay: '0.3s' }, // Adjust transition delay
                  }}
                  src={slide5Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <LazyLoadImage
                  effect='blur'
                  threshold={300}
                  wrapperProps={{
                    style: { transitionDelay: '0.3s' }, // Adjust transition delay
                  }}
                  src={slide6Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='figmaProjectModal'
        className='modal'
      >
        <div className='modal-content'>
          <button
            className='close-button'
            onClick={(event) => closeModal(event, 'figmaProjectModal')}
          >
            ×
          </button>

          <div
            className='flex flex-col overflow-x-hidden items-center w-screen h-screen'
            id='FProjectModal'
          >
            <div className='Figma-Project-header'>Figma Project</div>
            <div className='flex flex-col items-center space-y-5 p-4 w-full px-10 z-10 mainContent'>
              <div className='z-10 img-content'>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide1Figma}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide2Figma}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide3Figma}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide4Figma}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide5Figma}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <div className='border border-white rounded-[45px] h-full w-full flex justify-center items-center'>
                    <a
                      href='https://www.figma.com/proto/vNXOmiZr1qYqwrhGEvcvDx/CUAMAG-GARCIA-LANGAMON-MONERA?node-id=278-1450&t=iLTkKMWkZ5JL9CKL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=278%3A1450'
                      target='_blank'
                      className='text-white font-bold text-lg hover:text-pink-700 hover:font-bold'
                    >
                      View Prototype
                    </a>
                  </div>
                </div>
              </div>
              <div className='z-10 img-content'>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide1Figma2}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide2Figma2}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide3Figma2}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide4Figma2}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <LazyLoadImage
                    effect='blur'
                    threshold={300}
                    wrapperProps={{
                      style: { transitionDelay: '0.3s' }, // Adjust transition delay
                    }}
                    src={slide5Figma2}
                    alt=''
                  />
                </div>
                <div className='img-wrapper'>
                  <div className='border border-white rounded-[45px] h-full w-full flex justify-center items-center'>
                    <a
                      href='https://www.figma.com/proto/45kjCb71Vs8cQsjf3r7Mlr/MONERA-YU-Figma-Activity-%231?t=d4q8g4KxVsn7wm2u-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-648&starting-point-node-id=1%3A648&show-proto-sidebar=1'
                      target='_blank'
                      className='text-white font-bold text-lg hover:text-pink-700 hover:font-bold'
                    >
                      View Prototype
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='photoProjectModal'
        className='modal'
      >
        <div className='modal-content'>
          <button
            className='close-button'
            onClick={(event) => closeModal(event, 'photoProjectModal')}
          >
            ×
          </button>

          <div
            className='flex flex-col overflow-x-hidden items-center w-screen h-screen'
            id='PProjectModal'
          >
            <div className='Photo-Project-header'>Photo Edit Project</div>
            <div className='flex flex-col items-center space-y-5 p-4 w-full h-full px-10 z-10 mainContent'>
              <div className='flex flex-col flex-wrap items-center py-40 space-y-10 z-10'>
                <div className='flex flex-col relative w-4/5 group mb-8 ring-2 ring-pink-700'>
                  <div>
                    <LazyLoadImage
                      effect='blur'
                      threshold={300}
                      wrapperProps={{
                        style: { transitionDelay: '0.3s' }, // Adjust transition delay
                      }}
                      className='group-hover:blur-[2px] group-hover:brightness-75'
                      src={slide1Photo}
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col flex-wrap items-start justify-center absolute w-full h-full opacity-0 group-hover:opacity-100'>
                    <div className='flex flex-col justify-center items-center flex-wrap w-1/4 p-1 bg-gray-900 h-full'>
                      <div className='w-4/6'>
                        <LazyLoadImage
                          effect='blur'
                          threshold={300}
                          wrapperProps={{
                            style: { transitionDelay: '0.3s' }, // Adjust transition delay
                          }}
                          className='object-cover object-center'
                          src={backgroundPhoto}
                          alt=''
                        />
                      </div>
                      <div className='w-4/6'>
                        <LazyLoadImage
                          effect='blur'
                          threshold={300}
                          wrapperProps={{
                            style: { transitionDelay: '0.3s' }, // Adjust transition delay
                          }}
                          className='object-cover object-center'
                          src={floridaPhoto}
                          alt=''
                        />
                      </div>
                      <div className='w-4/6'>
                        <LazyLoadImage
                          effect='blur'
                          threshold={300}
                          wrapperProps={{
                            style: { transitionDelay: '0.3s' }, // Adjust transition delay
                          }}
                          className='object-cover object-center'
                          src={otherPhoto}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <span className='text-base md:text-5xl text-white text-center font-bold'>
                        Raw Images
                      </span>
                      <a
                        href='https://www.behance.net/gallery/134511573/Module-3-L4-Photo-Manipulation%28MONERA-RA%29'
                        target='_blank'
                        className='text-white text-xs font-semibold hover:text-pink-700 hover:font-bold'
                      >
                        Click for Info
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center py-4 ring-2 ring-pink-700'>
                  <div className='w-4/5'>
                    <LazyLoadImage
                      effect='blur'
                      threshold={300}
                      wrapperProps={{
                        style: { transitionDelay: '0.3s' }, // Adjust transition delay
                      }}
                      src={slide2Photo}
                      alt=''
                    />
                  </div>
                  <div className='w-4/5'>
                    <LazyLoadImage
                      effect='blur'
                      threshold={300}
                      wrapperProps={{
                        style: { transitionDelay: '0.3s' }, // Adjust transition delay
                      }}
                      src={slide3Photo}
                      alt=''
                    />
                  </div>
                  <div className='w-4/5'>
                    <LazyLoadImage
                      effect='blur'
                      threshold={300}
                      wrapperProps={{
                        style: { transitionDelay: '0.3s' }, // Adjust transition delay
                      }}
                      src={slide4Photo}
                      alt=''
                    />
                  </div>
                  <div className='w-4/5 flex justify-center items-center my-10'>
                    <a
                      href='https://www.behance.net/gallery/133686225/module-3-lesson-1-Application-%28MONERA-RA%29'
                      target='_blank'
                      className='flex items-center text-white font-bold space-x-2 hover:text-pink-700'
                    >
                      <span>Click for Info</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
