import { useEffect, useRef } from 'react';
import primsjs from 'prismjs';

import { readmeGenerator } from 'generators';
import { useCanvas, useSettings } from 'hooks';

import * as S from './styles';

const ReadmeResult = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { sections } = useCanvas();
  const { settings } = useSettings();

  const readme = readmeGenerator(sections, settings);

  useEffect(() => {
    primsjs.highlightAllUnder(containerRef.current!);
  }, []);

  return (
    <S.Container ref={containerRef}>
      <pre className={`language-html`}>
        <code className={`language-html`}>{readme}</code>
      </pre>
    </S.Container>
  );
};

export { ReadmeResult };
