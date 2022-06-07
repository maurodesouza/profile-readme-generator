const debounce =
  (
    fn: (args: unknown) => void,
    wait = 300,
    time?: ReturnType<typeof setTimeout>
  ) =>
  (...args: unknown[]) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));

export { debounce };
