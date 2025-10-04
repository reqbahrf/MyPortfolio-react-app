import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
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
import handleScroll from '../../utils/handleScroll';
import { useEffect } from 'react';
const FigmaModalApp = () => {
  useEffect(() => {
    const figmaProjectModal = document.getElementById('FProjectModal');

    if (figmaProjectModal) {
      figmaProjectModal.addEventListener('scroll', () =>
        handleScroll(figmaProjectModal)
      );
    }

    return () => {
      if (figmaProjectModal) {
        figmaProjectModal.removeEventListener('scroll', () =>
          handleScroll(figmaProjectModal)
        );
      }
    };
  }, []);
  return (
    <>
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
    </>
  );
};

export default FigmaModalApp;
