import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';

import { pacmanSectionParser, pacmanWorkflowParser } from '../parser';

vi.mock('#/utils/object', () => ({
  object: {
    toQueryParams: vi.fn((params: Record<string, string>) =>
      Object.entries(params)
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    ),
  },
}));

describe('FEATURE - pacman parser', () => {
  it('emits a picture with data-importer="pacman"', () => {
    const result = pacmanSectionParser({}, {
      user: { github: 'octocat' },
    } as any);

    expect(result).toContain(`data-importer="${Sections.PACMAN}"`);
    expect(result).toContain('<picture');
    expect(result).toContain('</picture>');
  });

  it('builds source and img URLs from settings.user.github', () => {
    const result = pacmanSectionParser({}, {
      user: { github: 'octocat' },
    } as any);

    expect(result).toContain(
      'srcset="https://raw.githubusercontent.com/octocat/octocat/pacman-output/pacman-contribution-graph-dark.svg?game=pacman"'
    );
    expect(result).toContain(
      'src="https://raw.githubusercontent.com/octocat/octocat/pacman-output/pacman-contribution-graph.svg?game=pacman"'
    );
  });

  it('defaults game to pacman when config.game is absent', () => {
    const result = pacmanSectionParser({}, {
      user: { github: 'octocat' },
    } as any);

    expect(result).toContain('pacman-contribution-graph');
  });

  it('uses the provided game when config.game is set', () => {
    const result = pacmanSectionParser({ game: 'breakout' }, {
      user: { github: 'octocat' },
    } as any);

    expect(result).toContain('breakout-contribution-graph');
    expect(result).toContain('game=breakout');
  });

  it('includes dark and light prefers-color-scheme sources', () => {
    const result = pacmanSectionParser({}, {
      user: { github: 'octocat' },
    } as any);

    expect(result).toContain('media="(prefers-color-scheme: dark)"');
    expect(result).toContain('media="(prefers-color-scheme: light)"');
  });

  it('uses "pacman contribution graph" as img alt', () => {
    const result = pacmanSectionParser({}, {
      user: { github: 'octocat' },
    } as any);

    expect(result).toContain('alt="pacman contribution graph"');
  });

  it('pacmanWorkflowParser returns an object with file and content', () => {
    const result = pacmanWorkflowParser({});

    expect(result.file).toBe('arcade.yml');
    expect(typeof result.content).toBe('string');
  });

  it('pacmanWorkflowParser content contains the workflow name', () => {
    const result = pacmanWorkflowParser({});

    expect(result.content).toContain('name: Generate arcade animation');
  });

  it('pacmanWorkflowParser content contains the game value', () => {
    const result = pacmanWorkflowParser({ game: 'galaga' });

    expect(result.content).toContain("games: 'galaga'");
  });

  it('pacmanWorkflowParser defaults game to pacman', () => {
    const result = pacmanWorkflowParser({});

    expect(result.content).toContain("games: 'pacman'");
  });
});
