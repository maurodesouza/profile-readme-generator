import { MouseEvent, useMemo, useState } from 'react';
import { Reorder } from 'framer-motion';

import {
  Trash as TrashIcon,
  Check as CheckIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
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
  const { sections, currentSection, previewMode, lightTheme } = useCanvas();
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
        isLightTheme={lightTheme}
      >
        <S.Wrapper isLeftAligned={false}>
          <Tooltip
            position="right"
            content={`Preview: ${lightTheme ? 'dark' : 'light'} mode`}
            variant="info"
          >
            <S.Button
              aria-label={`Preview: ${lightTheme ? 'dark' : 'light'} mode`}
              onClick={() => events.canvas.switchTheme(lightTheme)}
              variant="success"
            >
              {lightTheme ? <MoonIcon size={16} /> : <SunIcon size={16} />}
            </S.Button>
          </Tooltip>
        </S.Wrapper>

        {hasSection && !previewMode && (
          <S.Wrapper isLeftAligned={true}>
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
            <S.Wrapper isLeftAligned={true}>
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
