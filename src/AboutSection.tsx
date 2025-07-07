import * as React from 'react';
import profile2 from '/public/assets/pageImg/profile2.webp';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function AboutSection() {
  return (
    <section id='About'>
      <div className='flex flex-col sm:flex-row md:flex-row m-0 sm:m-30 md:m-40 border-y-black shadow-xl bg-gray-900 bg-opacity-70 px-8 py-5 sm:px-20 md:px-20'>
        <div className='flex flex-col flex-grow-0'>
          <div className='myProfileImg flex flex-1 justify-center'>
            <LazyLoadImage
              effect='blur'
              threshold={300}
              wrapperProps={{
                style: { transitionDelay: '0.3s' }, // Adjust transition delay
              }}
              src={profile2}
              className='profile1'
              width='340'
              height='340'
              alt=''
            />
          </div>
          <div className='mysocialMedia flex flex-col justify-center space-y-4 mx-16 my-10'>
            <div className='flex flex-1 group'>
              <i className='ri-github-fill text-[30px] text-white group-hover:text-pink-700'></i>
              <a
                href='https://github.com/reqbahrf'
                target='_blank'
                className='text-white ps-5 group-hover:text-pink-700'
              >
                GitHub
              </a>
            </div>
            <div className='flex flex-1 group'>
              <i className='ri-figma-fill text-[30px] text-white group-hover:text-pink-700'></i>
              <a
                href='https://www.figma.com/@reanzarthuramon'
                target='_blank'
                className='text-white ps-5 group-hover:text-pink-700'
              >
                Figma
              </a>
            </div>
            <div className='flex flex-1 group'>
              <i className='ri-behance-fill text-[30px] text-white group-hover:text-pink-700'></i>
              <a
                href='https://www.behance.net/reanzamonera'
                target='_blank'
                className='text-white ps-5 group-hover:text-pink-700'
              >
                Behance
              </a>
            </div>
            <div className='flex flex-1 group'>
              <i className='ri-facebook-fill text-[30px] text-white group-hover:text-pink-700'></i>
              <a
                href='https://www.facebook.com/profile.php?id=100008998324688'
                target='_blank'
                className='text-white ps-5 group-hover:text-pink-700'
              >
                Facebook
              </a>
            </div>
            <div className='flex flex-1 group'>
              <i className='ri-instagram-line text-[30px] text-white group-hover:text-pink-700'></i>
              <a
                href='https://www.instagram.com/reanz_arthur/'
                target='_blank'
                className='text-white ps-5 group-hover:text-pink-700'
              >
                Instagram
              </a>
            </div>
            <hr />
            <div className='flex flex-1 group'>
              <i className='ri-mail-fill text-[30px] text-white group-hover:text-pink-700'></i>
              <a
                href='mailto:reqbahrf@gmail.com'
                className='text-white ps-5 group-hover:text-pink-700'
              >
                reqbahrf@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className='intro flex flex-col flex-grow w-auto m-5 sm:m-12 md:m-12'>
          <div className='text-white text-3xl font-semibold my-4'>
            I&apos;m Reanz Arthur Antone Monera
          </div>
          <div className='text-white text-lg mb-7 indent-8 text-justify'>
            I recently graduated with a degree in Information System from Davao
            del Norte State College. Although the BS in Information System
            mainly focuses on designing and proposing systems, a change in our
            curriculum gave me the chance to actually build one too. This shift
            helped me learn and explore web development more, especially through
            our Capstone project, where I developed a web application as a
            full-stack developer.
          </div>
          <div className='text-white text-lg mb-7 indent-8 text-justify'>
            I'm a self-taught web developer and graphic designer. I enjoy
            building websites and apps that look good and work well. I'm now
            looking for job opportunities where I can grow and keep learning
            more about web development.
          </div>
          <div className='text-white text-lg mb-7 indent-8 text-justify'>
            Aside from coding and design, I like editing photos and learning
            about space. Photo editing lets me be creative and focus on small
            details. My interest in space keeps me curious and open to new
            ideas. These hobbies help me stay creative and motivated.
          </div>
          <div className='text-white text-lg mb-7 indent-8 text-justify'>
            I enjoy what I do and I’m always trying to get better at it. I keep
            up with new tools and trends so I can improve my skills and build
            better things.
          </div>
        </div>
      </div>
    </section>
  );
}
