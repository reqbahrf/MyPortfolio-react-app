import profile2 from '/assets/pageImg/profile2.webp';
import {
  RiGithubFill,
  RiFigmaFill,
  RiBehanceFill,
  RiMailFill,
  RiFacebookFill,
  RiInstagramLine,
} from '@remixicon/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function AboutSection() {
  return (
    <section id='About'>
      <div className='flex flex-col lg:flex-row m-0 sm:m-3 md:m-30 lg:m-40 border-y-black shadow-xl bg-gray-900 bg-opacity-70 px-8 py-5 md:px-20 lg:px-20'>
        <div className='flex flex-col flex-grow'>
          <div className='myProfileImg flex flex-1 justify-center'>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' }, // Adjust transition delay
              }}
              src={profile2}
              className='profile1 object-cover h-96'
              alt='Profile'
            />
          </div>
          <div className='mysocialMedia flex flex-row lg:flex-col my-10 gap-4'>
            <div className='flex flex-1 group'>
              <RiGithubFill className=' text-3xl text-white group-hover:text-pink-700'></RiGithubFill>
              <a
                href='https://github.com/reqbahrf'
                target='_blank'
                className='text-white hidden md:block ps-5 group-hover:text-pink-700'
              >
                GitHub
              </a>
            </div>
            <div className='flex flex-1 group'>
              <RiFigmaFill className=' text-3xl text-white group-hover:text-pink-700'></RiFigmaFill>
              <a
                href='https://www.figma.com/@reanzarthuramon'
                target='_blank'
                className='text-white hidden md:block ps-5 group-hover:text-pink-700'
              >
                Figma
              </a>
            </div>
            <div className='flex flex-1 group'>
              <RiBehanceFill className=' text-3xl text-white group-hover:text-pink-700'></RiBehanceFill>
              <a
                href='https://www.behance.net/reanzamonera'
                target='_blank'
                className='text-white hidden md:block ps-5 group-hover:text-pink-700'
              >
                Behance
              </a>
            </div>
            <div className='flex flex-1 group'>
              <RiFacebookFill className=' text-3xl text-white group-hover:text-pink-700'></RiFacebookFill>
              <a
                href='https://www.facebook.com/profile.php?id=100008998324688'
                target='_blank'
                className='text-white hidden md:block ps-5 group-hover:text-pink-700'
              >
                Facebook
              </a>
            </div>
            <div className='flex flex-1 group'>
              <RiInstagramLine className=' text-3xl text-white group-hover:text-pink-700'></RiInstagramLine>
              <a
                href='https://www.instagram.com/reanz_arthur/'
                target='_blank'
                className='text-white hidden md:block ps-5 group-hover:text-pink-700'
              >
                Instagram
              </a>
            </div>
          </div>
          <hr />
          <div className='flex flex-1 group mt-5 lg:mt-0 justify-center lg:justify-start'>
            <RiMailFill className=' text-3xl text-white group-hover:text-pink-700'></RiMailFill>
            <a
              href='mailto:reqbahrf@gmail.com'
              className='text-white ps-5 group-hover:text-pink-700'
            >
              reqbahrf@gmail.com
            </a>
          </div>
        </div>
        <div className='intro flex flex-col flex-grow w-auto m-5 md:m-12 lg:m-18'>
          <div className='text-white text-xl md:text-3xl font-semibold my-4'>
            I&apos;m Reanz Arthur Antone Monera
          </div>
          <div className='text-white text-lg mb-7 indent-8 text-justify'>
            I graduated with a degree in Information System from Davao del Norte
            State College. Although the BS in Information System mainly focuses
            on designing and proposing systems, a change in our curriculum gave
            me the chance to actually build one too. This shift helped me learn
            and explore web development more, especially through our Capstone
            project, where I developed a web application as a full-stack
            developer.
          </div>
        </div>
      </div>
    </section>
  );
}
