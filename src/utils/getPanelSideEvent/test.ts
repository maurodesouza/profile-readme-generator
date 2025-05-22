import { Events, PanelSide } from 'types';
import { getPanelSideEvent } from '.';

type Expected = {
  show: Events;
  clear: Events;
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
        show: Events.PANEL_RIGHT_SHOW,
        clear: Events.PANEL_RIGHT_CLEAR,
      },
    },
    {
      input: 'left',
      expected: {
        show: Events.PANEL_LEFT_SHOW,
        clear: Events.PANEL_LEFT_CLEAR,
      },
    },
  ];

  it('should return the correct event name', () => {
    inputs.forEach(input => {
      const result = getPanelSideEvent(input.input);

      expect(result.showEvent).toBe(input.expected.show);
      expect(result.clearEvent).toBe(input.expected.clear);
    });
  });
});
