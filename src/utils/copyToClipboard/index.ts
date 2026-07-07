const copyToClipboard = async (string: string) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(string);
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = string;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (!successful) {
        throw new Error('execCommand copy was unsuccessful');
      }
    } catch (err) {
      console.error('Fallback copy failed', err);
      throw err;
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

export { copyToClipboard };
