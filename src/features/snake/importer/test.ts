import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';
import { defaultSnakeSectionConfig } from '../default-config';

import { snakeImporter } from '../importer';

const makeElement = () => ({
  type: 'element',
  tagName: 'img',
  properties: {
    src: 'https://raw.githubusercontent.com/octocat/octocat/snake-output/snake.svg',
  },
  children: [],
});

describe('FEATURE - snake importer', () => {
  it('returns a CanvasSection with type Sections.SNAKE and a string id', () => {
    const result = snakeImporter(makeElement() as any);

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.SNAKE);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('returns a section even when the element has no children', () => {
    const result = snakeImporter({ ...makeElement(), children: [] } as any);

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.SNAKE);
  });

  it('does not mutate the shared defaultSnakeSectionConfig', () => {
    const snapshot = structuredClone(defaultSnakeSectionConfig);

    snakeImporter(makeElement() as any);
    snakeImporter(makeElement() as any);

    expect(defaultSnakeSectionConfig).toEqual(snapshot);
  });
});
