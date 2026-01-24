import { useThemeContext } from '../context/ThemeContext';
import { RiSunFill, RiMoonFill } from '@remixicon/react';
const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <button
      title='Toggle Theme'
      onClick={toggleTheme}
      className='group hover:text-sage text-obsidian dark:text-clay relative flex items-center justify-center rounded-full px-2 transition-transform duration-300 ease-in-out hover:scale-125'
    >
      {isDarkTheme ? <RiSunFill /> : <RiMoonFill />}
      <span className='nav-bar-text'>Toggle Theme</span>
    </button>
  );
};

export default ThemeToggle;
