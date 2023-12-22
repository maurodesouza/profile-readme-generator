import { createFramerMotionVariants } from 'utils';

const variants = createFramerMotionVariants({
  container: {
    open: {
      transition: { staggerChildren: 0.05, duration: 0.2 },
    },

    closed: {},
  },
});

export { variants };
