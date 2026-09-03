import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { createRef } from 'react';

import { useOutsideClick } from './use-outside-click';

describe('HOOK - useOutsideClick', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('attaches mousedown and click listeners when opened is true', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    const ref = createRef<HTMLDivElement>();

    renderHook(() => useOutsideClick(ref, vi.fn(), true));
    vi.advanceTimersByTime(0);

    expect(addSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(addSpy).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('removes listeners when opened is false', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const ref = createRef<HTMLDivElement>();

    renderHook(() => useOutsideClick(ref, vi.fn(), false));
    vi.advanceTimersByTime(0);

    expect(removeSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('invokes the callback when a click is outside all refs', () => {
    const ref = createRef<HTMLDivElement>();
    ref.current = document.createElement('div');
    const callback = vi.fn();

    renderHook(() => useOutsideClick(ref, callback, true));
    vi.advanceTimersByTime(0);

    const outsideNode = document.createElement('span');
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: outsideNode });

    window.dispatchEvent(event);

    expect(callback).toHaveBeenCalledWith(event);
  });

  it('does not invoke the callback when the click is inside the ref', () => {
    const ref = createRef<HTMLDivElement>();
    const innerEl = document.createElement('div');
    ref.current = innerEl;
    const callback = vi.fn();

    renderHook(() => useOutsideClick(ref, callback, true));
    vi.advanceTimersByTime(0);

    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: innerEl });

    window.dispatchEvent(event);

    expect(callback).not.toHaveBeenCalled();
  });

  it('does not invoke the callback when ref.current is null', () => {
    const ref = createRef<HTMLDivElement>();
    const callback = vi.fn();

    renderHook(() => useOutsideClick(ref, callback, true));
    vi.advanceTimersByTime(0);

    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: document.createElement('div'),
    });

    window.dispatchEvent(event);

    expect(callback).not.toHaveBeenCalled();
  });
});
