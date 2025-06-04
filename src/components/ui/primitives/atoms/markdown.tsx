import React from 'react';
import ReactMarkdown, { Options } from 'react-markdown';

export function Markdown(props: React.PropsWithChildren<Options>) {
  return (
    <div className="markdown">
      <ReactMarkdown {...props} />
    </div>
  );
}
