import { useEffect } from 'react';

import { Tree } from 'components';
import { useCanvas, useExtensions, useSettings } from 'hooks';

import { events } from 'app';
import { parseToReadme } from 'utils';

import * as S from './styles';

const PanelGeneratedFiles = () => {
  const { sections } = useCanvas();
  const { settings } = useSettings();
  const { extensions } = useExtensions();

  const tree = parseToReadme(sections, extensions.sections, settings);

  useEffect(() => {
    const content = tree[1].files[0].content;

    window.setTimeout(() => events.result.show(content), 0);
  }, []);

  return (
    <S.Container>
      <Tree tree={tree} />
    </S.Container>
  );
};

export { PanelGeneratedFiles };
