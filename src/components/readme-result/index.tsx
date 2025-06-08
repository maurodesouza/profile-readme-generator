import { useEffect, useRef, useState } from 'react';
import primsjs from 'prismjs';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { Tooltip } from 'components/ui/primitives/atoms/tooltip';
import { Clickable } from 'components/ui/primitives/atoms/clickable';
import { CopyCurrentFileContent } from 'components/ui/primitives/compound/copy-current-file-content';

import { events } from '@events';
import { Events } from 'types';

export function ReadmeResult() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState('');

  function handleShowContent(event: CustomEvent<string>) {
    setContent(event.detail);
  }

  useEffect(() => {
    primsjs.highlightAllUnder(containerRef.current!);
  }, [content]);

  useEffect(() => {
    events.on(Events.RESULT_SHOW_CONTENT, handleShowContent);

    return () => {
      events.off(Events.RESULT_SHOW_CONTENT, handleShowContent);
    };
  }, []);

  return (
    <div ref={containerRef} className="code w-0">
      <ul className="absolute top-xl right-xl flex bg-background-default">
        <CopyCurrentFileContent>
          {({ copy, isCopied }) => {
            return (
              <Tooltip
                key={String(isCopied)}
                content={isCopied ? 'Copied' : 'Copy File Content'}
                position="top"
              >
                <Clickable.Button
                  onClick={copy}
                  size="icon"
                  variant="icon"
                  className="box-border !rounded-full"
                >
                  <Icon name={isCopied ? 'check' : 'copy'} />
                </Clickable.Button>
              </Tooltip>
            );
          }}
        </CopyCurrentFileContent>
      </ul>

      <pre className={`language-html`}>
        <code className={`language-html`}>{content}</code>
      </pre>
    </div>
  );
}
