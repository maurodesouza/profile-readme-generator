import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { ImageEditPanel } from '../panel';

vi.mock('#/components/organisms/group-fields', () => ({
  GroupFields: ({ id, label }: { id: number; label: string }) => (
    <div data-testid="group-fields" data-group-id={id} data-label={label} />
  ),
}));

describe('FEATURE - ImageEditPanel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders one GroupFields per group defined in panel/fields', () => {
    render(<ImageEditPanel />);

    const groups = screen.getAllByTestId('group-fields');

    expect(groups).toHaveLength(2);
  });

  it('renders the Layout and Content groups', () => {
    render(<ImageEditPanel />);

    const labels = screen
      .getAllByTestId('group-fields')
      .map(el => el.getAttribute('data-label'));

    expect(labels).toContain('Layout');
  });
});
