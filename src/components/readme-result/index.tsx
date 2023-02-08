import { useEffect, useRef, useState } from 'react';
import primsjs from 'prismjs';

import { events } from 'app';
import { Events } from 'types';

import { Tooltip } from 'components';

import { actions } from './actions';
import * as S from './styles';

const ReadmeResult = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState('');

  const handleShowContent = (event: CustomEvent<string>) =>
    setContent(event.detail);

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
    <S.Container ref={containerRef}>
      <S.Actions>
        {actions.map(({ label, icon: Icon, action }, i) => (
          <Tooltip key={i} content={label} position="top">
            <li>
              <S.Action onClick={() => action(content)}>
                <Icon size={16} />
              </S.Action>
            </li>
          </Tooltip>
        ))}
      </S.Actions>

      <pre className={`language-html`}>
        <code className={`language-html`}>{content}</code>
      </pre>
    </S.Container>
  );
};

export { ReadmeResult };
