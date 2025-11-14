import { useCallback, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: boolean;
  toggleTheme: () => void;
}
const useTheme: () => ThemeContextType = () => {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.themeIsDark === 'true' ||
      (!('themeIsDark' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme) {
      root.classList.add('dark');
      localStorage.themeIsDark = 'true';
    } else {
      root.classList.remove('dark');
      localStorage.themeIsDark = 'false';
    }
  }, [theme]);
  const toggleTheme = useCallback(() => {
    setTheme(!theme);
    localStorage.themeIsDark = !theme;
  }, [theme]);
  return { theme, toggleTheme };
};

export default useTheme;
