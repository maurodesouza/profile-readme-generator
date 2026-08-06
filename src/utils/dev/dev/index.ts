export const dev = {
  isDev: process.env.NODE_ENV === 'development',

  run: (fn: () => void) => {
    if (dev.isDev) fn();
  },
};
