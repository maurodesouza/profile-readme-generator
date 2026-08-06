import { Variants as FramerMotionVariants } from 'framer-motion';

type Variants = {
  [key: string]: FramerMotionVariants | ((args: any) => FramerMotionVariants);
};

const createVariants = <T extends Variants>(obj: T) => obj;

export { createVariants };
