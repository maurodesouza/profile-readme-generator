import { createFramerMotionVariants } from '.';

describe('UTILS - Create framer motion variants', () => {
  const inputs = [
    {
      arg1: 'some1',
      arg2: 'some2',
      arg3: 'some3',
    },
    'some string',
    100,
  ] as any[];

  it('should return the value that is passed as an argument', () => {
    inputs.forEach(input => {
      const result = createFramerMotionVariants(input);

      expect(result).toStrictEqual(input);
    });
  });
});
