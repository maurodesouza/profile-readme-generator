import { MouseEvent, useMemo, useState } from 'react';
import { Reorder } from 'framer-motion';

import {
  Trash as TrashIcon,
  Check as CheckIcon,
  X as CloseIcon,
} from '@styled-icons/feather';

import { useCanvas, useExtensions } from 'hooks';
import {
  BaseSection,
  Tooltip,
  Welcome,
  OnlyClientSide,
  ErrorBoundary,
} from 'components';

import { events } from 'app';
import { ContextMenus } from 'types';

import * as S from './styles';
import { CanvasErrorFallback } from './error';

const Canvas = () => {
  const { extensions } = useExtensions();
  const { sections, currentSection, previewMode } = useCanvas();
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
            <Tooltip position="left" content="Clear canvas" variant="danger">
              <S.Button
                aria-label="Clear canvas"
                onClick={events.canvas.clear}
                variant="warn"
              >
                <TrashIcon size={16} />
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
              <Tooltip position="left" content="Use template" variant="success">
                <S.Button
                  aria-label="Use template"
                  onClick={events.template.use}
                  variant="success"
                >
                  <CheckIcon size={16} />
                </S.Button>
              </Tooltip>

              <Tooltip position="left" content="Leave preview" variant="danger">
                <S.Button
                  aria-label="Leave preview"
                  onClick={() => events.template.preview()}
                  variant="warn"
                >
                  <CloseIcon size={16} />
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
                  <BaseSection
                    key={id}
                    id={id}
                    selected={id === currentSection?.id}
                    previewMode={previewMode}
                  >
                    <Component id={id} {...props} />
                  </BaseSection>
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
