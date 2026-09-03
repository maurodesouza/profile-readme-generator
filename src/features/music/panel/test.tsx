import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { MusicEditPanel } from '../panel';

vi.mock('#/components/organisms/group-fields', () => ({
  GroupFields: ({ id, label }: { id: number; label?: string }) => (
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

vi.mock('#/hooks', () => ({
  useCanvas: () => ({
    $currentSection: { props: { content: { type: 'recently' } } },
  }),
}));

vi.mock('#/utils/object', () => ({
  object: {
    deep: {
      get: vi.fn((obj: any, path: string) => {
        if (path === 'props.content.type') return 'recently';
        return undefined;
      }),
    },
  },
}));

vi.mock('./views', () => ({
  views: {
    recently: () => <div data-testid="view-recently">Recently View</div>,
    currently: () => <div data-testid="view-currently">Currently View</div>,
  },
}));

describe('FEATURE - MusicEditPanel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders groups from panel/fields wrapped in Panel.Scrollable', () => {
    render(<MusicEditPanel />);

    expect(screen.getAllByTestId('panel-scrollable')).toHaveLength(1);
    expect(screen.getAllByTestId('group-fields')).toHaveLength(2);
  });

  it('renders the Type and Layout groups', () => {
    render(<MusicEditPanel />);

    const labels = screen
      .getAllByTestId('group-fields')
      .map(el => el.getAttribute('data-label'));

    expect(labels).toEqual([null, 'Layout']);
  });

  it('renders the active view based on content.type', () => {
    render(<MusicEditPanel />);

    expect(screen.getByTestId('view-recently')).not.toBeNull();
  });
});
