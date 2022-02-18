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
});

export { variants };
