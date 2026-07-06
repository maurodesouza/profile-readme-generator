import React, { JSX, useEffect, useState } from 'react';

import { command } from 'lib/command';

import { CopyChildrenArgs, CopyToClipboard } from './copy-to-clipboard';

type CopyCurrentFileContentProps = {
  children: (args: CopyChildrenArgs) => JSX.Element;
};

export function CopyCurrentFileContent(props: CopyCurrentFileContentProps) {
  const [content, setContent] = useState('');

  function onShowContent(content: string) {
    setContent(content);
  }

  useEffect(() => {
    const dispose = command.handle('result.show', onShowContent);

    return () => {
      dispose();
    };
  }, []);

  return <CopyToClipboard content={content}>{props.children}</CopyToClipboard>;
}
