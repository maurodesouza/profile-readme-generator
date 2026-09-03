import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { TextSection } from '../section';

describe('FEATURE - TextSection', () => {
  it('renders a p tag when content.as is p', () => {
    const { container } = render(
      <TextSection
        content={{ text: 'Hello World', as: 'p' }}
        styles={{ align: 'left' }}
      />
    );

    const tag = container.querySelector('p');

    expect(tag).not.toBeNull();
    expect(tag?.textContent).toBe('Hello World');
  });

  it('renders an h1 tag when content.as is h1', () => {
    const { container } = render(
      <TextSection
        content={{ text: 'Title', as: 'h1' }}
        styles={{ align: 'center' }}
      />
    );

    const tag = container.querySelector('h1');

    expect(tag).not.toBeNull();
    expect(tag?.textContent).toBe('Title');
    expect(container.querySelector('p')).toBeNull();
  });

  it('trims leading and trailing whitespace from content.text', () => {
    const { container } = render(
      <TextSection
        content={{ text: '   Hello World   ', as: 'p' }}
        styles={{ align: 'left' }}
      />
    );

    expect(container.querySelector('p')?.textContent).toBe('Hello World');
  });

  it('applies textAlign inline style from styles.align for left, center and right', () => {
    const cases = ['left', 'center', 'right'] as const;

    for (const align of cases) {
      const { container } = render(
        <TextSection content={{ text: 'Hello', as: 'p' }} styles={{ align }} />
      );

      expect(container.querySelector('p')?.style.textAlign).toBe(align);
    }
  });

  it('renders the container div with the text-section class', () => {
    const { container } = render(
      <TextSection
        content={{ text: 'Hello', as: 'p' }}
        styles={{ align: 'left' }}
      />
    );

    expect(container.querySelector('.text-section')).not.toBeNull();
  });
});
