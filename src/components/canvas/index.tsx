import { MouseEvent, useMemo, useState } from 'react';
import { Reorder } from 'framer-motion';

import { OnlyClientSide } from 'components';
import { Icon } from 'components/ui/primitives/atoms/icon';
import { Tooltip } from 'components/ui/primitives/atoms/tooltip';
import { ErrorBoundary } from 'components/ui/primitives/atoms/error-boundary';

import { Welcome } from 'components/ui/primitives/compound/welcome';
import { CanvasSection } from 'components/ui/primitives/compound/canvas-section';

import { events } from 'app';
import { useCanvas, useExtensions } from 'hooks';
import { ContextMenus, PanelsEnum } from 'types';

import * as S from './styles';
import { CanvasErrorFallback } from './error';

const Canvas = () => {
  const { extensions } = useExtensions();
  const { sections, previewMode } = useCanvas();

  const [hasError, setHasError] = useState(false);

  const sectionIds = sections.map(section => section.id);
  const hasSection = !!sections.length;

  const sectionsData = useMemo(() => extensions.sections ?? {}, [extensions]);

  const handleOpenContextMenu = (e: MouseEvent) => {
    !previewMode && events.contextmenu.open(ContextMenus.SECTION, e);
  };

  return (
    <OnlyClientSide>
      <S.Container
        onContextMenu={handleOpenContextMenu}
        fullHeight={hasError || !hasSection}
      >
        {hasSection && !previewMode && (
          <S.Wrapper>
            <Tooltip position="left" content="Clear canvas" tone="danger">
              <S.Button
                aria-label="Clear canvas"
                onClick={events.canvas.clear}
                variant="warn"
              >
                <Icon name="trash" />
              </S.Button>
            </Tooltip>

            <Tooltip position="left" content="Open settings panel" tone="brand">
              <S.Button
                aria-label="Open settings panel"
                onClick={() =>
                  events.panel.show('right', PanelsEnum.USER_SETTINGS)
                }
                variant="info"
              >
                <Icon name="settings" />
              </S.Button>
            </Tooltip>
          </S.Wrapper>
        )}

        <ErrorBoundary
          fallback={<CanvasErrorFallback />}
          onChange={setHasError}
        >
          {previewMode && (
            <S.Wrapper>
              <Tooltip position="left" content="Use template" tone="success">
                <S.Button
                  aria-label="Use template"
                  onClick={events.template.use}
                  variant="success"
                >
                  <Icon name="check" />
                </S.Button>
              </Tooltip>

              <Tooltip position="left" content="Leave preview" tone="danger">
                <S.Button
                  aria-label="Leave preview"
                  onClick={() => events.template.preview()}
                  variant="warn"
                >
                  <Icon name="x" />
                </S.Button>
              </Tooltip>
            </S.Wrapper>
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
      </S.Container>
    </OnlyClientSide>
  );
};

export { Canvas };
