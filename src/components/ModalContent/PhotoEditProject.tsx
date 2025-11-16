import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import slide1Photo from '/assets/Photo_project/slide1.jpg';
import slide2Photo from '/assets/Photo_project/slide2.jpg';
import slide3Photo from '/assets/Photo_project/slide3.jpg';
import slide4Photo from '/assets/Photo_project/slide4.jpg';
import backgroundPhoto from '/assets/Photo_project/raw_photos/backgroundImg.webp';
import floridaPhoto from '/assets/Photo_project/raw_photos/florida-kennedy-space-center-rocket-launch.webp';
import otherPhoto from '/assets/Photo_project/raw_photos/1641457957683.webp';
const PhotoEditProject = () => {
  return (
    <>
      <div className='mainContent z-10 flex h-full w-full flex-col items-center space-y-5 p-4 px-10'>
        <div className='z-10 flex flex-col flex-wrap items-center space-y-10 py-40'>
          <div className='group relative mb-8 flex w-4/5 flex-col ring-2 ring-pink-700'>
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
            <div className='absolute flex h-full w-full flex-col flex-wrap items-start justify-center opacity-0 group-hover:opacity-100'>
              <div className='flex h-full w-1/4 flex-col flex-wrap items-center justify-center bg-gray-900 p-1'>
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
                <span className='text-center text-base font-bold text-white md:text-5xl'>
                  Raw Images
                </span>
                <a
                  href='https://www.behance.net/gallery/134511573/Module-3-L4-Photo-Manipulation%28MONERA-RA%29'
                  target='_blank'
                  className='text-xs font-semibold text-white hover:font-bold hover:text-pink-700'
                >
                  Click for Info
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center py-4 ring-2 ring-pink-700'>
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
            <div className='my-10 flex w-4/5 items-center justify-center'>
              <a
                href='https://www.behance.net/gallery/133686225/module-3-lesson-1-Application-%28MONERA-RA%29'
                target='_blank'
                className='flex items-center space-x-2 font-bold text-white hover:text-pink-700'
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
