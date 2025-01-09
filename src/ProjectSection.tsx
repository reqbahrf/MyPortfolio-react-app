import React from 'react';
import slide1Java from './assets/Java_project/slide1.webp';
import slide2Java from './assets/Java_project/slide2.png';
import slide3Java from './assets/Java_project/slide3.png';
import slide4Java from './assets/Java_project/slide4.png';
import slide5Java from './assets/Java_project/slide5.png';
import slide6Java from './assets/Java_project/slide6.png';

import slide1Figma from './assets/Figma_project/slide1.webp';
import slide2Figma from './assets/Figma_project/slide2.webp';
import slide3Figma from './assets/Figma_project/slide3.webp';
import slide4Figma from './assets/Figma_project/slide4.webp';
import slide5Figma from './assets/Figma_project/slide5.webp';
import slide1Figma2 from './assets/Figma_project/2slide1.webp';
import slide2Figma2 from './assets/Figma_project/2slide2.webp';
import slide3Figma2 from './assets/Figma_project/2slide3.webp';
import slide4Figma2 from './assets/Figma_project/2slide4.webp';
import slide5Figma2 from './assets/Figma_project/2slide5.webp';

import slide1Photo from './assets/Photo_project/slide1.jpg';
import slide2Photo from './assets/Photo_project/slide2.jpg';
import slide3Photo from './assets/Photo_project/slide3.jpg';
import slide4Photo from './assets/Photo_project/slide4.jpg';
import backgroundPhoto from './assets/Photo_project/raw_photos/backgroundImg.webp';
import floridaPhoto from './assets/Photo_project/raw_photos/florida-kennedy-space-center-rocket-launch.webp';
import otherPhoto from './assets/Photo_project/raw_photos/1641457957683.webp';
interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  };

  React.useEffect(() => {
    const modals = ['javaProjectModal', 'FigmaProjectModal', 'PhotoProjectModal'];
    modals.forEach((modalId) => {
      const closeButton = document.querySelector(`#${modalId} .close-button`);
      if (closeButton) {
        closeButton.addEventListener('click', () => closeModal(modalId));
      }
      
      //close the modal if the user clicks outside of it
      const modal = document.getElementById(modalId);
      if(modal){
        modal.addEventListener('click', (event) => {
          if(event.target === modal){
            closeModal(modalId);
          }
        })
      }
    });
  }, []);

  return (
    <section id='Project'>
      <div className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-14 m-0 py-10 sm:m-30 md:m-40'>
        <div
          className='flex flex-col items-center justify-center w-[280px] h-[350px] sm:w-[290px] sm:h-[355px] rounded-[40px] overflow-hidden shadow-lg bg-gray-800'
          id='javaProjectConta'
        >
          <img
            className='w-full h-48 object-cover'
            src={slide1Java}
            alt='Java Project'
          />
          <div className='p-4'>
            <div className='font-bold text-white text-xl mb-2'>
              Java Application Project
            </div>
            <p className='text-white text-sm mb-4'>
              First Java Application Project as one of requirement from the
              System Analysis and Design subject.
            </p>
            <button
              className='text-pink-300 hover:text-pink-700 flex items-center'
              id='viewJavaProject'
              data-modal-target='javaProjectModal'
              onClick={() => openModal('javaProjectModal')}
            >
              View Full Details
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-[280px] h-[350px] sm:w-[290px] sm:h-[355px] rounded-[40px] overflow-hidden shadow-lg bg-gray-800'>
          <img
            className='w-full h-48 object-cover'
            src={slide1Figma}
            alt='Figma Project'
          />
          <div className='p-4'>
            <div className='font-bold text-white text-xl mb-2'>
              Figma Projects
            </div>
            <p className='text-white text-sm mb-4'>
              Figma Projects I created during my 3rd year subject Human Computer
              Interaction.
            </p>
            <button
              className='text-pink-300 hover:text-pink-700 flex items-center'
              id='viewFigmaProject'
              data-modal-target='FigmaProjectModal'
              onClick={() => openModal('FigmaProjectModal')}
            >
              View Full Details
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-[280px] h-[350px] sm:w-[290px] sm:h-[355px] rounded-[40px] overflow-hidden shadow-lg bg-gray-800'>
          <img
            className='w-full h-48 object-cover'
            src={slide1Photo}
            alt='Photo Editor Project'
          />
          <div className='p-4'>
            <div className='font-bold text-white text-xl mb-2'>
              Photo Editor Projects
            </div>
            <p className='text-white text-sm mb-4'>
              Photo Editor Projects I created during my 1st year subject
              Introduction to Computing.
            </p>
            <button
              className='text-pink-300 hover:text-pink-700 flex items-center'
              id='viewPhotoProject'
              data-modal-target='PhotoProjectModal'
              onClick={() => openModal('PhotoProjectModal')}
            >
              View Full Details
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id='javaProjectModal' className='modal'>
        <div id='javaProjectModalContent' className='modal-content'>
          <span className='close-button'>×</span>
          <div
            className='flex flex-col overflow-x-hidden items-center w-screen h-screen'
            id='JProjectModal'
          >
            <div className='Java-Project-header'>POS Java Project</div>
            <div className='flex flex-col space-y-5 p-4 w-full px-10 mainContent'>
              <div className='flex flex-col items-center py-40 h-auto space-y-10'>
                <img
                  src={slide1Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src={slide2Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src={slide3Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src={slide4Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src={slide5Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src={slide6Java}
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='FigmaProjectModal' className='modal'>
        <div className='modal-content'>
          <span className='close-button'>×</span>

          <div
            className='flex flex-col overflow-x-hidden items-center w-screen h-screen'
            id='FProjectModal'
          >
            <div className='Figma-Project-header'>Figma Project</div>
            <div className='flex flex-col items-center space-y-5 p-4 w-full px-10 z-10 mainContent'>
              <div className='z-10 img-content'>
                <div className='img-wrapper'>
                  <img src={slide1Figma} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide2Figma} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide3Figma} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide4Figma} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide5Figma} alt='' />
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
                  <img src={slide1Figma2} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide2Figma2} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide3Figma2} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide4Figma2} alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src={slide5Figma2} alt='' />
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
      <div id='PhotoProjectModal' className='modal'>
        <div className='modal-content'>
          <span className='close-button'>×</span>

          <div
            className='flex flex-col overflow-x-hidden items-center w-screen h-screen'
            id='PProjectModal'
          >
            <div className='Photo-Project-header'>Photo Edit Project</div>
            <div className='flex flex-col items-center space-y-5 p-4 w-full h-full px-10 z-10 mainContent'>
              <div className='flex flex-col flex-wrap items-center py-40 space-y-10 z-10'>
                <div className='flex flex-col relative w-4/5 group mb-8 ring-2 ring-pink-700'>
                  <div>
                    <img
                      className='group-hover:blur-[2px] group-hover:brightness-75'
                      src={slide1Photo}
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col flex-wrap items-start justify-center absolute w-full h-full opacity-0 group-hover:opacity-100'>
                    <div className='flex flex-col justify-center items-center flex-wrap w-1/4 p-1 bg-gray-900 h-full'>
                      <div className='w-4/6'>
                        <img
                          className='object-cover object-center'
                          src={backgroundPhoto}
                          alt=''
                        />
                      </div>
                      <div className='w-4/6'>
                        <img
                          className='object-cover object-center'
                          src={floridaPhoto}
                          alt=''
                        />
                      </div>
                      <div className='w-4/6'>
                        <img
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
                    <img src={slide2Photo} alt='' />
                  </div>
                  <div className='w-4/5'>
                    <img src={slide3Photo} alt='' />
                  </div>
                  <div className='w-4/5'>
                    <img src={slide4Photo} alt='' />
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