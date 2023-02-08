import { copyToClipboard } from '.';

Object.assign(navigator, {
  clipboard: {
    writeText: () => null,
  },
});

jest.spyOn(navigator.clipboard, 'writeText');

describe('UTILS - Copy to clip board', () => {
  const input = 'some value';

  beforeAll(() => {
    copyToClipboard(input);
  });

  it('should be called with the correct value', () => {
    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(input);
  });
});
