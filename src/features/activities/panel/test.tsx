import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { ActivitiesEditPanel } from '../panel';

vi.mock('#/components/organisms/group-fields', () => ({
  GroupFields: ({ id, label }: { id: number; label?: string }) => (
    <div data-testid="group-fields" data-group-id={id} data-label={label} />
  ),
}));

describe('FEATURE - ActivitiesEditPanel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders one GroupFields per group defined in panel/fields', () => {
    render(<ActivitiesEditPanel />);

    const groups = screen.getAllByTestId('group-fields');

    expect(groups).toHaveLength(3);
  });

  it('renders the Origin, Layout, and Medium options groups', () => {
    render(<ActivitiesEditPanel />);

    const labels = screen
      .getAllByTestId('group-fields')
      .map(el => el.getAttribute('data-label'));

    expect(labels).toEqual([null, 'Layout', 'Medium options']);
  });
});
