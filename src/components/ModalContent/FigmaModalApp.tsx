import { LazyLoadImage } from 'react-lazy-load-image-component';
import slide1Figma from '/assets/figma-project/slide1.webp';
import slide2Figma from '/assets/figma-project/slide2.webp';
import slide3Figma from '/assets/figma-project/slide3.webp';
import slide4Figma from '/assets/figma-project/slide4.webp';
import slide5Figma from '/assets/figma-project/slide5.webp';
import slide1Figma2 from '/assets/figma-project/2slide1.webp';
import slide2Figma2 from '/assets/figma-project/2slide2.webp';
import slide3Figma2 from '/assets/figma-project/2slide3.webp';
import slide4Figma2 from '/assets/figma-project/2slide4.webp';
import slide5Figma2 from '/assets/figma-project/2slide5.webp';
const FigmaModalApp = () => {
  return (
    <>
      <div className='img-content z-10'>
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
          <div className='flex h-full w-full items-center justify-center rounded-[45px] border border-white'>
            <a
              href='https://www.figma.com/proto/vNXOmiZr1qYqwrhGEvcvDx/CUAMAG-GARCIA-LANGAMON-MONERA?node-id=278-1450&t=iLTkKMWkZ5JL9CKL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=278%3A1450'
              target='_blank'
              className='text-lg font-bold text-white hover:font-bold hover:text-pink-700'
            >
              View Prototype
            </a>
          </div>
        </div>
      </div>
      <div className='img-content z-10'>
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
          <div className='flex h-full w-full items-center justify-center rounded-[45px] border border-white'>
            <a
              href='https://www.figma.com/proto/45kjCb71Vs8cQsjf3r7Mlr/MONERA-YU-Figma-Activity-%231?t=d4q8g4KxVsn7wm2u-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-648&starting-point-node-id=1%3A648&show-proto-sidebar=1'
              target='_blank'
              className='text-lg font-bold text-white hover:font-bold hover:text-pink-700'
            >
              View Prototype
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FigmaModalApp;
