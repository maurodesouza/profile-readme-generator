const copyToClipboard = async (string: string) => {
  await navigator.clipboard.writeText(string);
};

export { copyToClipboard };
