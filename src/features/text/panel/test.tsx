import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { TextEditPanel } from '../panel';

vi.mock('#/components/organisms/group-fields', () => ({
  GroupFields: ({ id, label }: { id: number; label: string }) => (
    <div data-testid="group-fields" data-group-id={id} data-label={label} />
  ),
}));

describe('FEATURE - TextEditPanel', () => {
  it('renders one GroupFields per group defined in panel/fields', () => {
    render(<TextEditPanel />);

    const groups = screen.getAllByTestId('group-fields');

    expect(groups).toHaveLength(2);
  });

  it('renders the Layout group with id 1', () => {
    render(<TextEditPanel />);

    const layoutGroup = screen
      .getAllByTestId('group-fields')
      .find(el => el.getAttribute('data-label') === 'Layout');

    expect(layoutGroup).toBeDefined();
    expect(layoutGroup?.getAttribute('data-group-id')).toBe('1');
  });

  it('renders the Content group with id 2', () => {
    render(<TextEditPanel />);

    const contentGroup = screen
      .getAllByTestId('group-fields')
      .find(el => el.getAttribute('data-label') === 'Content');

    expect(contentGroup).toBeDefined();
    expect(contentGroup?.getAttribute('data-group-id')).toBe('2');
  });
});
