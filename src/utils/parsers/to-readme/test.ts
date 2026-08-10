import { describe, it, expect, vi } from 'vitest';

import { toReadme } from '.';
import { CanvasSection, CanvasStatesEnum, Sections } from '#/types';
import type { TFile } from '#/components/atoms/tree';

vi.mock('html-prettify', () => ({
  default: (html: string) => html,
}));

const makeSection = (
  type: Sections,
  props: Record<string, unknown> = {}
): CanvasSection => ({
  id: '1',
  type,
  props: { content: {}, ...props },
});

const settings = { user: {} };

describe('UTILS - To readme', () => {
  it('should return the file tree with an empty readme when template is empty', () => {
    const tree = toReadme([], undefined, settings);

    expect(tree).toHaveLength(2);
    expect(tree[0].name).toBe('.github/workflows');
    expect(tree[0].files).toEqual([]);
    expect(tree[1].files[0].file).toBe('README.md');
    expect(tree[1].files[0].content).toBe('');
  });

  it('should skip sections in alert state', () => {
    const section = makeSection(Sections.TEXT, {
      state: CanvasStatesEnum.ALERT,
    });

    const tree = toReadme([section], undefined, settings);

    expect(tree[1].files[0].content).toBe('');
  });

  it('should generate the readme with html and separators', () => {
    const parser = { readme: () => '<p>hello</p>' };
    const parsers = { [Sections.TEXT]: { parser } };

    const tree = toReadme([makeSection(Sections.TEXT)], parsers, settings);

    expect(tree[1].files[0].content).toContain('<p>hello</p>');
    expect(tree[1].files[0].content).toContain('###');
  });

  it('should add br clear when styles.clear is set', () => {
    const parser = { readme: () => '<p>hello</p>' };
    const parsers = { [Sections.TEXT]: { parser } };

    const tree = toReadme(
      [makeSection(Sections.TEXT, { styles: { clear: true } })],
      parsers,
      settings
    );

    expect(tree[1].files[0].content).toContain('<br clear="both">');
  });

  it('should generate workflows from parsers', () => {
    const file: TFile = { file: 'ci.yml', content: 'name: CI' };
    const parser = { workflow: () => file };
    const parsers = { [Sections.TEXT]: { parser } };

    const tree = toReadme([makeSection(Sections.TEXT)], parsers, settings);

    expect(tree[0].files).toEqual([file]);
  });

  it('should handle workflow arrays', () => {
    const files: TFile[] = [
      { file: 'a.yml', content: 'a' },
      { file: 'b.yml', content: 'b' },
    ];
    const parser = { workflow: () => files };
    const parsers = { [Sections.TEXT]: { parser } };

    const tree = toReadme([makeSection(Sections.TEXT)], parsers, settings);

    expect(tree[0].files).toEqual(files);
  });

  it('should skip sections without a parser', () => {
    const tree = toReadme([makeSection(Sections.TEXT)], {}, settings);

    expect(tree[1].files[0].content).toBe('');
  });

  it('should skip null or undefined workflows', () => {
    const parser = { workflow: () => null };
    const parsers = { [Sections.TEXT]: { parser } };

    const tree = toReadme([makeSection(Sections.TEXT)], parsers, settings);

    expect(tree[0].files).toEqual([]);
  });
});
