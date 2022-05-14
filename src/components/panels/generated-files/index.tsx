import { useEffect } from 'react';
import { readmeGenerator, workflowsGenerator } from 'generators';

import { Tree } from 'components';

import { useCanvas, useSettings } from 'hooks';
import { events } from 'app';

import * as S from './styles';

const PanelGeneratedFiles = () => {
  const { sections } = useCanvas();
  const { settings } = useSettings();

  const readme = readmeGenerator(sections, settings);
  const workflows = workflowsGenerator(sections);

  const tree = [workflows, readme];

  useEffect(() => {
    const content = readme.files[0].content;

    window.setTimeout(() => events.result.show(content), 0);
  }, []);

  return (
    <S.Container>
      <Tree tree={tree} />
    </S.Container>
  );
};

export { PanelGeneratedFiles };
