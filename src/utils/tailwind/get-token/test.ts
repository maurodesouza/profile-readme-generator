import { getToken } from '.';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('UTILS - Get tailwind token', () => {
  const createStyles = (values: Record<string, string>) =>
    ({
      getPropertyValue: (token: string) => values[token] || '',
    }) as CSSStyleDeclaration;

  const original = globalThis.getComputedStyle;

  beforeEach(() => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => createStyles({}))
    );
  });

  afterEach(() => {
    globalThis.getComputedStyle = original;
    vi.restoreAllMocks();
  });

  it('should return the raw value of a css custom property', () => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => createStyles({ '--color': '#ff0000' }))
    );

    expect(getToken('--color')).toBe('#ff0000');
  });

  it('should format px values to a number', () => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => createStyles({ '--size': '24px' }))
    );

    expect(getToken('--size', { formatToNumber: true })).toBe(24);
  });

  it('should format rem values to a number using the html font size', () => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => createStyles({ '--size': '2rem', 'font-size': '10px' }))
    );

    expect(getToken('--size', { formatToNumber: true })).toBe(20);
  });

  it('should return the fallback when the token is not defined', () => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => createStyles({}))
    );

    expect(getToken('--missing', { fallbackReturn: 'fallback' })).toBe(
      'fallback'
    );
  });

  it('should return the fallback when getComputedStyle is unavailable', () => {
    vi.stubGlobal('getComputedStyle', undefined);

    expect(getToken('--color', { fallbackReturn: 'fallback' })).toBe(
      'fallback'
    );
  });

  it('should return the fallback for unsupported formats', () => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => createStyles({ '--size': '1em' }))
    );

    expect(
      getToken('--size', { formatToNumber: true, fallbackReturn: 0 })
    ).toBe(0);
  });

  it('should use the default html font size when font-size is not set', () => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => createStyles({ '--size': '1rem' }))
    );

    expect(getToken('--size', { formatToNumber: true })).toBe(16);
  });
});
