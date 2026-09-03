import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import { ActivitiesSection } from '../section';

vi.mock('#/utils/url', () => ({
  url: {
    getActivities: vi.fn((type: string) => `https://example.com/${type}`),
  },
}));

describe('FEATURE - ActivitiesSection', () => {
  it('renders the wrapper div with flex class and justify-content from align', () => {
    const { container } = render(
      <ActivitiesSection
        id="section-1"
        content={{ type: 'medium', limit: 1, username: 'johndoe' }}
        styles={{ align: 'center' }}
      />
    );

    const wrapper = container.querySelector('.flex');

    expect(wrapper).not.toBeNull();
    expect(wrapper?.getAttribute('style')).toContain('justify-content: center');
  });

  it('renders one anchor and one img per post for medium type', () => {
    const { container } = render(
      <ActivitiesSection
        id="section-1"
        content={{ type: 'medium', limit: 2, username: 'johndoe' }}
        styles={{ align: 'center' }}
      />
    );

    expect(container.querySelectorAll('a')).toHaveLength(2);
    expect(container.querySelectorAll('img')).toHaveLength(2);
  });

  it('renders a single img for the default (non-medium) path', () => {
    const { container } = render(
      <ActivitiesSection
        id="section-1"
        content={{ type: 'unknown-type' as any }}
        styles={{ align: 'left' }}
      />
    );

    expect(container.querySelectorAll('a')).toHaveLength(0);
    expect(container.querySelectorAll('img')).toHaveLength(1);
  });
});
