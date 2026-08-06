import { Variants as FramerMotionVariants } from 'framer-motion';

type Variants = {
  [key: string]: FramerMotionVariants | ((args: any) => FramerMotionVariants);
};

export function createVariants<T extends Variants>(obj: T) {
  return obj;
}
