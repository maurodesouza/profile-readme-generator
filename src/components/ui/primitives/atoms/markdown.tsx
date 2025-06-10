import React from 'react';
import ReactMarkdown, { Components, Options } from 'react-markdown';

const components: Components = {
  a: props => {
    return <a target="_blank" rel="noreferrer" {...props}></a>;
  },
};

export function Markdown(props: React.PropsWithChildren<Options>) {
  return (
    <div className="markdown">
      <ReactMarkdown components={components} {...props} />
    </div>
  );
}
