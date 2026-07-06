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

export function Canvas() {
  const { extensions } = useExtensions();
  const { sections } = useCanvas();

  const sectionIds = sections.map(section => section.id);
  const hasSection = !!sections.length;

  const sectionsData = useMemo(() => extensions.sections ?? {}, [extensions]);

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
              {sections.map(({ type, id, props }) => {
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
}
