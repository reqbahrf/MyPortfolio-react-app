import { useThemeContext } from '../context/ThemeContext';
import { RiSunFill, RiMoonFill } from '@remixicon/react';
const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      title='Toggle Theme'
      onClick={toggleTheme}
      className='relative group px-2 text-gray-800 dark:text-white flex items-center justify-center hover:scale-125 transition-transform ease-in-out duration-300  rounded-full hover:text-pink-700'
    >
      {theme ? <RiSunFill /> : <RiMoonFill />}
      <span className='nav-bar-text'>Toggle Theme</span>
    </button>
  );
};

export default ThemeToggle;
