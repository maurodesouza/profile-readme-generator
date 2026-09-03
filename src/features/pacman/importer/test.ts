import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';
import { defaultPacmanSectionConfig } from '../default-config';

import { pacmanImporter } from '../importer';

const makeImg = (src?: string) => ({
  type: 'element',
  tagName: 'img',
  properties: src ? { src } : {},
  children: [],
});

const makePicture = (children?: unknown[]) => ({
  type: 'element',
  tagName: 'picture',
  properties: {},
  children: children ?? [
    makeImg(
      'https://raw.githubusercontent.com/octocat/octocat/pacman-output/pacman-contribution-graph.svg?game=pacman'
    ),
  ],
});

describe('FEATURE - pacman importer', () => {
  it('returns null when no img child with src is found', () => {
    expect(pacmanImporter(makePicture([makeImg()]) as any)).toBeNull();
  });

  it('returns null when the picture has no children', () => {
    expect(pacmanImporter(makePicture([]) as any)).toBeNull();
  });

  it('returns a CanvasSection with type Sections.PACMAN and a string id', () => {
    const result = pacmanImporter(makePicture() as any);

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.PACMAN);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('extracts game from the img src query params', () => {
    const result = pacmanImporter(
      makePicture([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/pacman-output/breakout-contribution-graph.svg?game=breakout'
        ),
      ]) as any
    );

    expect(result?.props.game).toBe('breakout');
  });

  it('keeps the default game when query param is absent', () => {
    const result = pacmanImporter(
      makePicture([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/pacman-output/pacman-contribution-graph.svg'
        ),
      ]) as any
    );

    expect(result?.props.game).toBe('pacman');
  });

  it('does not mutate the shared defaultPacmanSectionConfig', () => {
    const snapshot = structuredClone(defaultPacmanSectionConfig);

    pacmanImporter(
      makePicture([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/pacman-output/breakout-contribution-graph.svg?game=breakout'
        ),
      ]) as any
    );

    expect(defaultPacmanSectionConfig).toEqual(snapshot);
  });
});
