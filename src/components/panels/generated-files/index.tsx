import { useEffect } from 'react';

import { Tree } from 'components/ui/primitives/atoms/tree';

import { events } from '@events';
import { parseToReadme } from 'utils';
import { useCanvas, useExtensions, useSettings } from 'hooks';

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
    <div>
      <Tree tree={tree} />
    </div>
  );
};

export { PanelGeneratedFiles };
