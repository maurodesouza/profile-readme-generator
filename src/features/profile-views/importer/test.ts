import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';

import { profileViewsImporter } from '../importer';

const makeImgElement = (src: string, align?: string) => ({
  type: 'element',
  tagName: 'img',
  properties: { src, ...(align ? { align } : {}) },
});

const makeDivElement = (children: any[], align?: string) => ({
  type: 'element',
  tagName: 'div',
  properties: align ? { align } : {},
  children,
});

describe('FEATURE - profile-views importer', () => {
  it('returns null when div has no img children with src', () => {
    expect(
      profileViewsImporter(
        makeDivElement([
          { type: 'element', tagName: 'span', properties: {} },
          { type: 'element', tagName: 'img', properties: {} },
        ]) as any
      )
    ).toBeNull();
  });

  it('treats the element itself as a single image when tagName is not div', () => {
    const result = profileViewsImporter(
      makeImgElement(
        'https://profile-counter.laobi.com/?page_id=test.test&'
      ) as any
    );

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.PROFILE_VIEWS);
  });

  it('processes getloli params when src contains getloli', () => {
    const result = profileViewsImporter(
      makeImgElement(
        'https://api.getloli.com/@:test?padding=15&scale=2.5&align=bottom&theme=custom'
      ) as any
    );

    expect(result?.props.content.provider).toBe('getloli');
    expect(result?.props.content.views.getloli.padding).toBe(15);
    expect(result?.props.content.views.getloli.scale).toBe(2.5);
    expect(result?.props.content.views.getloli.align).toBe('bottom');
    expect(result?.props.content.views.getloli.theme).toBe('custom');
  });

  it('processes laobi params when src contains laobi', () => {
    const result = profileViewsImporter(
      makeImgElement(
        'https://profile-counter.laobi.com/?page_id=test.test&left_color=FF0000&right_color=00FF00&left_text=Visitors'
      ) as any
    );

    expect(result?.props.content.provider).toBe('laobi');
    expect(result?.props.content.views.laobi.left_color).toBe('FF0000');
    expect(result?.props.content.views.laobi.right_color).toBe('00FF00');
    expect(result?.props.content.views.laobi.left_text).toBe('Visitors');
  });

  it('sets styles.float from the element align property', () => {
    const result = profileViewsImporter(
      makeImgElement('https://api.getloli.com/@:test?', 'left') as any
    );

    expect(result?.props.styles.float).toBe('left');
  });

  it('defaults styles.float to none when align is not provided', () => {
    const result = profileViewsImporter(
      makeImgElement('https://api.getloli.com/@:test?') as any
    );

    expect(result?.props.styles.float).toBe('none');
  });

  it('returns a CanvasSection with type Sections.PROFILE_VIEWS and a string id', () => {
    const result = profileViewsImporter(
      makeImgElement('https://api.getloli.com/@:test?') as any
    );

    expect(result?.type).toBe(Sections.PROFILE_VIEWS);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('filters div children for img elements with src', () => {
    const result = profileViewsImporter(
      makeDivElement([
        { type: 'element', tagName: 'span', properties: {} },
        makeImgElement('https://api.getloli.com/@:test?padding=10'),
      ]) as any
    );

    expect(result).not.toBeNull();
    expect(result?.props.content.views.getloli.padding).toBe(10);
  });
});
