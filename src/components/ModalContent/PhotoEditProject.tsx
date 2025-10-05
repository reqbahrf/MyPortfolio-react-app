import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import slide1Photo from '/public/assets/Photo_project/slide1.jpg';
import slide2Photo from '/public/assets/Photo_project/slide2.jpg';
import slide3Photo from '/public/assets/Photo_project/slide3.jpg';
import slide4Photo from '/public/assets/Photo_project/slide4.jpg';
import backgroundPhoto from '/public/assets/Photo_project/raw_photos/backgroundImg.webp';
import floridaPhoto from '/public/assets/Photo_project/raw_photos/florida-kennedy-space-center-rocket-launch.webp';
import otherPhoto from '/public/assets/Photo_project/raw_photos/1641457957683.webp';
const PhotoEditProject = () => {
  return (
    <>
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
    </>
  );
};

export default PhotoEditProject;
