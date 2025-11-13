import { useThemeContext } from '../context/ThemeContext';
import { RiSunFill, RiMoonFill } from '@remixicon/react';
const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      title='Toggle Theme'
      onClick={toggleTheme}
      className='relative group py-2 px-1 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:bg-pink-700 hover:text-white hover:shadow-lg hover:shadow-pink-700/50'
    >
      {theme ? <RiSunFill /> : <RiMoonFill />}
      <span className='nav-bar-text'>Toggle Theme</span>
    </button>
  );
};

export default ThemeToggle;
