import { useEffect } from 'react';

import { events } from 'app';
import { Events } from 'types';
import { usePersistedState } from 'hooks';

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

  function useTheme(event: CustomEvent<string>) {
    changeTheme(event.detail);
  }

  function getCurrentTheme() {
    return storedTheme || getSystemTheme();
  }

  function toggleTheme() {
    const curTheme = getCurrentTheme();

    const newTheme = curTheme === 'dark' ? 'light' : 'dark';

    events.theme.use(newTheme);
  }

  useEffect(() => {
    changeTheme(getCurrentTheme());

    events.on(Events.USE_THEME, useTheme);

    return () => {
      events.off(Events.USE_THEME, useTheme);
    };
  }, []);

  useEffect(() => {
    events.on(Events.TOGGLE_THEME, toggleTheme);

    return () => {
      events.off(Events.TOGGLE_THEME, toggleTheme);
    };
  }, [storedTheme]);

  return null;
}
