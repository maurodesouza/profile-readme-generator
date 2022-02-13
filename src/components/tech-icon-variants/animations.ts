import { createFramerMotionVariants } from 'utils';

const variants = createFramerMotionVariants({
  container: {
    open: {
      y: 0,
      opacity: 1,
      pointerEvents: 'all',

      transition: {
        y: { duration: 0.1 },
      },
    },

    closed: {
      y: 10,
      opacity: 0,
      pointerEvents: 'none',

      transition: {
        duration: false,
      },
    },
  },

  icons_container: (height = 0) => ({
    open: {
      marginTop: 12,
      height,
      transition: { staggerChildren: 0.05, duration: 0.2 },
    },

    closed: {
      marginTop: 0,
      height: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  }),
});

export { variants };
