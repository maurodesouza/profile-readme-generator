import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { SocialsEditPanel } from '../panel';

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

vi.mock('./tabs', () => ({
  tabs: [
    { label: 'Add', icon: 'plus', view: 'adding' },
    { label: 'Edit', icon: 'edit-2', view: 'editing' },
  ],
  views: {
    adding: () => <div data-testid="view-adding">Adding View</div>,
    editing: () => <div data-testid="view-editing">Editing View</div>,
  },
}));

describe('FEATURE - SocialsEditPanel', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Tabs component with the configured tabs', () => {
    render(<SocialsEditPanel />);

    expect(screen.getByTestId('tabs')).not.toBeNull();
    expect(screen.getByTestId('tab-adding')).not.toBeNull();
    expect(screen.getByTestId('tab-editing')).not.toBeNull();
  });

  it('renders the adding view by default', () => {
    render(<SocialsEditPanel />);

    expect(screen.getByTestId('view-adding')).not.toBeNull();
    expect(screen.queryByTestId('view-editing')).toBeNull();
  });

  it('switches to the editing view when the edit tab is clicked', () => {
    render(<SocialsEditPanel />);

    fireEvent.click(screen.getByTestId('tab-editing'));

    expect(screen.getByTestId('view-editing')).not.toBeNull();
    expect(screen.queryByTestId('view-adding')).toBeNull();
  });
});
