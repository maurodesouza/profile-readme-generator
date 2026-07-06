import { useEffect } from 'react';

import { usePersistedState } from 'hooks';
import { actions, command } from 'lib/command';

export function ThemeHandler() {
  function getSystemTheme() {
    if (typeof window === 'undefined') return 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  const [storedTheme, setTheme] = usePersistedState('theme', getSystemTheme());

  function clearTheme() {
    document.documentElement.classList.forEach(cls => {
      if (cls.startsWith('theme-')) {
        document.documentElement.classList.remove(cls);
      }
    });
  }

  function changeTheme(theme: string) {
    clearTheme();
    document.documentElement.classList.add(`theme-${theme}`);
    setTheme(theme);
  }

  function useTheme(theme: string) {
    changeTheme(theme);
  }

  function getCurrentTheme() {
    return storedTheme || getSystemTheme();
  }

  function toggleTheme() {
    const curTheme = getCurrentTheme();

    const newTheme = curTheme === 'dark' ? 'light' : 'dark';

    actions.theme.use(newTheme);
  }

  useEffect(() => {
    changeTheme(getCurrentTheme());

    const dispose = command.handle('theme.use', useTheme);

    return () => {
      dispose();
    };
  }, []);

  useEffect(() => {
    const dispose = command.handle('theme.toggle', toggleTheme);

    return () => {
      dispose();
    };
  }, [storedTheme]);

  return null;
}
