import { useCallback, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}
const useTheme: () => ThemeContextType = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return (
      localStorage.themeIsDark === 'true' ||
      (!('themeIsDark' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });
  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkTheme) {
      root.classList.add('dark');
      localStorage.themeIsDark = 'true';
    } else {
      root.classList.remove('dark');
      localStorage.themeIsDark = 'false';
    }
  }, [isDarkTheme]);
  const toggleTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.themeIsDark = !isDarkTheme;
  }, [isDarkTheme]);
  return { isDarkTheme, toggleTheme };
};

export default useTheme;
