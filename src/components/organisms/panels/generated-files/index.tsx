'use client';

import { parsers } from '#/utils/parsers';
import { observer } from 'mobx-react-lite';

import { useEffect, useMemo, useState } from 'react';

import { Tree } from '#/components/atoms/tree';
import { TFile, TFolder } from '#/components/atoms/tree';

import { actions, command } from '#/lib/command';

import { useCanvas, useExtensions, useSettings } from '#/hooks';

const WORKFLOWS_FOLDER = '.github/workflows';
const WORKFLOWS_CLASS = 'palette-warning text-palette-accent';

export const PanelGeneratedFiles = observer(function PanelGeneratedFiles() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const canvasStore = useCanvas();
  const settingsStore = useSettings();
  const extensionsStore = useExtensions();

  const generatedTree = useMemo(
    () =>
      parsers.toReadme(
        canvasStore.sections,
        extensionsStore.extensions.sections,
        settingsStore.$settings
      ),
    [
      canvasStore.sections,
      extensionsStore.extensions.sections,
      settingsStore.$settings,
    ]
  );

  const tree = useMemo((): TFolder[] => {
    if (!isHighlighted) return generatedTree;

    return generatedTree.map((folder): TFolder => {
      if (folder.name !== WORKFLOWS_FOLDER) return folder;

      const highlightedFiles = folder.files.map(
        (file): TFile => ({
          ...file,
          className: WORKFLOWS_CLASS,
        })
      );

      return {
        ...folder,
        className: WORKFLOWS_CLASS,
        files: highlightedFiles,
      };
    });
  }, [isHighlighted]);

  useEffect(() => {
    const content = tree[1].files[0].content;

    window.setTimeout(() => actions.result.show(content), 0);
  }, []);

  useEffect(() => {
    const disposeHighlight = command.handle(
      'generated.workflows.highlight',
      () => setIsHighlighted(true)
    );
    const disposeUnhighlight = command.handle(
      'generated.workflows.unhighlight',
      () => setIsHighlighted(false)
    );

    return () => {
      disposeHighlight();
      disposeUnhighlight();
    };
  }, []);

  return (
    <div data-testid="generated-files">
      <Tree tree={tree} />
    </div>
  );
});
