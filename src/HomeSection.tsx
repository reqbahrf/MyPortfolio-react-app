import profile from '/assets/pageImg/profile.webp';
import slide1 from '/assets/figma-project/slide1.webp';
import slide2 from '/assets/figma-project/slide2.webp';
import slide3 from '/assets/figma-project/slide3.webp';
import slide4 from '/assets/figma-project/slide4.webp';
import slide5 from '/assets/figma-project/slide5.webp';
import { useEffect, useRef } from 'react';
import InfoCard from './components/InfoCard';
import skills from './content/skills.json';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import PillTag from './components/PillTag';

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
        <div className='flex flex-col-reverse lg:flex-row h-full w-auto px-10 sm:px-40'>
          <div className='flex flex-col justify-center space-y-5 flex-1'>
            <div>
              <h1 className='text-4xl font-bold text-center xl:text-start text-black dark:text-white'>
                Hi, I&apos;m Reanz Arthur
              </h1>
            </div>
            <div className='w-[96dvw] md:w-[40vw] lg:w-[30dvw]'>
              <p className='text-justify indent-8 text-sm md:text-md text-black dark:text-white'>
                I'm a self-taught web developer and graphic designer. I enjoy
                building websites and apps that look good and work well. I'm now
                looking for job opportunities where I can grow and keep learning
                more about web development.
              </p>
            </div>

            <div className='text-center lg:text-start mt-10!'>
              <a
                href='https://docs.google.com/document/d/17s6o-BsEe8exWWh_qno_6BJzvd8nbuCJ/edit?usp=sharing&ouid=114884687085173552646&rtpof=true&sd=true'
                target='_blank'
                className='rounded-full hover:shadow-md hover:dark:shadow-pink-500/50 hover:shadow-black/25 bg-gray-200 dark:bg-gray-800 dark:text-white text-black font-bold py-2 px-9'
              >
                View CV
              </a>
            </div>
          </div>
          <div className='m-5 flex justify-center'>
            <img
              id='avatar'
              src={profile}
              alt='Profile'
              className='w-[250px] h-[250px] rounded-full object-cover border-2 border-pink-700 shadow-lg m-auto'
            />
          </div>
        </div>
      </div>
      <section className='flex flex-col justify-center items-center w-full'>
        <h2 className='text-2xl font-bold text-center xl:text-start text-black dark:text-white'>
          About
        </h2>
        <div className='w-[95dvw] lg:w-1/2 m-5 md:m-12 lg:m-18'>
          <div className='text-black dark:text-white text-lg mb-7 indent-8 text-justify'>
            I graduated with a degree in Information System from Davao del Norte
            State College. Although the BS in Information System mainly focuses
            on designing and proposing systems, a change in our curriculum gave
            me the chance to actually build one too. This shift helped me learn
            and explore web development more, especially through our Capstone
            project, where I developed a web application as a full-stack
            developer.
          </div>
        </div>
        <h2 className='text-2xl font-bold text-center xl:text-start text-black dark:text-white mb-3'>
          Work Experience
        </h2>
        <div className='w-[95dvw] lg:w-1/2 mb-5 md:mb-12 lg:mb-18'>
          <InfoCard
            title='DOST PSTO davao del norte'
            subtitle='OJT Student | Full Stack Laravel Developer'
            icon='/assets/pageImg/dost-logo.webp'
            years='Feb 2025 - May 2025'
            link='https://www.facebook.com/share/p/1H1CjfWftn/'
          />
        </div>
        <h2 className='text-2xl font-bold text-center xl:text-start text-black dark:text-white mb-3'>
          Education
        </h2>
        <div className='w-[95dvw] lg:w-1/2 mb-5 md:mb-12 lg:mb-18'>
          <InfoCard
            title='Davao del Norte State College'
            subtitle='Bachelor of Science in Information System'
            icon='/assets/pageImg/dnsc-logo.webp'
            years='2021 - 2025'
            link='https://www.davadelnorte.edu.ph/'
          />
        </div>
        <h2 className='text-2xl font-bold text-center xl:text-start text-black dark:text-white mb-3'>
          Skills
        </h2>
        <div className='w-[95dvw] lg:w-1/2 mb-5 md:mb-12 lg:mb-18'>
          <div className='flex flex-wrap justify-center gap-2'>
            {skills.skills.map((skill) => (
              <PillTag
                key={skill}
                tag={skill}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        id='sectionPin'
        ref={sectionRef}
      >
        <div
          className='pin-wrap-sticky'
          ref={wrapperRef}
        >
          <div className='text-container'>
            <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-4'>
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
