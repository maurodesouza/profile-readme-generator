import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import { BorderSection } from '../section';

vi.mock('#/utils/url', () => ({
  url: {
    getBorder: vi.fn(() => 'https://capsule-render.vercel.app/api?type=waving'),
  },
}));

describe('FEATURE - BorderSection', () => {
  it('renders an img with src from url.getBorder', () => {
    const { container } = render(
      <BorderSection
        content={{
          provider: 'capsule-render',
          borders: { 'capsule-render': { type: 'waving' } },
        }}
        styles={{}}
      />
    );

    const img = container.querySelector('img');

    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe(
      'https://capsule-render.vercel.app/api?type=waving'
    );
  });

  it('renders the container div with class flex', () => {
    const { container } = render(
      <BorderSection
        content={{
          provider: 'capsule-render',
          borders: { 'capsule-render': { type: 'waving' } },
        }}
        styles={{}}
      />
    );

    expect(container.querySelector('.flex')).not.toBeNull();
  });

  it('renders the img with class w-full', () => {
    const { container } = render(
      <BorderSection
        content={{
          provider: 'capsule-render',
          borders: { 'capsule-render': { type: 'waving' } },
        }}
        styles={{}}
      />
    );

    expect(container.querySelector('img')?.className).toContain('w-full');
  });
});
