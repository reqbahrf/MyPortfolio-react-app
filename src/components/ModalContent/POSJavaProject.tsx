import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import slide1Java from '/public/assets/Java_project/slide1.webp';
import slide2Java from '/public/assets/Java_project/slide2.webp';
import slide3Java from '/public/assets/Java_project/slide3.webp';
import slide4Java from '/public/assets/Java_project/slide4.webp';
import slide5Java from '/public/assets/Java_project/slide5.webp';
import slide6Java from '/public/assets/Java_project/slide6.webp';
import { useEffect } from 'react';
import handleScroll from '../../utils/handleScroll';

const POSJavaProject = () => {
  useEffect(() => {
    const javaProjectModal = document.getElementById('JProjectModal');

    if (javaProjectModal) {
      javaProjectModal.addEventListener('scroll', () =>
        handleScroll(javaProjectModal)
      );
    }

    return () => {
      if (javaProjectModal) {
        javaProjectModal.removeEventListener('scroll', () =>
          handleScroll(javaProjectModal)
        );
      }
    };
  }, []);
  return (
    <>
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
    </>
  );
};

export default POSJavaProject;
