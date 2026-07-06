import { createFramerMotionVariants } from 'utils';

const variants = createFramerMotionVariants({
  icon: {
    open: {
      rotate: 90,
      transition: { duration: 0.2 },
    },

    closed: {
      rotate: 0,

      transition: {
        duration: 0.2,
      },
    },
  },

  fields_container: {
    default: {
      pointerEvents: 'all',
      height: 'auto',
      transition: { staggerChildren: 0.05, duration: 0.2 },
    },

    open: {
      pointerEvents: 'all',
      marginTop: 16,
      height: 'auto',
      transition: { staggerChildren: 0.05, duration: 0.2 },
    },

    closed: {
      pointerEvents: 'none',
      marginTop: 0,
      height: 0,
      transition: {
        duration: 0.1,
        when: 'afterChildren',
      },
    },
  },

  field: {
    open: {
      x: 0,
      opacity: 1,
    },

    closed: {
      x: [0, 0, -10],
      opacity: 0,
      transition: { duration: 0.1 },
    },
  },
});

export { variants };
