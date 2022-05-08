import { useEffect, useRef, useState } from 'react';
import primsjs from 'prismjs';

import { events } from 'app';
import { Events } from 'types';

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
      <pre className={`language-html`}>
        <code className={`language-html`}>{content}</code>
      </pre>
    </S.Container>
  );
};

export { ReadmeResult };
