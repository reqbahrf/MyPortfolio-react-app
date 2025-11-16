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
  external?: boolean;
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
    icon: <RiFolderLine className='text-xl' />,
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
    icon: <RiGithubFill size={25} className='text-xl' />,
    title: 'Github',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/reanz-arthur-monera-b20b89350',
    icon: <RiLinkedinBoxFill size={25} className='text-xl' />,
    title: 'Linkedin',
    external: true,
  },
  {
    href: 'https://www.figma.com/@reanzarthuramon',
    icon: <RiFigmaFill size={25} className='text-xl' />,
    title: 'Figma',
    external: true,
  },
  {
    href: 'https://www.facebook.com/reanz.arthur.antone.monera/',
    icon: <RiFacebookBoxFill size={25} className='text-xl' />,
    title: 'Facebook',
    external: true,
    separator: true,
  },
];

const ANIMATION_CONFIG = {
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
} as const;

const NavIcon: React.FC<NavIconProps> = ({
  href,
  icon,
  title,
  customClass,
  separator,
  external = false,
}) => {
  return (
    <>
      <motion.a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`group relative flex items-center justify-center rounded-full text-gray-800 hover:text-pink-700 dark:text-white ${customClass}`}
        whileHover={{
          ...ANIMATION_CONFIG,
        }}
        whileTap={{
          ...ANIMATION_CONFIG,
          scale: 0.9,
        }}
      >
        {icon}
        <span className='nav-bar-text'>{title}</span>
      </motion.a>
      {separator && (
        <div className='-ms-1 border-r border-r-zinc-950 dark:border-r-zinc-500'></div>
      )}
    </>
  );
};

const NavigationBar = () => {
  return (
    <div className='fixed right-0 bottom-2 left-0 z-50 flex items-center justify-center'>
      <div className='h-14 w-auto rounded-full bg-gray-200/80 px-2 shadow-xs shadow-black/50 backdrop-blur-lg dark:bg-black/70 dark:shadow-pink-500/70'>
        <motion.nav
          id='nav-links'
          className='flex h-full justify-center gap-x-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          {navIcons.map((icon, index) => (
            <NavIcon key={index} {...icon} />
          ))}
          <ThemeToggle />
        </motion.nav>
      </div>
    </div>
  );
};

export default NavigationBar;
