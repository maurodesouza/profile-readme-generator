import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('UTILS - Dev', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should run the callback in development', async () => {
    vi.stubEnv('NODE_ENV', 'development');

    const { dev } = await import('.');
    const fn = vi.fn();

    dev.run(fn);

    expect(fn).toHaveBeenCalledOnce();
  });

  it('should not run the callback outside development', async () => {
    vi.stubEnv('NODE_ENV', 'production');

    const { dev } = await import('.');
    const fn = vi.fn();

    dev.run(fn);

    expect(fn).not.toHaveBeenCalled();
  });
});
