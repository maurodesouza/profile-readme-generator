import { framer } from '#/utils/framer';

const variants = framer.createVariants({
  container: {
    open: {
      transition: { staggerChildren: 0.05, duration: 0.2 },
    },

    closed: {},
  },
});

export { variants };
