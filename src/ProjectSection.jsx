import slide1Java from './assets/Java_project/slide1.webp'
import slide1Figma from './assets/Figma_project/slide1.webp'
import slide1Photo from './assets/Photo_project/slide1.jpg'
export default function ProjectSection() {
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
              href='#'
              className='text-pink-300 hover:text-pink-700 flex items-center'
              id='viewFigmaProject'
              data-modal-target='FigmaProjectModal'
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
              href='#'
              className='text-pink-300 hover:text-pink-700 flex items-center'
              id='viewPhotoProject'
              data-modal-target='PhotoProjectModal'
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
                  src='assest/Java_project/slide1.webp'
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src='assest/Java_project/slide2.png'
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src='assest/Java_project/slide3.png'
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src='assest/Java_project/slide4.png'
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src='assest/Java_project/slide5.png'
                  className='w-4/5 sm:w-1/2 md:w-1/2'
                  alt=''
                />
                <img
                  src='assest/Java_project/slide6.png'
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
                  <img src='assest/Figma_project/slide1.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/slide2.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/slide3.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/slide4.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/slide5.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <div className='border border-white rounded-[45px] h-full w-full flex justify-center items-center'>
                    <a
                      href='https://www.figma.com/proto/vNXOmiZr1qYqwrhGEvcvDx/CUAMAG-GARCIA-LANGAMON-MONERA?node-id=278-1450&amp;t=iLTkKMWkZ5JL9CKL-1&amp;scaling=scale-down&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;starting-point-node-id=278%3A1450'
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
                  <img src='assest/Figma_project/2slide1.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/2slide2.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/2slide3.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/2slide4.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <img src='assest/Figma_project/2slide5.webp' alt='' />
                </div>
                <div className='img-wrapper'>
                  <div className='border border-white rounded-[45px] h-full w-full flex justify-center items-center'>
                    <a
                      href='https://www.figma.com/proto/45kjCb71Vs8cQsjf3r7Mlr/MONERA-YU-Figma-Activity-%231?t=d4q8g4KxVsn7wm2u-1&amp;scaling=scale-down&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;node-id=1-648&amp;starting-point-node-id=1%3A648&amp;show-proto-sidebar=1'
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
                      src='assest/Photo_project/slide1.jpg'
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col flex-wrap items-start justify-center absolute w-full h-full opacity-0 group-hover:opacity-100'>
                    <div className='flex flex-col justify-center items-center flex-wrap w-1/4 p-1 bg-gray-900 h-full'>
                      <div className='w-4/6'>
                        <img
                          className='object-cover object-center'
                          src='assest/Photo_project/raw_photos/backgroundImg.webp'
                          alt=''
                        />
                      </div>
                      <div className='w-4/6'>
                        <img
                          className='object-cover object-center'
                          src='assest/Photo_project/raw_photos/florida-kennedy-space-center-rocket-launch.webp'
                          alt=''
                        />
                      </div>
                      <div className='w-4/6'>
                        <img
                          className='object-cover object-center'
                          src='assest/Photo_project/raw_photos/1641457957683.webp'
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
                    <img src='assest/Photo_project/slide2.jpg' alt='' />
                  </div>
                  <div className='w-4/5'>
                    <img src='assest/Photo_project/slide3.jpg' alt='' />
                  </div>
                  <div className='w-4/5'>
                    <img src='assest/Photo_project/slide4.jpg' alt='' />
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
}
