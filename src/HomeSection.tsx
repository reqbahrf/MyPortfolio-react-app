import profile from '/assets/pageImg/profile.webp';
import slide1 from '/assets/figma-project/slide1.webp';
import slide2 from '/assets/figma-project/slide2.webp';
import slide3 from '/assets/figma-project/slide3.webp';
import slide4 from '/assets/figma-project/slide4.webp';
import slide5 from '/assets/figma-project/slide5.webp';
import { useEffect, useRef } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function HomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !wrapper) return;

    const scrollHandler = () => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      let scrollProgress = Math.max(
        0,
        Math.min(1, -sectionTop / (sectionHeight - windowHeight))
      );
      const animationSpeed = 0.1; // Adjust this value to control the animation speed (0 to 1)
      progressRef.current =
        progressRef.current +
        (scrollProgress - progressRef.current) * animationSpeed;

      const totalMove = wrapper.scrollWidth - window.innerWidth + 100;

      requestAnimationFrame(() => {
        wrapper.style.transform = `translateX(${
          -progressRef.current * totalMove
        }px)`;
      });
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); // Initial position

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <section id='Home'>
      <div className='h-screen flex justify-center items-center hero'>
        <div className='flex flex-col-reverse lg:flex-row h-full sm:h-2/4 w-auto px-10 sm:px-40'>
          <div className='flex flex-col justify-center space-y-5'>
            <div>
              <h1 className='text-4xl font-bold text-center xl:text-start text-white'>
                Hi I&apos;m Reanz Arthur A. Monera
              </h1>
            </div>
            <div>
              <p className='text-center text-md lg:text-start lg:text-2xl text-white'>
                Full stack developer <span className='font-bold'>|</span> Photo
                Editor
              </p>
            </div>

            <div className='text-center lg:text-start !mt-10'>
              <a
                href='https://docs.google.com/document/d/17s6o-BsEe8exWWh_qno_6BJzvd8nbuCJ/edit?usp=sharing&ouid=114884687085173552646&rtpof=true&sd=true'
                target='_blank'
                className='rounded-full bg-white hover:bg-pink-700 text-black font-bold py-2 px-9'
              >
                View CV
              </a>
            </div>
          </div>
          <div className='m-5 '>
            <img
              id='avatar'
              src={profile}
              alt=''
              className='w-[300px] h-[300px] rounded-full object-cover border-2 border-pink-700 shadow-lg m-auto'
            />
          </div>
        </div>
      </div>
      <section
        id='sectionPin'
        ref={sectionRef}
      >
        <div
          className='pin-wrap-sticky'
          ref={wrapperRef}
        >
          <div className='text-container'>
            <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
              One of the Figma prototype designs I created for our subject group
              project
            </p>
          </div>
          <div className='slides-container'>
            <LazyLoadImage
              effect='opacity'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' }, // Adjust transition delay
              }}
              src={slide1}
              alt='App Icon Design'
              className='slide-image'
            />
            <LazyLoadImage
              effect='opacity'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.4s' }, // Adjust transition delay
              }}
              src={slide2}
              alt='Welcome Screen'
              className='slide-image'
            />
            <LazyLoadImage
              effect='opacity'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.5s' }, // Adjust transition delay
              }}
              src={slide3}
              alt='Login Interface'
              className='slide-image'
            />
            <LazyLoadImage
              effect='opacity'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.6s' }, // Adjust transition delay
              }}
              src={slide4}
              alt='Home Screen'
              className='slide-image'
            />
            <LazyLoadImage
              effect='opacity'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.7s' }, // Adjust transition delay
              }}
              src={slide5}
              alt='User Profile'
              className='slide-image'
            />
          </div>
        </div>
      </section>
    </section>
  );
}
