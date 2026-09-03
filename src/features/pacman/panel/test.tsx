import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { PacmanPanel } from '../panel';

vi.mock('#/components/organisms/group-fields', () => ({
  GroupFields: ({ id, label }: { id: number; label?: string }) => (
    <div data-testid="group-fields" data-group-id={id} data-label={label} />
  ),
}));

describe('FEATURE - PacmanPanel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders one GroupFields per group defined in panel/fields', () => {
    render(<PacmanPanel />);

    const groups = screen.getAllByTestId('group-fields');

    expect(groups).toHaveLength(1);
  });

  it('renders the single group with an empty label', () => {
    render(<PacmanPanel />);

    const group = screen.getByTestId('group-fields');

    expect(group.getAttribute('data-group-id')).toBe('1');
    expect(group.getAttribute('data-label')).toBe('');
  });
});
