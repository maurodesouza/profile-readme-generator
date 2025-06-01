import { useEffect, useRef, useState } from 'react';
import primsjs from 'prismjs';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { Tooltip } from 'components/ui/primitives/atoms/tooltip';
import { Clickable } from 'components/ui/primitives/atoms/clickable';

import { events } from 'app';
import { Events } from 'types';

import { actions } from './actions';

export function ReadmeResult() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [labelVal, setLabelVal] = useState('Copy');
  const [content, setContent] = useState('');

  function handleShowContent(event: CustomEvent<string>) {
    setContent(event.detail);
  }

  function handleUpdateLabel() {
    setLabelVal('Copied!');

    setTimeout(() => {
      setLabelVal('Copy');
    }, 3000);
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
        {actions.map(({ icon, action }, i) => (
          <Tooltip key={i} content={labelVal} position="top">
            <li>
              <Clickable.Button
                size="icon"
                variant="icon"
                className="box-border !rounded-full"
                onClick={() => {
                  action(content);
                  handleUpdateLabel();
                }}
              >
                <Icon name={icon} />
              </Clickable.Button>
            </li>
          </Tooltip>
        ))}
      </ul>

      <pre className={`language-html`}>
        <code className={`language-html`}>{content}</code>
      </pre>
    </div>
  );
}
