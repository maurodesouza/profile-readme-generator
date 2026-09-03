import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';
import { defaultActivitiesSectionConfig } from '../default-config';

import { activitiesImporter } from '../importer';

const makeAnchor = (href: string) => ({
  type: 'element',
  tagName: 'a',
  properties: { href },
  children: [],
});

const makeActivitiesElement = ({
  align,
  children,
}: {
  align?: string;
  children?: unknown[];
} = {}) => ({
  type: 'element',
  tagName: 'div',
  properties: align ? { align } : {},
  children: children ?? [
    makeAnchor('https://medium.com/@johndoe/0'),
    makeAnchor('https://medium.com/@johndoe/1'),
  ],
});

describe('FEATURE - activities importer', () => {
  it('returns null when the element has no children', () => {
    expect(
      activitiesImporter(makeActivitiesElement({ children: [] }) as any)
    ).toBeNull();
  });

  it('parses the username from the first anchor href', () => {
    const result = activitiesImporter(
      makeActivitiesElement({
        children: [makeAnchor('https://medium.com/@janedoe/0')],
      }) as any
    );

    expect(result?.props.content.username).toBe('janedoe');
  });

  it('sets content.limit to the number of anchor children', () => {
    const result = activitiesImporter(
      makeActivitiesElement({
        children: [
          makeAnchor('https://medium.com/@johndoe/0'),
          makeAnchor('https://medium.com/@johndoe/1'),
          makeAnchor('https://medium.com/@johndoe/2'),
        ],
      }) as any
    );

    expect(result?.props.content.limit).toBe(3);
  });

  it('reads align from the element properties when present', () => {
    const result = activitiesImporter(
      makeActivitiesElement({ align: 'left' }) as any
    );

    expect(result?.props.styles.align).toBe('left');
  });

  it('defaults align to center when the element has no align property', () => {
    const result = activitiesImporter(makeActivitiesElement() as any);

    expect(result?.props.styles.align).toBe('center');
  });

  it('returns a CanvasSection with type Sections.ACTIVITIES and a string id', () => {
    const result = activitiesImporter(makeActivitiesElement() as any);

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.ACTIVITIES);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('does not mutate the shared defaultActivitiesSectionConfig', () => {
    const snapshot = structuredClone(defaultActivitiesSectionConfig);

    activitiesImporter(
      makeActivitiesElement({
        children: [makeAnchor('https://medium.com/@someone/0')],
        align: 'right',
      }) as any
    );
    activitiesImporter(
      makeActivitiesElement({
        children: [makeAnchor('https://medium.com/@another/0')],
        align: 'left',
      }) as any
    );

    expect(defaultActivitiesSectionConfig).toEqual(snapshot);
  });
});
