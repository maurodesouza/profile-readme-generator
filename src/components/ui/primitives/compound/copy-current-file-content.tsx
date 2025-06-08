import React, { JSX, useEffect, useState } from 'react';

import { events } from '@events';
import { Events } from 'types';

import { CopyChildrenArgs, CopyToClipboard } from './copy-to-clipboard';

type CopyCurrentFileContentProps = {
  children: (args: CopyChildrenArgs) => JSX.Element;
};

export function CopyCurrentFileContent(props: CopyCurrentFileContentProps) {
  const [content, setContent] = useState('');

  function onShowContent(event: CustomEvent<string>) {
    setContent(event.detail);
  }

  useEffect(() => {
    events.on(Events.RESULT_SHOW_CONTENT, onShowContent);

    return () => {
      events.off(Events.RESULT_SHOW_CONTENT, onShowContent);
    };
  }, []);

  return <CopyToClipboard content={content}>{props.children}</CopyToClipboard>;
}
