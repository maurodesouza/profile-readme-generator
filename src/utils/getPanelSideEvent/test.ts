import { Events, PanelSide } from 'types';
import { getPanelSideEvent } from '.';

type Expected = {
  open: Events;
  close: Events;
};

type Input = {
  input: PanelSide;
  expected: Expected;
};

describe('UTILS - Get panel side event', () => {
  const inputs: Input[] = [
    {
      input: 'right',
      expected: {
        open: Events.PANEL_RIGHT_OPEN,
        close: Events.PANEL_RIGHT_CLOSE,
      },
    },
    {
      input: 'left',
      expected: {
        open: Events.PANEL_LEFT_OPEN,
        close: Events.PANEL_LEFT_CLOSE,
      },
    },
  ];

  it('should return the correct event name', () => {
    inputs.forEach(input => {
      const result = getPanelSideEvent(input.input);

      expect(result.openEvent).toBe(input.expected.open);
      expect(result.closeEvent).toBe(input.expected.close);
    });
  });
});
