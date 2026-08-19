/**
 * Converts a string into a slug key suitable for translation lookup.
 *
 * Handles camelCase, PascalCase, snake_case, spaces and special characters,
 * normalizing them into a kebab-case key.
 */
export function slugify(value: string) {
  return value
    .replace(/__dot__/g, '.')
    .replace(/\./g, '-dot-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
    .replace(/_/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}
