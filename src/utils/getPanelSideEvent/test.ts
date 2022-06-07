import { Events, PanelSide } from 'types';
import { getPanelSideEvent } from '.';

type Input = {
  input: PanelSide;
  expected: Events;
};

describe('UTILS - Get panel side event', () => {
  const inputs: Input[] = [
    {
      input: 'right',
      expected: Events.PANEL_RIGHT_OPEN,
    },
    {
      input: 'left',
      expected: Events.PANEL_LEFT_OPEN,
    },
  ];

  it('should return the correct event name', () => {
    inputs.forEach(input => {
      const result = getPanelSideEvent(input.input);

      expect(result).toBe(input.expected);
    });
  });
});
