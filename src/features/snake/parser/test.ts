import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';

import { snakeSectionParser, snakeWorkflowParser } from '../parser';

describe('FEATURE - snake parser', () => {
  it('emits an img with data-importer="snake"', () => {
    const result = snakeSectionParser({}, { user: { github: 'octocat' } } as any);

    expect(result).toContain(`data-importer="${Sections.SNAKE}"`);
    expect(result).toContain('<img');
  });

  it('builds the src URL from settings.user.github', () => {
    const result = snakeSectionParser({}, { user: { github: 'octocat' } } as any);

    expect(result).toContain(
      'src="https://raw.githubusercontent.com/octocat/octocat/snake-output/snake.svg"'
    );
  });

  it('uses "Snake animation" as alt', () => {
    const result = snakeSectionParser({}, { user: { github: 'octocat' } } as any);

    expect(result).toContain('alt="Snake animation"');
  });

  it('ignores the config argument', () => {
    const r1 = snakeSectionParser({}, { user: { github: 'octocat' } } as any);
    const r2 = snakeSectionParser(
      { foo: 'bar' } as any,
      { user: { github: 'octocat' } } as any
    );

    expect(r1).toBe(r2);
  });

  it('snakeWorkflowParser returns an object with file and content', () => {
    const result = snakeWorkflowParser();

    expect(result.file).toBe('snake.yml');
    expect(typeof result.content).toBe('string');
  });

  it('snakeWorkflowParser content contains the workflow name', () => {
    const result = snakeWorkflowParser();

    expect(result.content).toContain('name: Generate snake animation');
  });

  it('snakeWorkflowParser content contains the snake action', () => {
    const result = snakeWorkflowParser();

    expect(result.content).toContain('Platane/snk/svg-only@v3');
  });
});
