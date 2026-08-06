export function toArray(item: unknown) {
  return Array.isArray(item) ? item : [item];
}
