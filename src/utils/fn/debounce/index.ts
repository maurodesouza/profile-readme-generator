export function debounce(
  fn: (args: unknown) => void,
  wait = 300,
  time?: ReturnType<typeof setTimeout>
) {
  return function (...args: unknown[]) {
    //@ts-ignore
    return clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));
  };
}
