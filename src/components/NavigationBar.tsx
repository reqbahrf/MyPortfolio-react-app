import {
  RiHomeLine,
  RiUserLine,
  RiFolderLine,
  RiAwardLine,
} from '@remixicon/react';

const NavigationBar = () => {
  return (
    <div className='fixed flex justify-center items-center bottom-2 left-0 right-0 z-50'>
      <div className='bg-white/80 backdrop-blur-lg w-[95dvw] md:w-auto rounded-full h-10'>
        <nav
          id='nav-links'
          className='flex justify-center gap-2 sm:gap-4 md:gap-6 h-full'
        >
          <a
            href='#Home'
            className='relative group hover:text-pink-700 px-4 py-2 text-gray-800 flex items-center justify-center hover:scale-125 transition-all'
            title='Home'
          >
            <RiHomeLine className='ri-home-line text-xl' />
            <span className='nav-bar-text'>Home</span>
          </a>
          <div className='border-r-zinc-950 border-r -ms-7'></div>
          <a
            href='#About'
            className='relative group hover:text-pink-700 px-2 py-2 text-gray-800 flex items-center justify-center hover:scale-125 transition-all'
            title='About'
          >
            <RiUserLine className='ri-user-line text-xl' />
            <span className='nav-bar-text'>About</span>
          </a>
          <a
            href='#Project'
            className='relative group hover:text-pink-700 px-2 py-2 text-gray-800 flex items-center justify-center hover:scale-125 transition-all'
            title='Projects'
          >
            <RiFolderLine className='ri-folder-line text-xl' />
            <span className='nav-bar-text'>Projects</span>
          </a>
          <a
            href='#Certificates'
            className='relative group hover:text-pink-700 px-2 py-2 text-gray-800 flex items-center justify-center hover:scale-125 transition-all'
            title='Certificates'
          >
            <RiAwardLine className='ri-award-line text-xl' />
            <span className='nav-bar-text'>Certificates</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
