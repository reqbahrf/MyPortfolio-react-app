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
import SkillCategoryCard from './components/SkillCategoryCard';

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
        Math.min(1, -sectionTop / (sectionHeight - windowHeight)),
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
    <section id='Home' className='min-h-screen transition-colors duration-300'>
      <div className='hero flex h-screen items-center justify-center'>
        <div className='flex h-full w-auto flex-col-reverse px-10 sm:px-40 lg:flex-row'>
          <div className='flex flex-1 flex-col justify-center space-y-5'>
            <div>
              <h1 className='font-display text-center text-4xl font-bold text-black xl:text-start dark:text-white'>
                Hi, I&apos;m Reanz Arthur
              </h1>
            </div>
            <div className='w-[96dvw] md:w-[40vw] lg:w-[30dvw]'>
              <p className='font-body md:text-md text-justify indent-8 text-sm text-black/80 dark:text-white/80'>
                I'm a self-taught web developer and graphic designer. I enjoy
                building websites and apps that look good and work well. I'm now
                looking for job opportunities where I can grow and keep learning
                more about web development.
              </p>
            </div>

            <div className='mt-10! text-center lg:text-start'>
              <a
                href='https://drive.google.com/file/d/16y7aByAf2mYG719OlLFlXsJDRDJVUM6p/view?usp=sharing'
                target='_blank'
                className='bg-sage font-body hover:bg-clay hover:text-bone rounded-full px-9 py-2 font-bold transition-all hover:shadow-lg dark:text-white'
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
              className='border-clay m-auto h-[250px] w-[250px] rounded-full border-2 object-cover shadow-lg'
            />
          </div>
        </div>
      </div>
      <section className='flex w-full flex-col items-center justify-center'>
        <h2 className='font-display text-center text-2xl font-bold text-black xl:text-start dark:text-white'>
          About
        </h2>
        <div className='m-5 w-[95dvw] md:m-12 lg:m-18 lg:w-1/2'>
          <p className='font-body mb-7 text-justify indent-8 text-lg text-black/80 dark:text-white/80'>
            I graduated with a degree in Information System from Davao del Norte
            State College. Although the BS in Information System mainly focuses
            on designing and proposing systems, a change in our curriculum gave
            me the chance to actually build one too. This shift helped me learn
            and explore web development more, especially through our Capstone
            project, where I developed a web application as a full-stack
            developer.
          </p>
        </div>
        <h3 className='font-display mb-3 text-center text-xl font-bold text-black xl:text-start dark:text-white'>
          Work Experience
        </h3>
        <div className='mb-5 w-[95dvw] md:mb-12 lg:mb-18 lg:w-1/2'>
          <InfoCard
            title='DOST PSTO davao del norte'
            subtitle='OJT Student | Full Stack Laravel Developer'
            icon='/assets/pageImg/dost-logo.webp'
            years='Feb 2025 - May 2025'
            link='https://www.facebook.com/share/p/1H1CjfWftn/'
          />
        </div>
        <h3 className='font-display mb-3 text-center text-xl font-bold text-black xl:text-start dark:text-white'>
          Education
        </h3>
        <div className='mb-5 w-[95dvw] md:mb-12 lg:mb-18 lg:w-1/2'>
          <InfoCard
            title='Davao del Norte State College'
            subtitle='Bachelor of Science in Information System'
            icon='/assets/pageImg/dnsc-logo.webp'
            years='2021 - 2025'
            link='https://www.davadelnorte.edu.ph/'
          />
        </div>
        <h3 className='font-display mb-6 text-center text-xl font-bold text-black xl:text-start dark:text-white'>
          Skills
        </h3>
        <div className='mb-5 grid w-[95dvw] grid-cols-1 gap-4 md:mb-12 md:grid-cols-3 lg:mb-18 lg:w-3/5'>
          {Object.entries(skills.skills).map(([category, categorySkills]) => (
            <SkillCategoryCard
              key={category}
              categoryName={
                category as 'frontend' | 'backend' | 'testingAndtools'
              }
              skills={categorySkills}
            />
          ))}
        </div>
      </section>
      <section id='sectionPin' ref={sectionRef}>
        <div className='pin-wrap-sticky' ref={wrapperRef}>
          <div className='text-container'>
            <p className='mb-4 text-2xl font-bold text-black/80 sm:text-3xl md:text-4xl dark:text-white/80'>
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
