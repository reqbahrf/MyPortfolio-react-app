import {
  RiHomeLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFolderLine,
  RiAwardLine,
  RiFacebookBoxFill,
  RiFigmaFill,
} from '@remixicon/react';
import ThemeToggle from './ThemeToggle';

const NavigationBar = () => {
  return (
    <div className='fixed flex justify-center items-center bottom-2 left-0 right-0 z-50'>
      <div className='bg-white/80 dark:bg-black/80 backdrop-blur-lg w-auto rounded-full h-10'>
        <nav
          id='nav-links'
          className='flex justify-center gap-1 hover:gap-2 h-full transition-transform ease-in-out duration-300'
        >
          <a
            href='#Home'
            className='relative group px-2 py-2 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white'
            title='Home'
          >
            <RiHomeLine className='text-xl' />
            <span className='nav-bar-text'>Home</span>
          </a>
          <div className='border-r-zinc-950 dark:border-r-zinc-500 border-r -ms-1'></div>
          <a
            href='#Project'
            className='relative group px-1 py-2 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white'
            title='Projects'
          >
            <RiFolderLine className=' text-xl' />
            <span className='nav-bar-text'>Projects</span>
          </a>
          <a
            href='#Certificates'
            className='relative group px-1 py-2 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white'
            title='Certificates'
          >
            <RiAwardLine className='text-xl' />
            <span className='nav-bar-text'>Certificates</span>
          </a>
          <div className='border-r-zinc-950 dark:border-r-zinc-500 border-r -me-1'></div>
          <a
            href='https://github.com/reqbahrf'
            target='_blank'
            rel='noopener noreferrer'
            className='relative group px-1 py-2 text-gray-800 dark:text-white flex items-center justify-center transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white'
            title='Github'
          >
            <RiGithubFill
              size={25}
              className=' text-xl'
            />
            <span className='nav-bar-text'>Github</span>
          </a>
          <a
            href='https://www.linkedin.com/in/reanz-arthur-monera-b20b89350'
            target='_blank'
            rel='noopener noreferrer'
            className='relative group py-2 px-1 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white'
            title='Linkedin'
          >
            <RiLinkedinBoxFill
              size={25}
              className=' text-xl'
            />
            <span className='nav-bar-text'>Linkedin</span>
          </a>
          <a
            href='https://www.figma.com/@reanzarthuramon'
            target='_blank'
            rel='noopener noreferrer'
            className='relative group py-2 px-1 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white'
            title='Figma'
          >
            <RiFigmaFill
              size={25}
              className=' text-xl'
            />
            <span className='nav-bar-text'>Figma</span>
          </a>
          <a
            href='https://www.facebook.com/reanz.arthur.antone.monera/'
            target='_blank'
            rel='noopener noreferrer'
            className='relative group py-2 px-1 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white'
            title='Facebook'
          >
            <RiFacebookBoxFill
              size={25}
              className=' text-xl'
            />
            <span className='nav-bar-text'>Facebook</span>
          </a>
          <div className='border-r-zinc-950 dark:border-r-zinc-500 border-r -ms-1'></div>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
