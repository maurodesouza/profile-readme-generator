import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { StatsEditPanel } from '../panel';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: vi.fn(),
  }),
  usePathname: () => '/test',
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('#/components/atoms/tabs', () => ({
  Tabs: ({
    tabs,
    currentTab,
    setCurrentTab,
  }: {
    tabs: { label: string; view: string }[];
    currentTab: string;
    setCurrentTab: (tab: string) => void;
  }) => (
    <div data-testid="tabs">
      {tabs.map(tab => (
        <button
          key={tab.view}
          data-testid={`tab-${tab.view}`}
          data-active={currentTab === tab.view}
          onClick={() => setCurrentTab(tab.view)}
        >
          {tab.label}
        </button>
      ))}
    </div>
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

vi.mock('./tabs', () => ({
  tabs: [
    { label: 'Layout', icon: 'layout', view: 'layout' },
    { label: 'Config Stats', icon: 'settings', view: 'config' },
  ],
  views: {
    layout: () => <div data-testid="view-layout">Layout View</div>,
    config: () => <div data-testid="view-config">Config View</div>,
  },
}));

describe('FEATURE - StatsEditPanel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Tabs component with the configured tabs', () => {
    render(<StatsEditPanel />);

    expect(screen.getByTestId('tabs')).not.toBeNull();
    expect(screen.getByTestId('tab-layout')).not.toBeNull();
    expect(screen.getByTestId('tab-config')).not.toBeNull();
  });

  it('renders the layout view by default', () => {
    render(<StatsEditPanel />);

    expect(screen.getByTestId('view-layout')).not.toBeNull();
    expect(screen.queryByTestId('view-config')).toBeNull();
  });

  it('wraps the view in Panel.Scrollable', () => {
    render(<StatsEditPanel />);

    expect(screen.getAllByTestId('panel-scrollable')).toHaveLength(1);
  });

  it('switches to the config view when the config tab is clicked', () => {
    render(<StatsEditPanel />);

    fireEvent.click(screen.getByTestId('tab-config'));

    expect(screen.getByTestId('view-config')).not.toBeNull();
    expect(screen.queryByTestId('view-layout')).toBeNull();
  });
});
