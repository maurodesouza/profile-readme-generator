import { describe, it, expect } from 'vitest';

import { slugify } from '.';

describe('UTILS - Slugify', () => {
  it('should convert spaces to hyphens', () => {
    expect(slugify('Clear float')).toBe('clear-float');
    expect(slugify('Hex color without # (e.g FFFFF)')).toBe(
      'hex-color-without-e-dot-g-fffff'
    );
  });

  it('should convert camelCase to kebab-case', () => {
    expect(slugify('camelCase')).toBe('camel-case');
    expect(slugify('myVariableName')).toBe('my-variable-name');
  });

  it('should convert PascalCase to kebab-case', () => {
    expect(slugify('PascalCase')).toBe('pascal-case');
    expect(slugify('MyComponent')).toBe('my-component');
  });

  it('should convert snake_case to kebab-case', () => {
    expect(slugify('snake_case')).toBe('snake-case');
    expect(slugify('my_variable_name')).toBe('my-variable-name');
  });

  it('should handle consecutive uppercase letters', () => {
    expect(slugify('HTMLElement')).toBe('html-element');
    expect(slugify('XMLParser')).toBe('xml-parser');
  });

  it('should convert __dot__ to -dot- (via dot replacement)', () => {
    // __dot__ becomes . which then becomes -dot-
    expect(slugify('github__dot__workflows')).toBe('github-dot-workflows');
  });

  it('should convert dots to -dot-', () => {
    expect(slugify('config.value')).toBe('config-dot-value');
  });

  it('should remove special characters', () => {
    expect(slugify('hello!@#$%world')).toBe('hello-world');
    expect(slugify('a/b\\c?d=e')).toBe('a-b-c-d-e');
  });

  it('should collapse multiple hyphens into one', () => {
    expect(slugify('a---b')).toBe('a-b');
    expect(slugify('   multiple   spaces   ')).toBe('multiple-spaces');
  });

  it('should trim leading and trailing hyphens', () => {
    expect(slugify('-leading')).toBe('leading');
    expect(slugify('trailing-')).toBe('trailing');
    expect(slugify('---both---')).toBe('both');
  });

  it('should lowercase the result', () => {
    expect(slugify('UPPERCASE')).toBe('uppercase');
    expect(slugify('MiXeDcAsE')).toBe('mi-xe-dc-as-e');
  });

  it('should handle empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('should handle strings that are already slugified', () => {
    expect(slugify('already-slugified')).toBe('already-slugified');
  });

  it('should handle strings with numbers', () => {
    expect(slugify('3d Num')).toBe('3d-num');
    expect(slugify('Synthwave 84')).toBe('synthwave-84');
  });

  it('should handle complex real-world labels from the project', () => {
    expect(slugify('Align X')).toBe('align-x');
    expect(slugify('Font Size')).toBe('font-size');
    expect(slugify('Random Gradient')).toBe('random-gradient');
    expect(slugify('Border radius')).toBe('border-radius');
    expect(slugify('Shows area under the graph')).toBe(
      'shows-area-under-the-graph'
    );
  });
});
