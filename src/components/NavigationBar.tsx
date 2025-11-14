import {
  RiHomeLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFolderLine,
  RiAwardLine,
  RiFacebookBoxFill,
  RiFigmaFill,
} from '@remixicon/react';
import { motion } from 'motion/react';
import ThemeToggle from './ThemeToggle';

interface NavIconProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  separator?: boolean;
  customClass?: string;
}

const navIcons: NavIconProps[] = [
  {
    href: '#Home',
    icon: <RiHomeLine className='text-xl' />,
    title: 'Home',
    customClass: 'px-2',
    separator: true,
  },
  {
    href: '#Project',
    icon: <RiFolderLine className=' text-xl' />,
    title: 'Projects',
  },
  {
    href: '#Certificates',
    icon: <RiAwardLine className='text-xl' />,
    title: 'Certificates',
    separator: true,
  },
  {
    href: 'https://github.com/reqbahrf',
    icon: (
      <RiGithubFill
        size={25}
        className=' text-xl'
      />
    ),
    title: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/reanz-arthur-monera-b20b89350',
    icon: (
      <RiLinkedinBoxFill
        size={25}
        className=' text-xl'
      />
    ),
    title: 'Linkedin',
  },
  {
    href: 'https://www.figma.com/@reanzarthuramon',
    icon: (
      <RiFigmaFill
        size={25}
        className=' text-xl'
      />
    ),
    title: 'Figma',
  },
  {
    href: 'https://www.facebook.com/reanz.arthur.antone.monera/',
    icon: (
      <RiFacebookBoxFill
        size={25}
        className=' text-xl'
      />
    ),
    title: 'Facebook',
    separator: true,
  },
];

const NavIcon: React.FC<NavIconProps> = ({
  href,
  icon,
  title,
  customClass,
  separator,
}) => {
  return (
    <>
      <motion.a
        href={href}
        className={`relative group text-gray-800 dark:text-white flex items-center justify-center rounded-full hover:text-pink-700 ${customClass}`}
        whileHover={{
          scale: 1.25,
          marginRight: '0.2rem',
          marginLeft: '0.2rem',
          marginBottom: '0.5rem',
          transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10,
            duration: 0.9,
          },
        }}
      >
        {icon}
        <span className='nav-bar-text'>{title}</span>
      </motion.a>
      {separator && (
        <div className='border-r-zinc-950 dark:border-r-zinc-500 border-r -ms-1'></div>
      )}
    </>
  );
};

const NavigationBar = () => {
  return (
    <div className='fixed flex justify-center items-center bottom-2 left-0 right-0 z-50'>
      <div className='bg-gray-200/80 dark:bg-black/70 backdrop-blur-lg w-auto rounded-full h-14 px-2 shadow-xs dark:shadow-pink-500/70 shadow-black/50'>
        <motion.nav
          id='nav-links'
          className='flex justify-center gap-x-2 h-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          {navIcons.map((icon, index) => (
            <NavIcon
              key={index}
              href={icon.href}
              icon={icon.icon}
              title={icon.title}
              customClass={icon.customClass}
              separator={icon.separator}
            />
          ))}
          <ThemeToggle />
        </motion.nav>
      </div>
    </div>
  );
};

export default NavigationBar;
