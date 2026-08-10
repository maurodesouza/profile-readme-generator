import { clipboard } from '.';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('UTILS - Copy to clipboard', () => {
  const input = 'some value';

  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should use navigator.clipboard when available', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    await clipboard(input);

    expect(writeText).toHaveBeenCalledOnce();
    expect(writeText).toHaveBeenCalledWith(input);
  });

  it('should fallback to document.execCommand', async () => {
    Object.assign(navigator, { clipboard: undefined });
    const execCommand = vi.fn().mockReturnValue(true);
    document.execCommand = execCommand as typeof document.execCommand;

    await clipboard(input);

    expect(execCommand).toHaveBeenCalledOnce();
    expect(execCommand).toHaveBeenCalledWith('copy');
  });

  it('should throw when execCommand is unsuccessful', async () => {
    Object.assign(navigator, { clipboard: undefined });
    const execCommand = vi.fn().mockReturnValue(false);
    document.execCommand = execCommand as typeof document.execCommand;

    await expect(clipboard(input)).rejects.toThrow(
      'execCommand copy was unsuccessful'
    );
    expect(execCommand).toHaveBeenCalledOnce();
  });
});
