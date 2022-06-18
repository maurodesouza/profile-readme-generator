import { MouseEvent } from 'react';
import { Reorder } from 'framer-motion';

import {
  Trash as TrashIcon,
  Check as CheckIcon,
  X as CloseIcon,
} from '@styled-icons/feather';

import { sectionMap, BaseSection, Tooltip } from 'components';
import { useCanvas } from 'hooks';

import { events } from 'app';
import { ContextMenus } from 'types';

import * as S from './styles';

const Canvas = () => {
  const { sections, currentSection, previewMode } = useCanvas();

  const sectionIds = sections.map(section => section.id);

  const handleOpenContextMenu = (e: MouseEvent) => {
    !previewMode && events.contextmenu.open(ContextMenus.SECTION, e);
  };

  return (
    <S.Container onContextMenu={handleOpenContextMenu}>
      {!!sections.length && !previewMode && (
        <S.Wrapper>
          <Tooltip position="left" content="Clear canvas" variant="danger">
            <S.Button onClick={events.canvas.clear} variant="warn">
              <TrashIcon size={16} />
            </S.Button>
          </Tooltip>
        </S.Wrapper>
      )}

      {previewMode && (
        <S.Wrapper>
          <Tooltip position="left" content="Use template" variant="success">
            <S.Button onClick={events.template.use} variant="success">
              <CheckIcon size={16} />
            </S.Button>
          </Tooltip>

          <Tooltip position="left" content="Leave preview" variant="danger">
            <S.Button onClick={() => events.template.preview()} variant="warn">
              <CloseIcon size={16} />
            </S.Button>
          </Tooltip>
        </S.Wrapper>
      )}

      <Reorder.Group
        axis="y"
        values={sectionIds}
        onReorder={events.canvas.reorder}
      >
        {sections.map(({ type, id, props }) => {
          const Section = sectionMap[type];

          return (
            <BaseSection
              key={id}
              id={id}
              selected={id === currentSection?.id}
              previewMode={previewMode}
            >
              <Section id={id} {...props} />
            </BaseSection>
          );
        })}
      </Reorder.Group>
    </S.Container>
  );
};

export { Canvas };
