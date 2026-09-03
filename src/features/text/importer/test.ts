import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';
import { defaultTextSectionConfig } from '../default-config';

import { textImporter } from '../importer';

const makeTextElement = ({
  tagName = 'p',
  value = 'Hello',
  align = 'left',
  children,
}: {
  tagName?: string;
  value?: string;
  align?: string;
  children?: unknown[];
} = {}) => ({
  type: 'element',
  tagName,
  properties: { align },
  children: children ?? [{ type: 'text', value }],
});

describe('FEATURE - text importer', () => {
  it('returns null when the input element has no children', () => {
    const element = makeTextElement({ children: [] });

    expect(textImporter(element as any)).toBeNull();
  });

  it('sets content.as to the lowercased tagName of the input element', () => {
    const element = makeTextElement({ tagName: 'H1' });

    const result = textImporter(element as any);

    expect(result?.props.content.as).toBe('h1');
  });

  it('sets content.text to the value of the first text child', () => {
    const element = makeTextElement({ value: 'My text content' });

    const result = textImporter(element as any);

    expect(result?.props.content.text).toBe('My text content');
  });

  it('sets styles.align from the element align property', () => {
    const element = makeTextElement({ align: 'center' });

    const result = textImporter(element as any);

    expect(result?.props.styles.align).toBe('center');
  });

  it('returns a CanvasSection with type Sections.TEXT and a string id', () => {
    const element = makeTextElement();

    const result = textImporter(element as any);

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.TEXT);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('produces independent config objects across calls (no shared references)', () => {
    const element = makeTextElement({ value: 'First' });
    const element2 = makeTextElement({ value: 'Second' });

    const result1 = textImporter(element as any);
    const result2 = textImporter(element2 as any);

    expect(result1?.id).not.toBe(result2?.id);
    expect(result1?.props.content.text).toBe('First');
    expect(result2?.props.content.text).toBe('Second');
    expect(result1?.props).not.toBe(result2?.props);
    expect(result1?.props.content).not.toBe(result2?.props.content);
  });

  it('does not mutate the shared defaultTextSectionConfig', () => {
    const snapshot = structuredClone(defaultTextSectionConfig);

    textImporter(
      makeTextElement({
        tagName: 'h3',
        value: 'Changed',
        align: 'right',
      }) as any
    );
    textImporter(
      makeTextElement({ tagName: 'h2', value: 'Again', align: 'center' }) as any
    );

    expect(defaultTextSectionConfig).toEqual(snapshot);
  });
});
