import React from 'react';
import ReactMarkdown from 'react-markdown';

import * as S from './styles';

const Markdown = (
  props: React.PropsWithChildren<ReactMarkdown.ReactMarkdownOptions>
) => {
  return (
    <S.Container>
      <ReactMarkdown {...props} />
    </S.Container>
  );
};

export { Markdown };
