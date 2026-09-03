import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { ProfileViewsPanel } from '../panel';

vi.mock('#/components/organisms/group-fields', () => ({
  GroupFields: ({ id, label }: { id: number; label: string }) => (
    <div data-testid="group-fields" data-group-id={id} data-label={label} />
  ),
}));

vi.mock('#/components/organisms/panel', () => {
  const Panel = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="panel">{children}</div>
  );
  Panel.Scrollable = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="panel-scrollable">{children}</div>
  );
  return { Panel };
});

describe('FEATURE - ProfileViewsPanel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders one GroupFields per group defined in panel/fields', () => {
    render(<ProfileViewsPanel />);

    const groups = screen.getAllByTestId('group-fields');

    expect(groups).toHaveLength(4);
  });

  it('wraps groups in Panel.Scrollable', () => {
    render(<ProfileViewsPanel />);

    expect(screen.getAllByTestId('panel-scrollable')).toHaveLength(1);
  });
});
