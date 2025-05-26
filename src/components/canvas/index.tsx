import { MouseEvent, useMemo } from 'react';
import { Reorder } from 'framer-motion';

import { OnlyClientSide } from 'components';
import { Icon } from 'components/ui/primitives/atoms/icon';
import { Tooltip } from 'components/ui/primitives/atoms/tooltip';
import { Clickable } from 'components/ui/primitives/atoms/clickable';
import { ErrorBoundary } from 'components/ui/primitives/atoms/error-boundary';

import { Welcome } from 'components/ui/primitives/compound/welcome';
import { CanvasSection } from 'components/ui/primitives/compound/canvas-section';

import { events } from 'app';
import { useCanvas, useExtensions } from 'hooks';
import { ContextMenus, PanelsEnum } from 'types';

import { CanvasErrorFallback } from './error';

export function Canvas() {
  const { extensions } = useExtensions();
  const { sections, previewMode } = useCanvas();

  const sectionIds = sections.map(section => section.id);
  const hasSection = !!sections.length;

  const sectionsData = useMemo(() => extensions.sections ?? {}, [extensions]);

  function handleOpenContextMenu(e: MouseEvent) {
    if (previewMode) return;

    events.contextmenu.open(ContextMenus.SECTION, e);
  }

  return (
    <OnlyClientSide>
      <div className="h-full" onContextMenu={handleOpenContextMenu}>
        {hasSection && !previewMode && (
          <div className="absolute top-md -left-md w-8 flex flex-col py-md bg-background-default box-border !rounded-full">
            <Tooltip position="left" content="Clear canvas" tone="danger">
              <Clickable.Button
                aria-label="Clear canvas"
                size="icon"
                variant="icon"
                tone="danger"
                onClick={events.canvas.clear}
              >
                <Icon name="trash" />
              </Clickable.Button>
            </Tooltip>

            <Tooltip position="left" content="Open settings panel" tone="brand">
              <Clickable.Button
                aria-label="Open settings panel"
                size="icon"
                variant="icon"
                tone="brand"
                onClick={() =>
                  events.panel.show('right', PanelsEnum.USER_SETTINGS)
                }
              >
                <Icon name="settings" />
              </Clickable.Button>
            </Tooltip>
          </div>
        )}

        <ErrorBoundary fallback={<CanvasErrorFallback />}>
          {previewMode && (
            <div className="absolute top-md -left-md w-8 flex flex-col py-md bg-background-default box-border !rounded-full">
              <Tooltip position="left" content="Use template" tone="success">
                <Clickable.Button
                  aria-label="Use template"
                  size="icon"
                  variant="icon"
                  tone="success"
                  onClick={events.template.use}
                >
                  <Icon name="check" />
                </Clickable.Button>
              </Tooltip>

              <Tooltip position="left" content="Leave preview" tone="danger">
                <Clickable.Button
                  aria-label="Leave preview"
                  size="icon"
                  variant="icon"
                  tone="danger"
                  onClick={() => events.template.preview()}
                >
                  <Icon name="x" />
                </Clickable.Button>
              </Tooltip>
            </div>
          )}

          {hasSection ? (
            <Reorder.Group
              axis="y"
              values={sectionIds}
              onReorder={events.canvas.reorder}
            >
              {sections.map(({ type, id, props }) => {
                const section = sectionsData[type] as any;
                if (!section) return null;

                const Component = section.component;

                return (
                  <CanvasSection key={id} id={id}>
                    <Component id={id} {...props} />
                  </CanvasSection>
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
