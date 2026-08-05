import { observer } from 'mobx-react-lite';

import { useMemo } from 'react';
import { Reorder } from 'framer-motion';

import { OnlyClientSide } from '#/components/helpers/only-client-side';

import { ContextMenu } from '#/components/atoms/context-menu';
import { ErrorBoundary } from '#/components/atoms/error-boundary';

import { SectionContextMenu } from '#/components/molecules/context-menu-section';
import { Welcome } from '#/components/molecules/welcome';
import { CanvasSection } from '#/components/molecules/canvas-section';

import { actions } from 'lib/command';
import { useCanvas, useExtensions } from 'hooks';

import { CanvasErrorFallback } from './error';
import { CanvasActions } from './actions';

export const Canvas = observer(function Canvas() {
  const extensionsStore = useExtensions();
  const canvasStore = useCanvas();

  const sectionIds = canvasStore.sections.map(section => section.id);
  const hasSection = !!canvasStore.sections.length;

  const sectionsData = useMemo(
    () => extensionsStore.extensions.sections ?? {},
    [extensionsStore.extensions]
  );

  return (
    <OnlyClientSide>
      <CanvasActions />
      <div className="h-full">
        <ErrorBoundary fallback={<CanvasErrorFallback />}>
          {hasSection ? (
            <Reorder.Group
              axis="y"
              values={sectionIds}
              onReorder={actions.canvas.reorder}
            >
              {canvasStore.sections.map(({ type, id, props }) => {
                const section = sectionsData[type] as any;
                if (!section) return null;

                const Component = section.component;

                return (
                  <ContextMenu.Root key={id}>
                    <ContextMenu.Trigger asChild>
                      <CanvasSection id={id}>
                        <Component id={id} {...props} />
                      </CanvasSection>
                    </ContextMenu.Trigger>

                    <SectionContextMenu id={id} />
                  </ContextMenu.Root>
                );
              })}
            </Reorder.Group>
          ) : (
            <Welcome />
          )}
        </ErrorBoundary>
      </div>
    </OnlyClientSide>
  );
});
