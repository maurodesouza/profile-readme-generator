import { Variants as FramerMotionVariants } from 'framer-motion';

type Variants = {
  [key: string]: FramerMotionVariants | ((args: any) => FramerMotionVariants);
};

const createFramerMotionVariants = <T extends Variants>(obj: T) => obj;

export { createFramerMotionVariants };
