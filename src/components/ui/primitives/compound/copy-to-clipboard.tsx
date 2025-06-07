import React, { JSX, useEffect, useRef, useState } from 'react';
import { copyToClipboard } from 'utils';

export type CopyChildrenArgs = {
  isCopied: boolean;
  copy: () => void;
};

export type CopyToClipboardProps = {
  content: string;
  onCopy?: () => void;
  resetDelay?: number;
  children: (args: CopyChildrenArgs) => JSX.Element;
};

export function CopyToClipboard(props: CopyToClipboardProps) {
  const { content, resetDelay = 3000, children, onCopy } = props;

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  async function copy() {
    if (isCopied) return;

    try {
      await copyToClipboard(content);

      onCopy?.();

      setIsCopied(true);
      timeoutRef.current = setTimeout(() => setIsCopied(false), resetDelay);
    } catch (err) {
      console.error('Error on coping: ', err);
    }
  }

  useEffect(() => {
    return () => {
      if (!timeoutRef.current) return;

      clearTimeout(timeoutRef.current);
    };
  }, []);

  return <>{children({ isCopied, copy })}</>;
}
